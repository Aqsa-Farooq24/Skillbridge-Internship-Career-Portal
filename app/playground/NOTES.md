# Component Comparison Notes

## Modal

My implementation:
- Added dialog role manually
- Added Escape key handling
- Created basic focus management

Shadcn handled:
- Better focus trapping using Radix primitives
- Automatic focus restoration
- More edge cases like nested dialogs

## Tabs

My implementation:
- Added arrow key navigation manually
- Managed active tab state

Shadcn handled:
- Complete ARIA pattern
- Better keyboard support
- More accessibility edge cases


## Disclosure

My implementation:
- Managed aria-expanded manually

Shadcn handled:
- More reusable API
- Better state management