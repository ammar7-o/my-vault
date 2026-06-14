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
# CSS Course – Part 16 – Grid – Parent Properties

### 57 – Grid – Parent – Template Columns

- **`display: grid` activates CSS Grid on the parent.**
- **`grid-template-columns` defines the number and size of columns.**
Units: `px`, `%`, `auto`, `fr` (fraction), `repeat(count, size)`.

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
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </body>
</html>
```

```css
/*
    Grid
        Parent
            - display: grid | inline-grid
            - grid-template-columns: [Number Of Columns In] => [Px, %, Auto, Repeat]
*/

* {
    box-sizing: border-box;
}
.parent {
    margin: 20px auto;
    width: 800px;
    height: 500px;
    background-color: #ddd;
    display: grid;
    grid-template-columns: repeat(2, auto) repeat(2, 1fr);
}
.parent div {
    background-color: red;
    color: white;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
```

### 58 – Grid – Parent – Template Rows And Gap

- **`grid-template-rows` defines row heights.**
- **`gap` (or `row-gap`/`column-gap`) sets spacing between grid cells.**
The `fr` unit distributes available space proportionally.

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
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </body>
</html>
```

```css
/*
    Grid
    Parent
        - display: grid | inline-grid
        - grid-template-columns: [Number Of Columns In] => [Px, %, Auto, Fraction, Repeat, Mix]
        - grid-template-rows: [Number Of Rows In] => [Px, %, Auto, Fraction, Repeat, Mix]
        - gap: [Row Gap] [Column Gap]
*/

* {
    box-sizing: border-box;
}
.parent {
    margin: 20px auto;
    width: 800px;
    height: 500px;
    background-color: #ddd;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    /* row-gap: 10px; */
    /* column-gap: 10px; */
    gap: 10px 10px;
}
.parent div {
    background-color: red;
    color: white;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
```

### 59 – Grid – Parent – Justify And Align Content

- **`justify-content` aligns the grid horizontally within its container.**
- **`align-content` aligns the grid vertically within its container.**
Values: `start`, `end`, `center`, `stretch`, `space-between`, `space-around`, `space-evenly`.

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
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
        </div>
    </body>
</html>
```

```css
/*
    Grid
        Parent
            - display: grid | inline-grid
            - grid-template-columns: [Number Of Columns In] => [Px, %, Auto, Fraction, Repeat, Mix]
            - grid-template-rows: [Number Of Rows In] => [Px, %, Auto, Fraction, Repeat, Mix]
            - gap: [Row Gap] [Column Gap]
            - justify-content
            - align-content
*/

* {
    box-sizing: border-box;
}
.parent {
    margin: 20px auto;
    width: 800px;
    height: 500px;
    background-color: #ddd;
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: repeat(3, auto);
    gap: 10px 10px;
    justify-content: space-between;
    align-content: space-between;
}
.parent div {
    background-color: red;
    color: white;
    padding: 20px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
}
```

### 60 – Grid – Parent – Complete Layout With Template Areas

- **`grid-template-areas` creates a named layout grid using ASCII art-like strings.**
Each child element references an area name with `grid-area`.
Great for creating full page layouts easily.

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
        <div class="page">
            <h2>Elzero</h2>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <section>Content</section>
            <aside>Sidebar</aside>
            <footer>Footer</footer>
        </div>
    </body>
</html>
```

```css
/*
    Grid
        Parent
            - display: grid | inline-grid
            - grid-template-columns: [Number Of Columns In] => [Px, %, Auto, Fraction, Repeat, Mix]
            - grid-template-rows: [Number Of Rows In] => [Px, %, Auto, Fraction, Repeat, Mix]
            - gap: [Row Gap] [Column Gap]
            - justify-content
            - align-content
*/

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
ul {
    list-style: none;
}
ul li {
    display: inline-block;
}
.page {
    height: 100vh;
    background-color: #eee;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: 50px auto 50px;
    grid-template-areas:
        "logo logo nav nav nav nav nav nav nav nav"
        "cont cont cont cont cont cont cont . side side"
        "foot foot foot foot foot foot foot foot foot foot";
}
h2 {
    grid-area: logo;
    background-color: red;
    color: white;
}
nav {
    grid-area: nav;
    background-color: blue;
    color: white;
}
section {
    grid-area: cont;
    background-color: yellow;
    color: white;
}
aside {
    grid-area: side;
    background-color: green;
    color: white;
}
footer {
    grid-area: foot;
    background-color: black;
    color: white;
}
```
