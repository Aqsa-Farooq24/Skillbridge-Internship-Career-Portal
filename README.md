# SkillBridge – AI Internship & Career Portal

SkillBridge is an AI-powered internship and career portal built with Next.js, React, Tailwind CSS, and the Vercel AI SDK. It helps Connecting students with internships, graduate opportunities, and leading companies through one modern platform.

---

## Features

- AI Career Assistant
- AI Resume Analysis Tool
- Internship Opportunities
- Job Opportunities
- Responsive UI

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

## Author

Aqsa Farooq
Software Engineering Student