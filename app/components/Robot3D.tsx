"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function RobotModel() {
    const { nodes } = useGLTF("/models/robot/ai_robot/scene.gltf");
    const robotRef = useRef<THREE.Group>(null);
    const reduceMotion = useMemo(() => {
        if (typeof window === "undefined") return false;

        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }, []);
    useFrame((state) => {
        if (!robotRef.current) return;
        if (!reduceMotion) {
            robotRef.current.rotation.y += 0.008;
        }
    });

    return (
        <group ref={robotRef} position={[0, -1.3, 0]}>
            <primitive
                object={(nodes as any).RootNode}
                scale={7.5}
                rotation={[0, -Math.PI / 2, 0]}
            />
        </group>
    );
}

export default function Robot3D() {
    return (
        <Canvas
            camera={{ position: [0, 0.1, 6.5], fov: 35 }}
            style={{ width: "100%", height: "100%" }}
        >
            <ambientLight intensity={2} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} />

            <Suspense fallback={null}>
                <RobotModel />
                <Environment preset="city" />
            </Suspense>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={false}
            />
        </Canvas>
    );
}

useGLTF.preload("/models/robot/ai_robot/scene.gltf");