# SkillBridge – Internship & Career Portal

SkillBridge is an AI-powered internship and career portal built with Next.js, React, Tailwind CSS, TypeScript, and the Vercel AI SDK. It helps students discover internships and graduate opportunities, get career guidance, improve resumes, and prepare for interviews through one modern platform.

## What SkillBridge Does

SkillBridge is designed for students and early-career users who need help with:

* Finding internship and job opportunities
* Getting career guidance
* Improving resumes for specific roles
* Preparing for interviews
* Exploring suitable career paths
* Getting AI-powered feedback through the Career Assistant

The platform combines a responsive web interface with an AI Career Assistant, resume analysis, internship and job listings, and interactive visual experiences.

## Features

* AI Career Assistant
* AI Resume Analysis
* `scoreResume` AI tool
* Internship Listings
* Job Listings
* Responsive User Interface
* Interactive 3D AI Assistant
* Custom WebGL Aurora Hero Background
* Mouse and touch-responsive shader interaction
* Reduced-motion and performance fallbacks
* AI request validation and route protection

## Tech Stack

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Vercel AI SDK
* Google Gemini 2.5 Flash
* Zod
* React Three Fiber
* Three.js
* WebGL / GLSL
* Vitest
* React Testing Library
* Playwright
* Vercel

---

## Setup

A new developer should be able to reproduce the project using the following steps.

### Prerequisites

Install:

* Node.js
* npm
* Git

A Google Generative AI API key is also required for the AI Career Assistant.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_key
```

Never commit `.env.local` or API keys to GitHub.

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

For production, the environment variable is configured through the Vercel project settings.

---

## How to Use the AI Career Assistant

Open the AI Assistant from the SkillBridge interface and ask a career-related question.

### Example 1 – Internship Guidance

```text
I am a software engineering student looking for a frontend development internship. What skills should I focus on?
```

The assistant provides career-focused guidance based on the user's question.

### Example 2 – Interview Preparation

```text
Help me prepare for a frontend developer internship interview.
```

The assistant can provide interview questions, preparation advice, and suggested areas to practice.

### Example 3 – Resume Analysis

The resume analysis tool can be used for a selected job role.

```text
Job role: Frontend Developer Intern
```

The `scoreResume` tool returns:

```ts
{
  score: number;
  strengths: string[];
  suggestions: string[];
  jobRole: string;
}
```

---

## AI Career Assistant

The AI Career Assistant uses the Vercel AI SDK with Google Gemini 2.5 Flash.

The assistant helps students with:

* Internship guidance
* Career questions
* Resume improvement
* Interview preparation
* Career path suggestions

The AI system prompt defines the assistant's role and keeps responses focused on student career and internship support.

---

## AI Tool Contract

### Tool Name

`scoreResume`

### Purpose

The `scoreResume` tool analyzes a resume against a selected job role and returns a resume score with strengths and improvement suggestions.

### Input Schema

```ts
{
  jobRole: string;
}
```

### Return Shape

```ts
{
  score: number;
  strengths: string[];
  suggestions: string[];
  jobRole: string;
}
```

The tool input is validated using Zod before the tool is executed.

---

## Guardrails and Request Protection

SkillBridge includes several guardrails to keep the AI interaction focused and reduce unnecessary or invalid requests.

### Career Scope

The AI assistant is designed to provide:

* Internship guidance
* Career guidance
* Resume feedback
* Interview preparation
* Career path suggestions

It should not present itself as a guaranteed source of employment outcomes.

For example, the assistant should not guarantee that a student will receive a particular internship or job.

### Request Limits

The AI endpoint includes the following protections:

* Maximum number of messages per request: **20**
* Maximum message length: **4,000 characters**
* Maximum `jobRole` length for the resume tool: **200 characters**
* Streaming request duration: **30 seconds**
* Invalid requests are rejected before the AI model is called
* API credentials remain server-side and are not exposed to the browser

These limits help reduce trivial abuse, invalid requests, excessive request sizes, and unnecessary AI API usage.

---

## V2 Evaluation Results

The V2 version of SkillBridge was evaluated using representative career-assistant and resume-analysis scenarios.

| Evaluation Area                | Result |
| ------------------------------ | ------ |
| Internship guidance            | Pass   |
| Career guidance                | Pass   |
| Interview preparation          | Pass   |
| Resume analysis tool           | Pass   |
| Job-role input validation      | Pass   |
| Long/invalid request handling  | Pass   |
| AI response streaming          | Pass   |
| Career-focused system behavior | Pass   |

The evaluation confirmed that the V2 agent can handle its main intended career-support tasks while applying the implemented request limits and tool validation.

---

## Architecture Overview

```text
                         SkillBridge
                              │
                              ▼
                    Next.js / React UI
                              │
             ┌────────────────┴────────────────┐
             │                                 │
             ▼                                 ▼
      AI Career Assistant              Internship / Job UI
             │
             ▼
       Next.js API Route
             │
       ┌─────┴─────┐
       │           │
       ▼           ▼
 Vercel AI SDK   Zod Validation
       │
       ▼
