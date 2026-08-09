# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: chat.spec.ts >> primary chat flow
- Location: tests\chat.spec.ts:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'AI Assistant' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "SkillBridge" [ref=e4] [cursor=pointer]:
        - /url: /
      - generic [ref=e5]:
        - link "Home" [ref=e6] [cursor=pointer]:
          - /url: /
        - link "About" [ref=e7] [cursor=pointer]:
          - /url: /about
        - link "Internships" [ref=e8] [cursor=pointer]:
          - /url: /internship
        - link "Jobs" [ref=e9] [cursor=pointer]:
          - /url: /jobs
        - link "Companies" [ref=e10] [cursor=pointer]:
          - /url: /companies
        - link "Contact" [ref=e11] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e12]:
        - button "Open search" [ref=e13]
        - button "Notifications" [ref=e17]:
          - generic [ref=e21]: "3"
        - button "Open login" [ref=e22]
  - main [ref=e26]:
    - main [ref=e27]:
      - generic [ref=e32]:
        - paragraph [ref=e33]: WELCOME TO
        - heading "SkillBridge" [level=1] [ref=e34]
        - heading "Internship & Career Portal" [level=2] [ref=e35]
        - paragraph [ref=e36]: Connecting students with internships, graduate opportunities, and leading companies through one modern platform.
        - generic [ref=e37]:
          - link "Explore Internships" [ref=e38] [cursor=pointer]:
            - /url: /internship
          - link "Learn More" [ref=e39] [cursor=pointer]:
            - /url: /about
      - generic [ref=e40] [cursor=pointer]: AI Assistant
  - contentinfo [ref=e48]:
    - generic [ref=e49]:
      - generic [ref=e50]:
        - generic [ref=e51]:
          - heading "SkillBridge" [level=2] [ref=e52]
          - paragraph [ref=e53]: Helping students discover internships, graduate opportunities, and careers through one modern platform.
        - generic [ref=e54]:
          - heading "Quick Links" [level=3] [ref=e55]
          - generic [ref=e56]:
            - link "Home" [ref=e57] [cursor=pointer]:
              - /url: /
            - link "About" [ref=e58] [cursor=pointer]:
              - /url: /about
            - link "Internships" [ref=e59] [cursor=pointer]:
              - /url: /internship
            - link "Jobs" [ref=e60] [cursor=pointer]:
              - /url: /jobs
            - link "Companies" [ref=e61] [cursor=pointer]:
              - /url: /companies
            - link "Contact" [ref=e62] [cursor=pointer]:
              - /url: /contact
        - generic [ref=e63]:
          - heading "Contact" [level=3] [ref=e64]
          - generic [ref=e65]:
            - paragraph [ref=e66]: Karachi, Pakistan
            - paragraph [ref=e67]: info@skillbridge.com
            - paragraph [ref=e68]: +92 300 1234567
      - generic [ref=e69]: © 2026 SkillBridge. Designed & Developed by Aqsa Farooq. All Rights Reserved.
  - button "Open Next.js Dev Tools" [ref=e75] [cursor=pointer]
  - alert [ref=e79]
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("primary chat flow", async ({ page }) => {
  4  |   await page.goto("http://localhost:3000");
  5  | 
  6  |   await expect(
  7  |     page.getByText("Internship & Career Portal")
  8  |   ).toBeVisible();
  9  | 
  10 |   const aiButton = page.getByRole("button", { name: "AI Assistant" });
> 11 |   await aiButton.waitFor({ state: "visible", timeout: 60000 });
     |                  ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  12 |   await aiButton.click();
  13 | 
  14 |   await expect(
  15 |     page.getByPlaceholder("Ask about internships...")
  16 |   ).toBeVisible();
  17 | 
  18 |   await page
  19 |     .getByPlaceholder("Ask about internships...")
  20 |     .fill("Frontend internships");
  21 | 
  22 |   await page.getByRole("button", { name: "Send" }).click();
  23 | 
  24 |   await expect(
  25 |     page.getByText("Frontend internships")
  26 |   ).toBeVisible();
  27 | });
```