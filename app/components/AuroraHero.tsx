'use client';

import { useEffect, useRef } from 'react';

/**
 * SkillBridge Aurora Hero
 * -------------------------------------------------------------
 * Fullscreen WebGL fragment shader background: a deep-space scene
 * with twinkling stars and two flowing light ribbons (gold + blue),
 * rendered behind real hero content (headline, subtext, buttons
 * passed in as `children`).
 *
 * Core uniforms used: u_time, u_resolution, u_mouse (all three).
 * Responsible defaults baked in below:
 *   - devicePixelRatio capped at 1.5 (see `resize()`)
 *   - animation pauses when the browser tab is hidden (see `onVisibility()`)
 *   - falls back to a static CSS gradient for prefers-reduced-motion
 *     or when WebGL isn't available at all
 */
 
// ---------------------------------------------------------------
// VERTEX SHADER
// ---------------------------------------------------------------
// Runs once per vertex of the fullscreen quad (4 corners, see
// `positions` below). It does no work of its own — it just passes
// each corner straight through to clip space. All the visuals come
// from the FRAGMENT shader running per-pixel; this vertex shader
// only exists because WebGL requires one to rasterize a shape at all.

const VERT_SRC = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

 
// ---------------------------------------------------------------
// FRAGMENT SHADER
// ---------------------------------------------------------------
// Runs once per PIXEL on the screen, every frame. Everything you
// see — background color, stars, ribbons, grain — is decided here.

const FRAG_SRC = `
  precision highp float;

  uniform vec2 u_resolution;
  uniform float u_time;
  uniform vec2 u_mouse;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  // Star field: sharp twinkling points across the whole canvas
  float stars(vec2 p, float density, float brightness) {
    vec2 grid = floor(p * density);
    float h = hash(grid);
    if (h > 0.98) {
      vec2 cellUv = fract(p * density) - 0.5;
      float d = length(cellUv);
      float twinkle = 0.5 + 0.5 * sin(u_time * 3.0 + h * 100.0);
      return smoothstep(0.15, 0.0, d) * brightness * twinkle;
    }
    return 0.0;
  }

  // A single flowing ribbon: distance from a wavy sine path, turned into a glow
  float ribbon(vec2 p, float yOffset, float freq, float speed, float thickness) {
    float wave = sin(p.x * freq + u_time * speed) * 0.15
               + sin(p.x * freq * 2.3 - u_time * speed * 0.7) * 0.06;
    float d = abs(p.y - yOffset - wave);
    return smoothstep(thickness, 0.0, d);
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 p = uv;
    p.x *= u_resolution.x / u_resolution.y;

    vec2 mouse = u_mouse / u_resolution.xy;
    mouse.x *= u_resolution.x / u_resolution.y;
    float mouseDist = length(p - mouse);
    float pull = smoothstep(1.0, 0.0, mouseDist) * 0.06;

    // Base deep-space background with soft drifting fbm clouds
    float t = u_time * 0.04;
    float cloud = fbm(p * 1.5 + vec2(t, -t * 0.5));

    vec3 deepNavy = vec3(0.02, 0.05, 0.09);
    vec3 midNavy  = vec3(0.04, 0.09, 0.15);
    vec3 gold     = vec3(0.90, 0.75, 0.40);
    vec3 blue     = vec3(0.30, 0.55, 0.95);

    vec3 color = mix(deepNavy, midNavy, smoothstep(0.2, 0.7, cloud));

    // Gold ribbon flowing across lower-middle, blue ribbon across upper area
    float goldGlow = ribbon(p + vec2(pull, 0.0), 0.62, 2.2, 0.35, 0.05)
                    + ribbon(p + vec2(pull, 0.0), 0.68, 2.0, 0.28, 0.09) * 0.5;
    float blueGlow = ribbon(p - vec2(pull, 0.0), 0.28, 1.8, -0.3, 0.04)
                    + ribbon(p - vec2(pull, 0.0), 0.22, 1.6, -0.22, 0.08) * 0.5;

    color += gold * goldGlow * 0.9;
    color += blue * blueGlow * 0.8;

    // Extra sparkle noise riding along each ribbon
    float sparkle = fbm(p * 8.0 + t * 3.0) ;
    color += gold * goldGlow * sparkle * 0.4;
    color += blue * blueGlow * sparkle * 0.4;

    // Star field layered on top
    color += vec3(1.0, 0.97, 0.9) * stars(p, 45.0, 0.85);
    color += vec3(1.0, 0.9, 0.7) * stars(p + 13.7, 22.0, 0.6);
    color += gold * stars(p + 71.3, 12.0, 0.45);

    float vignette = smoothstep(1.3, 0.1, length(uv - 0.5));
    color *= mix(0.6, 1.0, vignette);

    float grain = (hash(gl_FragCoord.xy + u_time) - 0.5) * 0.025;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function AuroraHero({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const gl = canvas.getContext('webgl');

    if (!gl || prefersReducedMotion) {
      canvas.style.display = 'none';
      if (staticRef.current) staticRef.current.style.display = 'block';
      return;
    }

    function compile(type: number, src: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
      }
      return shader;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT_SRC));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG_SRC));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positions = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const u_resolution = gl.getUniformLocation(program, 'u_resolution');
    const u_time = gl.getUniformLocation(program, 'u_time');
    const u_mouse = gl.getUniformLocation(program, 'u_mouse');

    let mouseX = 0, mouseY = 0, targetMouseX = 0, targetMouseY = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      targetMouseX = canvas!.width / 2;
      targetMouseY = canvas!.height / 2;
      mouseX = targetMouseX;
      mouseY = targetMouseY;
    }
    resize();
    window.addEventListener('resize', resize);

    function onMouseMove(e: MouseEvent) {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      targetMouseX = e.clientX * dpr;
      targetMouseY = (window.innerHeight - e.clientY) * dpr;
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length > 0) {
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        targetMouseX = e.touches[0].clientX * dpr;
        targetMouseY = (window.innerHeight - e.touches[0].clientY) * dpr;
      }
    }
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    let running = true;
    let rafId = 0;

    function onVisibility() {
      running = !document.hidden;
      if (running) rafId = requestAnimationFrame(render);
    }
    document.addEventListener('visibilitychange', onVisibility);

    const startTime = performance.now();

    function render() {
      if (!running) return;
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      const elapsed = (performance.now() - startTime) / 1000;
      gl!.uniform2f(u_resolution, canvas!.width, canvas!.height);
      gl!.uniform1f(u_time, elapsed);
      gl!.uniform2f(u_mouse, mouseX, mouseY);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    }
    rafId = requestAnimationFrame(render);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={staticRef}
        className="absolute inset-0 hidden"
        style={{
          background:
            'linear-gradient(135deg, #020509 0%, #04121f 40%, #0d2538 70%, #3a3320 100%)',
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>  
  );
}