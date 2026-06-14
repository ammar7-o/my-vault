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
# CSS Course – Part 7 – Inheritance & Typography

### 22 – Inheritance

Some CSS properties are inherited from parent to child (e.g., `color`, `font-family`).
- **`inherit` forces a property to inherit from its parent.**
Not all properties are inheritable (e.g., `border`, `margin`).

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
            <h3>Elzero Web School</h3>
            <p>Welcome To The Website</p>
        </div>
    </body>
</html>
```

```css
div {
    text-align: center;
    padding: 20px;
    background-color: #eee;
    font-size: 20px;
    border: 2px solid blue;
}
div p {
    border: 2px solid;
    border-color: inherit;
    padding: inherit;
}
```

### 23 – Typography – Font Family

- **`font-family` sets the typeface.**
Always provide fallback fonts (e.g., `Arial, Helvetica, sans-serif`).
Serif fonts have small lines at the end of characters; sans-serif do not.

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
        <div class="with-ser">
            Welcome To Elzero Web School, Hello From Philo
        </div>
        <div class="san-ser">
            Welcome To Elzero Web School, Hello From Philo
        </div>
    </body>
</html>
```

```css
.with-ser {
    font-family: "Times New Roman", Times, serif;
}
.san-ser {
    font-family: Arial, Helvetica, sans-serif;
}
.with-ser,
.san-ser {
    background-color: #eee;
    padding: 10px;
}
```

### 24 – Typography – Font Size And CSS Units

Absolute units: `px` (pixels).
Relative units: `%`, `em` (relative to parent), `rem` (relative to root), `vw` (viewport width), `vh` (viewport height).

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
            Elzero Web School
            <span>Test</span>
        </div>
    </body>
</html>
```

```css
body {
    font-size: 40px;
}
div {
    font-size: 5vw;
}
div span {
    font-size: 2rem;
}
```

### 25 – Typography – Font Style, Variant And Weight

- **`font-style` sets italic or normal.**
- **`font-variant: small-caps` converts text to small capitals.**
- **`font-weight` controls boldness (100-900 or keywords like `bold`, `normal`).**

*No code examples for this lesson — only presentation slides.*
