# SkillBridge – AI Internship & Career Portal

SkillBridge is an AI-powered internship and career portal built with Next.js, React, Tailwind CSS, and the Vercel AI SDK. It helps Connect students with internships, graduate opportunities, and leading companies through one modern platform.

---

## Features

- AI Career Assistant
- AI Resume Analysis
- Internship Listings
- Job Listings
- Responsive User Interface

---

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS
- TypeScript
- Vercel AI SDK
- Google Gemini 2.5 Flash
- Zod

---

## Installation

```bash
npm install
npm run dev
```

Open:

```
http://localhost:3000
```

---

# AI Tool Contract

## Tool Name

scoreResume

### Purpose

Analyzes a resume against a selected job role and returns a resume score with strengths and improvement suggestions.

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

---

## Project Structure

```text
app/
components/
lib/
public/
```

---

## Deployment

The project is deployed using  Vercel.

---

## Motion Design Decisions

The Ask AI Assistant button was designed to communicate its state clearly throughout the interaction instead of changing abruptly.

* Hover: A 200ms ease-out scale animation provides quick and responsive feedback when users move their cursor over the button.
* Loading: After clicking, the button enters a loading state for 1.5 seconds to simulate an asynchronous request. During this time, the button is disabled to prevent duplicate clicks.
* Success: On success, a confirmation state (Ready) is displayed briefly for 600ms before navigating to the AI chat page (`/chat`), giving users clear visual confirmation.
* Error: If the simulated request fails (20% failure rate), the button displays a retry state before returning to its idle state.
* Accessibility: The button includes a visible keyboard focus indicator, prevents repeated clicks during loading, and respects the user's `prefers-reduced-motion` setting by reducing unnecessary motion while preserving visual feedback.

## Author

Aqsa Farooq
Software Engineering Student