Google Gemini 2.5 Flash
       │
       └───────────────┐
                       ▼
                 AI Response
                       │
                       ▼
                  User Interface


3D Experience
     │
     ├── React Three Fiber
     └── Three.js

Aurora Hero
     │
     └── WebGL / GLSL Shader
```

The frontend is built with React and Next.js. AI requests are handled through server-side API routes using the Vercel AI SDK. Zod validates tool inputs before execution. The AI model is accessed server-side, while reusable UI, 3D components, and shader functionality are organized into separate components.

---

## Custom Aurora Shader Hero

The SkillBridge homepage includes a custom fullscreen WebGL fragment shader implemented directly in `AuroraHero.tsx`.

The shader creates a personalized deep-space visual with:

* Flowing gold and blue light ribbons
* Animated star fields
* FBM-based cloud/noise patterns
* Sparkle texture
* Vignette shading
* Subtle grain
* Mouse and touch interaction

The shader uses three core uniforms:

* `u_time` – controls animation and movement
* `u_resolution` – keeps the shader responsive to canvas dimensions
* `u_mouse` – provides subtle cursor/touch influence over the flowing ribbons

The shader is rendered behind the real SkillBridge hero content so the visual effect enhances the interface without reducing text readability.

### Performance and Accessibility

The WebGL canvas uses a capped device pixel ratio of `1.5` to reduce unnecessary rendering costs on high-DPI devices.

The animation pauses when the browser tab becomes hidden.

When `prefers-reduced-motion: reduce` is enabled, the animated WebGL background is disabled and replaced with a static CSS gradient.

If WebGL is unavailable, the static gradient fallback is used.

### Shader File

```text
components/
└── AuroraHero.tsx
```

---

## Interactive 3D AI Assistant

SkillBridge includes an interactive 3D AI Assistant built using React Three Fiber.

The homepage features a 3D robot inside an AI Assistant card. When users interact with the card, a full-screen AI chat interface opens where they can ask questions about internships, careers, and resume guidance.

The 3D experience includes:

* Interactive 3D robot rendered with React Three Fiber
* Rotating robot animation
* Reduced-motion support
* Responsive AI Assistant card for desktop and mobile
* Lazy loading of the 3D component using Next.js dynamic import

---

## AI Route Protection

The AI chat endpoint is protected against unnecessarily large requests and long-running executions.

* Maximum number of messages per request: 20
* Maximum message length: 4,000 characters
* Maximum tool `jobRole` length: 200 characters
* Streaming request duration is limited using `maxDuration = 30`
* Invalid requests are rejected before the AI model is called
* API credentials remain server-side and are not exposed to the browser

---

## Testing

The project includes automated testing using Vitest, React Testing Library, and Playwright.

### Unit and Component Tests

```bash
npm run test
```

Run tests once:

```bash
npm run test:run
```

### End-to-End Tests

```bash
npm run e2e
```

---

## Key Technical Decisions

### Next.js

Next.js was selected for its App Router architecture, server-side functionality, and production deployment workflow.

### Vercel AI SDK

The Vercel AI SDK provides streaming AI responses and tool calling without requiring a separate AI backend.

### Google Gemini

Google Gemini 2.5 Flash was selected as the AI model for the career assistant.

### React Three Fiber

React Three Fiber was used to integrate the 3D AI Assistant into the React application.

### WebGL / GLSL

A custom WebGL fragment shader was used instead of a pre-built background to create a unique visual identity for the SkillBridge hero.

### Zod

Zod is used to validate AI tool inputs.

---

## Motion Design Decisions

The Ask AI Assistant button was designed to communicate its state clearly throughout the interaction.

* **Hover:** A 200ms ease-out scale animation provides responsive feedback.
* **Loading:** The button enters a loading state and is disabled to prevent duplicate clicks.
* **Success:** A confirmation state is displayed briefly before navigating to `/chat`.
* **Error:** A retry state is displayed before returning to the idle state.
* **Accessibility:** Keyboard focus indicators are provided, duplicate clicks are prevented, and `prefers-reduced-motion` is respected.

---

## Performance

The 3D AI Assistant was tested using Lighthouse.

Results:

* Performance: **63**
* Best Practices: **100**

Performance improvements include:

* Lazy loading the 3D AI Assistant using Next.js dynamic import
* Reduced-motion support for the 3D animation
* Preloading the 3D model using `useGLTF.preload()`
* Capping the Aurora shader device pixel ratio at 1.5
* Pausing shader animation when the browser tab is hidden
* Using a static gradient when reduced motion is preferred or WebGL is unavailable

---

## Cross-Browser Testing

The production application was tested across:

* Chrome
* Desktop responsive layouts
* Mobile responsive layouts

Testing focused on navigation, AI interaction, responsive UI, animations, and fallback behavior.

---

## Limitations

The current version has some limitations:

* AI responses depend on the capabilities and availability of Google Gemini.
* AI-generated career and resume advice should be reviewed by the user rather than treated as guaranteed professional advice.
* The current resume analysis tool accepts a job role as its tool input and can be expanded with more detailed resume/job-description analysis in future versions.
* The 3D model and WebGL shader add rendering cost, particularly on lower-powered devices.
* Lighthouse Performance was **63**, so further performance optimization is still possible.
* Automated AI-flow coverage can be expanded with more production-level scenarios.

---

## Deployment

The project is deployed to Vercel.

Production environment variables are configured through Vercel rather than committed to the repository.

---

## How AI Tools Built This Project

AI tools were used as development assistants throughout the project. Generated suggestions were reviewed, tested, modified, and integrated into the application.

AI assistance was used for:

* React and TypeScript development
* Debugging Next.js and AI SDK issues
* AI system prompt development
* GLSL shader development and refinement
* Explaining shader concepts such as UV coordinates, uniforms, noise, and FBM
* Responsive UI improvements
* Vitest and Playwright testing
* Performance and accessibility improvements
* Documentation

For the Aurora shader, AI was used to explore GLSL techniques and refine the visual effect. The final shader was customized for the SkillBridge color palette and integrated into the actual capstone project.

---

## What I'd Add With More Time

* Compress the 3D model to reduce its file size.
* Add more interactive animations to the 3D AI Assistant.
* Allow users to customize the robot's appearance.
* Further reduce unused JavaScript reported by Lighthouse.
* Add more comprehensive automated coverage for production AI flows.
* Expand the resume analysis tool to compare resumes against complete job descriptions.

---

## What I Built

I built SkillBridge as an AI-powered Internship & Career Portal focused on helping students discover opportunities and improve their career readiness.

The project combines a modern responsive interface with an AI Career Assistant, resume analysis, internship and job listings, a 3D AI Assistant, and a custom WebGL Aurora hero background.

The project is designed as a production-style capstone with AI integration, testing, accessibility considerations, performance optimization, guardrails, and deployment.

## Author

**Aqsa Farooq**
Software Engineering Student
