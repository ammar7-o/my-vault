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
# CSS Course – Part 8 – Cursor, Float, Calc & Opacity

### 26 – Mouse Cursor

- **`cursor` changes the mouse pointer style on hover.**
Common values: `pointer`, `default`, `grab`, `text`.
Can use a custom image with `url('path.png'), auto`.

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
        <a href="#">Google</a>
        <span>Test</span>
        <button>Click</button>
        <hr />
        <p>This Is P</p>
        <p>This Is P</p>
        <p>This Is P</p>
    </body>
</html>
```

```css
button {
    background: transparent;
    border: none;
    color: red;
    font-weight: bold;
    cursor: pointer;
}
/*
    TIP:
        - You Can Use An Image As A Cursor
        - .png Image Is Prefered
        - You Can't Use .svg or .gif
        - The Code:
            .class {
                cursor: url('path-to-image.png'), auto;	
            }
*/
```

### 27 – Float And Clear

- **`float` pushes an element to the left or right, letting text wrap around it.**
- **`clear` prevents elements from wrapping around floated elements on one or both sides.**
Now largely replaced by Flexbox and Grid for layout.

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
            <div>Product One</div>
            <div>Product Two</div>
            <div>Product Three</div>
            <div>Product Four</div>
        </div>
        <div class="clear"></div>
        <p>This Is P For Testing Float</p>
    </body>
</html>
```

```css
.parent {
    background-color: red;
    padding: 10px;
}
.parent div {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #eee;
    width: 25%;
    float: left;
}
.clear {
    clear: both;
}
```

### 28 – Mastering The CSS Calculation

- **`calc()` performs math operations in CSS values.**
Can combine different units like `calc(100% - 60px)`.
Useful for responsive layouts with fixed-size elements.

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
        <div>Product One</div>
        <div>Product Two</div>
        <div>Product Three</div>
        <div>Product Four</div>
    </body>
</html>
```

```css
body {
    margin: 0;
}
div {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    background-color: #eee;
    float: left;
    width: calc((100% - 60px) / 5);
    margin-left: 10px;
}
/*
    - Content Width Is: 100%
    - 6 Spaces = 10px * 6 => 60px (From Content Width)
    - Available Space => 100% - 60px
    - 5 Elements => Width Of Each = (100% - 60px) / 5
*/
```

### 29 – Opacity

- **`opacity` sets the transparency level (0 = invisible, 1 = fully visible).**
Unlike `rgba()`, opacity affects the entire element including its children.
- **`rgba()` only affects the background/text color, not child elements.**

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
        <div class="one">Element</div>
        <div class="two">Element</div>
    </body>
</html>
```

```css
.one {
    background-color: red;
    opacity: 0.1;
}
.two {
    background-color: rgb(255 0 0 / 0.1);
}
```
