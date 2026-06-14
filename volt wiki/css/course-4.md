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
# CSS Course – Part 4 – Display & Visibility

### 11 – Display – Block, Inline-Block, Inline

Block elements take full width (if no width set) and add line breaks.
Inline elements don't respect width/height and stay on the same line.
Inline-block behaves like inline but respects width, height, padding, and margin on all sides.

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
        <div>Div => Block</div>
        <div>Div => Block</div>
        <div>Div => Block</div>

        <span>Span => Inline</span>
        <span>Span => Inline</span>
        <span>Span => Inline</span>
    </body>
</html>
```

```css
/*

    Block
        - Take Full Width If No Width
        - Add Line Break
        - Respect Padding, Margin, Width, Height

    Inline
        - Do Not Repsepct Width, Height
        - Respect Padding And Margin [ Just Wight + Left ]
        - Do Not Add Line Break
        - Allow Elements Before And After It in The Same Line

    Inline-Block
        - Allow Elements Before And After It in The Same Line
        - Respect Padding, Margin, Width, Height

*/

span {
    background-color: #eee;
    display: inline-block;
}
```

### 12 – Element Visibility And Use Case

- **`visibility: hidden` hides the element but preserves its space in the layout.**
- **`display: none` removes the element entirely from the layout flow.**
Use visibility when you need the space to remain empty.

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
        <div class="first">First</div>
        <div>Div</div>
    </body>
</html>
```

```css
div {
    background-color: red;
    margin: 10px 0;
}
.first {
    visibility: hidden;
}
```
