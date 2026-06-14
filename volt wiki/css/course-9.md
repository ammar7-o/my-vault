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
# CSS Course – Part 9 – Position, Z-Index, List & Table Styling

### 30 – Position

- **`position: static` — default, follows normal flow.**
- **`position: relative` — positioned relative to itself.**
- **`position: absolute` — positioned relative to the nearest positioned ancestor.**
- **`position: fixed` — positioned relative to the viewport.**
- **`position: sticky` — toggles between relative and fixed based on scroll.**

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
        <div class="one">One</div>
        <div class="two">Two</div>
    </body>
</html>
```

```css
div {
    color: white;
    width: 100px;
    padding: 10px;
}
.one {
    background-color: red;
    position: absolute;
}
.two {
    background-color: green;
}
```

### 31 – Z-Index

- **`z-index` controls the stacking order of positioned elements.**
Higher values appear on top.
Only works on positioned elements (`relative`, `absolute`, `fixed`, `sticky`).

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
        <div class="one">One</div>
        <div class="two">Two</div>
        <div class="three">Three</div>
    </body>
</html>
```

```css
div {
    color: white;
    width: 100px;
    padding: 10px;
    text-align: center;
    position: absolute;
}
.one {
    background-color: red;
    left: 20px;
    top: 20px;
    z-index: 3;
}
.two {
    background-color: green;
    left: 15px;
    top: 15px;
    z-index: 2;
}
.three {
    background-color: blue;
    z-index: 1;
}
```

### 32 – List Styling

- **`list-style-type` changes bullet/number style (e.g., `circle`, `lower-roman`, `none`).**
- **`list-style-image` uses a custom image as bullets.**
Can also use `list-style-position` for inside/outside bullets.

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
        <h3>Title</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>
                JS
                <ul>
                    <li>Reactjs</li>
                    <li>Vuejs</li>
                    <li>Angular</li>
                </ul>
            </li>
        </ul>
    </body>
</html>
```

```css
ul {
    list-style-type: lower-armenian;
}
li {
    background-color: #eee;
    margin-bottom: 20px;
}
```

### 33 – Table Styling

- **`border-spacing` sets space between table cells.**
- **`border-collapse: collapse` merges adjacent cell borders.**
Style `<thead>`, `<tbody>`, `<td>` elements for complete table designs.

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
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Osama</td>
                    <td>38</td>
                    <td>o@nn.sa</td>
                </tr>
                <tr>
                    <td>Ahmed</td>
                    <td>38</td>
                    <td>o@nn.sa</td>
                </tr>
                <tr>
                    <td>Sayed</td>
                    <td>38</td>
                    <td>o@nn.sa</td>
                </tr>
                <tr>
                    <td>Ali</td>
                    <td>38</td>
                    <td>o@nn.sa</td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
```

```css
body {
    font-family: Arial, Helvetica, sans-serif;
}
table {
    width: 100%;
    border: 1px solid #ccc;
    border-spacing: 0;
}
table td {
    padding: 15px;
    background-color: #eee;
    border: 1px solid #ccc;
}
table thead td {
    background-color: #f44336;
    color: #fff;
    font-weight: bold;
    text-align: center;
    border-color: #f35246;
}
```
