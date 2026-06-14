---
banner: https://166tech.az/uploads/blogs/33915082.webp
tags:
  - html
  - volt-wiki
  - coding
  - programming
source: Elzero Web School
link: https://youtu.be/qfPUMV9J5yw?si=ifj_eO7nVy6d3NbB
book: https://drive.google.com/file/d/11dIvR8TV6QIOHYTzlZX3XYf_hnAoW1yw/view?usp=drive_link
---
# Accessibility Intro
### Accessibility (a11y) Intro
- **Semantic Buttons**: Replacing generic `<div>` elements with proper `<button>` tags allows screen readers to recognize them as clickable controls and enables users to interact with them via the keyboard.
- **Label Linking**: Connecting the `<label for="user">` to `<input id="user">` makes the input accessible, allowing screen readers to announce the label text when the field is focused.
```html
 <form action="">
      <label for="user">Username</label>
      <input id="user" type="text" name="user">
      <!-- Old -->
      <div>Send</div>
      <div>Reset</div>
      <!-- New -->
      <button>Send</button>
      <button>Reset</button>
    </form>
```
# ARIA And Screen Readers
### ARIA & Screen Readers
- **`role="checkbox"`**: Tells screen readers that a generic element (like a `<div>`) should be treated and announced as a checkbox.
- **`aria-checked="true"`**: Communicates the active state (checked or unchecked) of a custom accessible element to assistive technologies.
- **`tabindex="0"`**: Forces a normally non-focusable element (like a `<div>`) into the natural keyboard tab order so users can navigate to it using the **Tab** key.
- **`aria-labelledby="plan1"`**: programmatically links an element to its descriptive text label using the label's `id`.
```html
  <!-- ARIA -->
    <h1>Book Title</h1>
    <h3>Chapter One</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptas placeat necessitatibus nulla velit quae
      reprehenderit minus fugiat illo tempora eaque, ullam corrupti doloribus perspiciatis unde rem perferendis nesciunt
      aspernatur!
    </p>
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus quisquam sed at reiciendis asperiores officia
      similique id non, ducimus nobis possimus eligendi itaque magni molestias illum quam beatae. Velit, facilis?
    </div>
    <h2>Inside Chapter One</h2>
    <form action="">
      <label for="skill1">Skill One</label>
      <input id="skill1" type="checkbox" checked />
      <label for="skill2">Skill Two</label>
      <input id="skill2" type="checkbox" />
    </form>
    <hr />
    <div role="checkbox" aria-checked="true" tabindex="0" aria-labelledby="plan1">Plan One</div>
    <label id="plan1">Plan One Label</label>
    <div tabindex="0">Plan Two</div>
    <div tabindex="0">Plan Three</div>
```
