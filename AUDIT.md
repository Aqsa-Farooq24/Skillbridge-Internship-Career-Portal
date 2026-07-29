\# Accessibility \& Performance Audit



\## Project

SkillBridge – Internship \& Career Portal



\## Objective

The goal of this audit was to improve the website's accessibility and performance by identifying issues using Lighthouse, WAVE, and keyboard-only testing, implementing fixes, and validating the improvements through a second audit.



\---



\# Audit Tools



\- Google Lighthouse (Mobile)

\- WAVE Accessibility Evaluation Tool

\- Keyboard-only Navigation Testing



\---



\# Before Audit



\## Lighthouse (Mobile)



\- Performance: 90

\- Accessibility: 89

\- Best Practices: 100

\- SEO: 90



\---



\## WAVE Accessibility Audit



\### Issues Found



\- 3 Empty Button accessibility errors were detected.

\- Interactive icon buttons did not have accessible labels.



\---



\# Changes Implemented



The following accessibility improvements were made:



\- Added `aria-label` to the Mobile Menu button.

\- Added `aria-label` to the Search button.

\- Added `aria-label` to the Notifications button.

\- Added `aria-label` to the Profile/Login button.

\- Added `aria-label` to the Search Close button.

\- Added `aria-label` to the Login Modal Close button.

\- Added `aria-label` to the Register Modal Close button.



\---



\# Keyboard Accessibility Testing



The primary user flow was tested using keyboard-only navigation.



Verified:



\- Navigation links

\- Search functionality

\- Notification button

\- Login/Profile button

\- Search dialog

\- Login dialog



Result:



\- All primary interactions were accessible using only the keyboard.



\---



\# After Audit



\## Lighthouse (Mobile)



\- Performance: 93

\- Accessibility: 95

\- Best Practices: 100

\- SEO: 50



\---



\## WAVE Accessibility Audit



Result:



\- Empty Button accessibility issues resolved.

\- Accessibility improvements verified after implementing the fixes.



\---



\# Summary



The website was successfully audited using Lighthouse, WAVE, and keyboard-only testing. Accessibility issues identified during the audit were resolved by adding accessible labels to icon-only buttons and verifying keyboard navigation throughout the primary user flow. After implementing these improvements, the website was re-tested to confirm the changes.



\---



\# Evidence



\## Before Lighthouse



!\[Before Lighthouse](./images/lighthouse-before.png)



\## After Lighthouse



!\[After Lighthouse](./images/lighthouse-after.png)

## BEFORE WAVE



!\[Before WAVE](./images/wave-before.png)



\## After WAVE



!\[After WAVE](./images/wave-after.png)

