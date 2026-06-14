---
banner: https://www.milesweb.com/blog/wp-content/uploads/2025/06/what-is-css.png
tags:
- html
- volt-wiki
- coding
- programming
- css
source: Elzero Web School
link: https://youtube.com/playlist?list=PLDoPjvoNmBAzhFD3niPAa1C1gXG4cs14J&si=a8m0uJTUTGdseGZF
book: https://drive.google.com/file/d/15Q3G1N9FUBFDfM3zedH0JY_79qJt0rkd/view?usp=drive_link
---
# CSS Course – Part 3 – Padding, Margin, Border & Outline

### 7 – Padding

Padding is the space inside the element, between content and border.
Shorthand: `padding: top right bottom left` (clockwise).
Can use 1 value (all sides), 2 values (top/bottom, left/right), 3 values (top, left/right, bottom), or 4 values.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
        <div>
            <h2>Product Title</h2>
            <p>This Is Paragraph</p>
        </div>
    </body>
</html>
```

```css
div {
    background-color: #ddd;

    /* Top Right Bottom Left */
    /* 10px 10px 10px 10px */
    /* padding: 10px; */

    /* Top Right Bottom Left */
    /* 10px 20px 10px 20px */
    /* padding: 10px 20px; */

    /* Top Right Bottom Left */
    /* 10px 20px 15px 20px */
    /* padding: 10px 20px 15px; */

    padding-bottom: 10px;
    padding-top: 10px;
}
```

### 8 – Margin

Margin is the space outside the element, between it and other elements.
- **`margin: auto` horizontally centers a block element within its container.**
Margin collapses vertically — the larger margin wins.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
        <div>
            <h2>Product Title</h2>
            <p>This Is Paragraph</p>
        </div>
    </body>
</html>
```

```css
div {
    background-color: #ddd;
    padding: 10px;
    width: 70%;
    margin: auto;
}
```

### 9 – Border

Border goes around the padding (outside the element box).
Properties: `border-width`, `border-style` (solid, dashed, dotted...), `border-color`.
Shorthand: `border: width style color`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
        <div>
            <h2>Product Title</h2>
            <p>This Is Paragraph</p>
        </div>
    </body>
</html>
```

```css
div {
    background-color: #ddd;
    padding: 10px;
    width: 70%;
    margin: auto;
    border-width: 10px;
    border-color: red;
    border-style: solid;
    border: 10px solid red;
}
```

### 10 – Outline

Outline is similar to border but does NOT take up space in the box model.
It sits outside the border and can overlap other elements.
Useful for accessibility (focus indicators) without affecting layout.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <link rel="stylesheet" href="main.css" />
    </head>
    <body>
        <div>
            <h2>Product Title</h2>
            <p>This Is Paragraph</p>
        </div>
    </body>
</html>
```

```css
div {
    background-color: #ddd;
    width: 300px;
    padding: 10px;
    outline: 10px solid red;
    border: 10px solid blue;
}
```
