\# Build Log



\## Goal

Build the MVP of SkillBridge AI that can score a user's resume through a chat interface using a real AI model.



\---



\## Iteration 1

\### Planned

\- Build a chat interface.

\- Connect an AI model.

\- Implement resume scoring.



\### Issue

The Anthropic API key and credit caused issues, so the chat could not complete requests.



\### Change

Switched from Anthropic to the Google Gemini API.



\### Result

The chat successfully generated responses using Gemini.



\---



\## Iteration 2

\### Planned

Implement a resume scoring tool.



\### Issue

The tool was being triggered when users only asked to analyze their resume.



\### Change

Updated the system prompt so the `scoreResume` tool is only called when the user explicitly asks to score their resume.



\### Result

The agent now follows the expected behavior.



\---



\## Iteration 3

\### Planned

Improve reliability.



\### Issue

Needed to handle failures gracefully.



\### Change

Added error handling for API failures and tested error states.



\### Result

The application now displays errors instead of crashing.



\---



\## Scope Changes



The original idea included multiple career features such as internship search and interview preparation. For the MVP, the scope was reduced to resume scoring so the complete end-to-end workflow could be finished and tested with a live AI connection.



\---



\## Final Status



\- Chat interface working

\- Google Gemini connected

\- Resume scoring tool working

\- Error handling implemented

\- End-to-end flow verified

