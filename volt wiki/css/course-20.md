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
# CSS Course – Part 20 – Selectors, Media Queries, Framework & Global Values

### 78 – Selectors Reference Part 1

Universal `*`, element, class `.`, id `#` selectors.
Descendant `parent child`, direct child `parent > child`.
Multiple classes `.class1.class2` on the same element.
Grouping `div, p` for shared styles.

```css
/*
    CSS Selectors
        - *
        - Element => [p, div, h2]
        - Element OtherElement => div p
        - .class-name
        - #id-name
        - .parent .child
        - .class-one.class-two
        - .class-name div, .class-name p
        - Element.class-name => p.class-name
        - .parent > .child => Direct Child
*/
```

### 79 – Selectors Reference Part 2

Adjacent sibling `div + p` (immediately after).
General sibling `p ~ div` (any sibling after).
Attribute selectors: `[attr]`, `[attr=value]`, `[attr~=value]` (word), `[attr*=value]` (substring), `[attr^=value]` (starts with).

```css
/*
    CSS Selectors
        - Element + Other Element => [div + p]
        - Element ~ Other Elements => [p ~ div]
        - [Attribute]
        - Element[Attribute]
        - [Attribute=Value]
        - Element[Attribute=Value] => input[type="submit"]
        - [Attribute~=Value] => Contains A Word
        - [Attribute*=Value] => Contains A Atring
        - [Attribute^=Value] => Start With A String
*/
```

### 80 – Selectors Reference Part 3

- **`:first-child` and `:last-child` — first/last among all siblings.**
- **`:first-of-type` and `:last-of-type` — first/last of a specific element type.**
- **`:only-child` — element with no siblings.**

```css
/*
    CSS Selectors
        - :first-child
        - :last-child
        - :first-of-type
        - :last-of-type
        - :only-child
*/
```

### 81 – Selectors Reference Part 4

- **`:not(selector)` — excludes matching elements.**
- **`:nth-child(n)` — selects by position (e.g., `2n` for even, `3` for third).**
- **`:nth-last-child(n)` — counts from the end.**
- **`:nth-of-type(n)` and `:nth-last-of-type(n)` — same but per element type.**

```css
/*
    CSS Selectors
        - :not(Selectors)
        - :nth-child(n)
        - :nth-last-child(n)
        - :nth-of-type(n)
        - :nth-last-of-type(n)
*/
```

### 82 – Selectors Reference Part 5

- **`:root` — the document root (same as `html` but higher specificity).**
- **`:checked`, `:disabled`, `:required` — form element states.**
- **`:focus` — active focus state.**
- **`::selection`, `::placeholder` — pseudo elements for styling.**

```css
/*
    CSS Selectors
        - :root
        - :checked
        - :empty
        - :disabled
        - :required
        - :focus
        - ::selection
        - ::placeholder
*/
```

### 83 – Media Queries And Responsive Design – Introduction

- **`@media` applies styles based on conditions (screen size, print, etc.).**
- **`@media print` styles apply when printing.**
- **`@media (min-width: Xpx)` targets screens wider than X.**
Combine conditions with `and` keyword.

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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </body>
</html>
```

```css
/*
  Media Queries
  Responsive Design
*/

* {
    box-sizing: border-box;
    margin: 0;
}
.parent {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px auto;
}
.parent > div {
    background-color: red;
    color: white;
    text-align: center;
    font-size: 20px;
    width: 290px;
}

@media print {
    .parent > div {
        font-size: 100px;
    }
}

@media print {
    .parent > div:first-child {
        display: none;
    }
}

@media (min-width: 1400px) {
    .parent > div {
        background-color: blue;
    }
}

@media (min-width: 1000px) and (max-width: 1400px) {
    .parent > div {
        background-color: blue;
    }
}
```

### 84 – Media Queries And Responsive Design – Standards

Standard breakpoints: Mobile (≤767px), Small (768-991px), Medium (992-1199px), Large (≥1200px).
Can use `media` attribute on `<link>` to load specific stylesheets.
Plan for future devices — design with flexibility.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <link rel="stylesheet" href="main.css" />
        <link rel="stylesheet" href="print.css" media="print" />
        <link
            rel="stylesheet"
            href="print.css"
            media="(min-width: 1000px) and (max-width: 1400px)"
        />
        <style media="print">
            .parent > div {
                font-size: 100px;
            }
        </style>
    </head>
    <body>
        <div class="parent">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </body>
</html>
```

