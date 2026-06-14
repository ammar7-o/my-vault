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
# CSS Course – Part 15 – Filters, Gradients & Pointer Events

### 54 – Filters

- **`filter` applies visual effects like blur, grayscale, brightness, contrast, etc.**
- **`grayscale(100%)` makes an image black and white; hover to show colors.**
Effects can be combined and animated with transitions.

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
        <img
            src="https://via.placeholder.com/250/0000FF/808080 ?Text=LearnCSS"
            alt="Any Image"
        />
    </body>
</html>
```

```css
/*
    Filters
*/

* {
    box-sizing: border-box;
}
img {
    transition: 0.3s;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
}
img:hover {
    filter: grayscale(0);
    -webkit-filter: grayscale(0);
}
```

### 55 – Gradients

- **`linear-gradient(direction, color-stops)` creates smooth color transitions.**
Direction can be `to right`, `to bottom`, or an angle like `45deg`.
Color stops at specific percentages create striped patterns.

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
        <div>Gradients</div>
    </body>
</html>
```

```css
/*
    Gradients
        linear-gradient(Direction || Angle, Color Stop 1, Color Stop 2, ....)
*/

div {
    width: 400px;
    height: 200px;
    background-color: #eee;
    margin: 20px auto;
    position: relative;
    padding: 10px;
}
div:before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    background-color: red;
    height: 10px;
    background-image: linear-gradient(
        to right,
        #2980b9 20%,
        #27ae60 20%,
        #27ae60 40%,
        #d35400 40%,
        #d35400 60%,
        #8e44ad 60%,
        #8e44ad 80%,
        #c0392b 80%
    );
}
```

### 56 – Pointer Event and Caret Color

- **`pointer-events: none` makes an element ignore all mouse/clicks.**
- **`caret-color` changes the color of the text input cursor (caret).**

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
        <input type="text" />
        <a href="https://google.com">Google</a>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Laudantium, culpa dicta vitae quas temporibus nemo ducimus odio
            animi? Blanditiis voluptas suscipit id et ea eveniet doloribus
            libero labore commodi eligendi!
        </p>
    </body>
</html>
```

```css
input {
    caret-color: red;
}
a {
    pointer-events: none;
}
```
