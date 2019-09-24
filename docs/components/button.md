# Button

> A button allows a user to perform an action.

## Anatomy

Text-Only Buttons include:

1. A Text Label
2. Padding

Text + Icon Buttons include:

1. A Text Label
2. Padding
3. An Icon (before or after the label)

Icon-Only Buttons include:

1. An Icon
2. Padding

## Usage

- A button is a standalone call-to-action with space or visual emphasis around it.
- A button has a meaningful label that communicates the action that users can take.
- `Accessibility` Space (keyup) and Enter (keydown) activates the button.

::: tip Dos

- Do indicate the most important action on a page or region with a high-emphasis Primary button.
- Do indicate less important actions with medium-emphasis Secondary buttons or low-emphasis Tertiary buttons.

:::

::: danger Don'ts

- Don't wrap text inside a button.
- Don't use labels that are too long. A button's label should be very concise.
- Don't choose default button colors that could be confused with disabled buttons.
- `Accessibility` Don't create links that look like buttons. If dictation software users say "show buttons", the actions will not be listed. Keyboard users may try to press Space to activate, which will do nothing.

:::

::: warning Caution: Links for navigation

Links are similar to buttons but the two are not interchangeable. Consider using links if...

- You are navigating to another place on the same page or to a different page.
- The action will change the URL.
- It would be useful to "Copy", "Open in a new tab", or "Bookmark" the destination URL.
- The label is embedded in a sentence, and does not need margins or padding.
- The label conveys location, not an action (for example: a link that references a resource).
- `Accessibility` Only Enter (keydown) activates the link. Links always move focus when activated.

:::

::: warning Caution: Buttons for navigation

- Use a button if the component is styled like a button. (See _Don't create links that look like buttons_, above).
- If a button navigates the user to a new page or section, it might not meet the user's expectations.
- Consider the overall navigation of the site. Links help define the structure, architecture and hierarchy of the site&mdash;buttons don't.

:::