```css
/*
    Media Queries
    Responsive Design
        - Concept Of Width
        - Mobile
        - Small Screens
        - Medium Screens
        - Large Screens
        - Future Updates
*/

* {
    box-sizing: border-box;
    margin: 0;
}
.parent {
    display: flex;
    width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px auto;
}
.parent > div {
    background-color: red;
    color: white;
    text-align: center;
    font-size: 20px;
    width: 290px;
}

/* Mobile */

@media (max-width: 767px) {
}

/* Small Screens */

@media (min-width: 768px) and (max-width: 991px) {
}

/* Medium Screens */

@media (min-width: 992px) {
}

/* Large Screens */

@media (min-width: 1200px) {
}

/* Custom */

@media (max-width: 1199px) {
}
```

### 85 – Media Queries And Responsive Design – Practice

Mobile-first approach: start with small screen styles, then add media queries for larger screens.
Use `min-width` for mobile-first (progressive enhancement).
Use `width: 100%` on mobile, then switch to `calc()` for wider layouts.

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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    </body>
</html>
```

```css
/*
    Media Queries
    Responsive Design
        - Mobile First
        - Test Devices
*/

* {
    box-sizing: border-box;
    margin: 0;
}
.parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.parent > div {
    padding: 20px;
    background-color: red;
    color: white;
    font-size: 20px;
    text-align: center;
    font-weight: bold;
    width: 100%;
    margin-bottom: 5px;
}

/* Mobile */

@media (max-width: 767px) {
}

/* Small Screens */

@media (min-width: 768px) {
    .parent > div {
        width: calc(50% - 10px);
    }
}

/* Medium Screens */

@media (min-width: 992px) {
    .parent > div {
        width: calc(25% - 10px);
    }
}

/* Large Screens */

@media (min-width: 1200px) {
}

/* Custom */

@media (max-width: 1199px) {
}
```

### 86 – Create Your Framework

Build reusable utility classes like `.center-position`, `.circle-100`, `.center-flex`.
Reusable classes speed up development and keep code consistent.

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
            <div class="center-position circle-100 center-flex">Child</div>
        </div>
        <div class="product center-position circle-200 center-flex">
            Product
        </div>
    </body>
</html>
```

```css
/*
    Create Your Framework
*/

* {
    box-sizing: border-box;
    margin: 0;
}
.parent {
    position: relative;
    background-color: #eee;
    margin: 20px auto;
    width: 1200px;
    height: 200px;
}
.parent div {
    background-color: green;
    color: white;
}
.product {
    background-color: red;
    color: white;
}
.center-position {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.circle-100 {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.circle-200 {
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
}
.border-r {
    border-radius: 4px;
}
```

### 87 – CSS Global Values

- **`inherit` — forces inheritance from parent.**
- **`initial` — resets to the CSS specification default.**
- **`unset` — inherits if inheritable, otherwise initial (acts like inherit+initial).**
- **`revert` — resets to the browser's default style.**

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
            <span>Span</span>
            <strong>Strong</strong>
            <span>Span</span>
            <p>Paragraph</p>
            <button>Button</button>
        </div>
    </body>
</html>
```

```css
/*
    CSS Global Values
        - inherit
        - initial
        - unset
        --- If Inherit => inherit
        --- If Not => initial
        - revert CSS Level [4]
        - all
*/

* {
    box-sizing: border-box;
    margin: 0;
}
div {
    color: red;
    font-size: 40px;
    font-weight: bold;
    background-color: #eee;
    padding: 20px;
    margin: 5px;
    border: 2px solid black;
}
```

### 88 – The End And How To Master HTML And CSS

Practice at https://cssbattle.dev/ for CSS challenges.
Build real projects from https://www.frontendmentor.io/.

```css
/*
	https://cssbattle.dev/
	https://www.frontendmentor.io/
*/
```
