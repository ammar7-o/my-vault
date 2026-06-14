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
# CSS Course – Part 18 – 2D & 3D Transforms

### 65 – 2D Transform – Scale

- **`transform: scale(x, y)` changes element size.**
- **`scaleX()` and `scaleY()` scale on one axis only.**
Values > 1 enlarge, between 0-1 shrink, negative values flip.

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
        <div>Transform</div>
    </body>
</html>
```

```css
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: scaleX(2);
    transform: scaleY(2);
    transform: scale(2, 2);
}
```

### 66 – 2D Transform – Rotate

- **`transform: rotate(angle)` spins the element.**
Units: `deg`, `turn` (1turn = 360deg).
Positive values rotate clockwise, negative counter-clockwise.

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
        <div>Transform</div>
    </body>
</html>
```

```css
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: rotate(45deg);
    transform: rotate(1turn);
    transform: rotate(0.5turn);
    transform: rotate(0.25turn);
}
```

### 67 – 2D Transform – Translate

- **`transform: translate(x, y)` moves the element from its current position.**
- **`translateX()`, `translateY()` move on one axis.**
Great for centering with `translate(-50%, -50%)`.

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
        <div>Transform</div>
    </body>
</html>
```

```css
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: translate(-100px, -100px);
}
```

### 68 – 2D Transform – Skew

- **`transform: skew(x-angle, y-angle)` tilts the element.**
- **`skewX()` tilts horizontally, `skewY()` vertically.**
Can be used to create perspective or diagonal effects.

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
        <h2>Test Title</h2>
        <div>Transform</div>
    </body>
</html>
```

```css
h2 {
    position: relative;
    color: white;
    margin: 20px auto;
    width: fit-content;
    padding: 20px;
}
h2::before {
    content: "";
    background-color: red;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transform: skewX(20deg);
}
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: skewX(10deg);
    transform: skewX(-10deg);
    transform: skewY(10deg);
    transform: skewY(-10deg);
    transform: skew(10deg, 10deg);
}
```

### 69 – 2D Transform – Matrix

- **`matrix(a, b, c, d, e, f)` combines all 2D transforms in one function.**
Represents: scaleX, skewY, skewX, scaleY, translateX, translateY.

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
        <div>Transform</div>
    </body>
</html>
```

```css
/*
    matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
*/
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: matrix(1.2, 0.2679, 0, 1.2, 20, 20);
    transform: translateX(20px) translateY(20px) scaleX(1.2) skewY(15deg)
        skewX(0deg) scaleY(1.2);
}
```

### 70 – Transform Origin

- **`transform-origin` sets the point where the transform is applied from.**
Default is `50% 50%` (center).
Values: keywords (top, left, center, bottom, right), %, or CSS units.

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
        <div>Transform</div>
    </body>
</html>
```

```css
/*
    transform-origin
        Syntax
            Default Values => 50% 50% 0
            2D Transform => transform-origin(X, Y)
            3D Transform => transform-origin(X, Y, Z)
                X-Axis
                    - CSS Unit [px, em, rem]
                    - %
                    - Keyword
                        -- Left = 0%
                        -- Center = 50%
                        -- Right = 100%
                Y-Axis
                    - CSS Unit [px, em, rem]
                    - %
                    - Keyword
                        -- Top = 0%
                        -- Center = 50%
                        -- Bottom = 100%
*/

div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform-origin: 0 50%;
    transform: rotate(100deg);
}
```

### 71 – 3D Transform – Rotate

- **`rotateX()`, `rotateY()`, `rotateZ()` rotate around different axes.**
- **`rotate3d(x, y, z, angle)` rotates on all axes at once.**
The element needs a 3D space context to show depth.

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
        <div>Transform</div>
    </body>
</html>
```

```css
div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: rotateX(50deg);
    transform: rotateY(50deg);
    transform: rotateZ(50deg);
    transform: rotate3d(0, 1, 1, 65deg);
}
```

### 72 – 3D Transform – Translate, Perspective, Perspective Origin

- **`perspective` on the parent gives 3D depth to child transforms.**
- **`translateZ()` moves the element closer/farther along the Z-axis.**
- **`perspective-origin` changes the viewer's viewpoint position.**

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
        <div class="shape">
            <div>Transform</div>
        </div>
    </body>
</html>
```

```css
.shape {
    perspective: 300px;
    perspective-origin: center center;
}
.shape div {
    margin: 200px auto;
    width: 200px;
    height: 200px;
    background-color: rgb(255 0 0 / 39%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    transform: translate(100px, -100px);
    transform: translateX(100px);
    transform: translateZ(100px);
    transform: translate3d(0, 0, 100px);
}
```

### 73 – 3D Transform – Backface Visibility And Flip Product

- **`backface-visibility: hidden` hides the back of an element when rotated.**
- **`transform-style: preserve-3d` keeps 3D transformations on children.**
Used to create flip-card effects with front and back faces.

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
        <div class="container">
            <div class="box">
                <div class="face front">Front</div>
                <div class="face back">Back</div>
            </div>
        </div>
    </body>
</html>
```

```css
* {
    box-sizing: border-box;
    margin: 0;
}
.container {
    margin: 40px auto;
    width: 200px;
    perspective: 600px;
}
.box {
    position: relative;
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    transition: transform 1s;
    transform-origin: right center;
}
.box:hover {
    -webkit-transform: translateX(-100%) rotateY(-180deg);
    -moz-transform: translateX(-100%) rotateY(-180deg);
    -ms-transform: translateX(-100%) rotateY(-180deg);
    -o-transform: translateX(-100%) rotateY(-180deg);
    transform: translateX(-100%) rotateY(-180deg);
}
.box .face {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 30px;
    color: white;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.box .front {
    background-color: red;
}
.box .back {
    background-color: green;
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
}
```
