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
# CSS Course – Part 12 – !important, Margin Collapse & CSS Variables

### 43 – !important Declaration And Use Cases

- **`!important` overrides any other CSS declaration.**
Use sparingly — it breaks the natural cascade and makes debugging harder.
Better to use specificity rather than `!important`.

*No code examples for this lesson — only presentation slides.*

### 44 – The Margin Collapse

Vertical margins between adjacent block elements collapse into a single margin.
The larger margin value wins.
Nesting does not prevent collapse unless you add padding, border, or `overflow: hidden`.
Horizontal margins never collapse.

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
        <div class="parent">
            <div class="one"></div>
            <div class="two">
                <div class="up"></div>
                <div class="down"></div>
            </div>
        </div>
    </body>
</html>
```

```css
/*
    The Margin Collapse
        [1] Only Vertical Margin Collapse
        [2] Bigger Margin Wins
        [3] Margin Collapsing With Elements Without Anything Between
        [4] Nesting Does Not Prevent Collapse
*/
.parent {
    overflow: hidden;
    margin: auto;
    width: 400px;
    height: 200px;
    padding: 10px;
    background-color: #eee;
}
.parent .one,
.parent .two {
    float: left;
    width: 50%;
    height: 100%;
}
.one {
    background-color: #ddd;
}
.two {
    background-color: #aaa;
}
.up {
    background-color: red;
    color: white;
    height: 80px;
    margin-bottom: 40px;
}
.down {
    background-color: green;
    color: white;
    height: 80px;
    margin-top: 40px;
}
```

### 45 – CSS Variables And Trainings

CSS custom properties (variables) defined with `--name`.
- **`var(--name, fallback)` accesses the variable value.**
Global variables go in `:root`.
Local variables override global ones in a specific scope.
Works with `calc()` for dynamic values.

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
        <div class="main">Main Div</div>
        <h2>Main Title</h2>
        <p>My Paragraph</p>
        <a href="#">My Link</a>
        <div class="local">Local</div>
    </body>
</html>
```

```css
/*
    CSS Variables
        - Global Variable
        - Local Variable
        var(Variable Name, Fall Back Value)
*/

:root {
    --mainColor: blue;
    --mainPadding: 10px;
}
.main {
    background-color: var(--mainColor, black);
    color: white;
    padding: calc(20px + var(--mainPadding));
}
h2 {
    color: var(--mainColor);
    background-color: #eee;
    padding: var(--mainPadding);
}
p {
    color: var(--mainColor);
    border: 2px solid var(--mainColor);
    padding: var(--mainPadding);
}
a:hover {
    color: var(--mainColor);
}
.local {
    --mainColor: black;
    background-color: var(--mainColor);
    color: white;
}
```
