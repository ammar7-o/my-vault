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
# CSS Course – Part 19 – Animations

### 74 – Animation – KeyFrames, Name, Duration

- **`@keyframes` defines the animation steps.**
- **`animation-name` references the keyframes.**
- **`animation-duration` sets how long the animation runs.**
Keyframes use `from`/`to` or percentages (0%-100%) for multiple steps.

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
        <div>Animation</div>
    </body>
</html>
```

```css
/*
    Animation
        - KeyFrames
        - Name
        - Duration
*/

* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: Arial, Helvetica, sans-serif;
}
div {
    width: 100px;
    height: 100px;
    background-color: red;
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    animation-name: change-color;
    animation-duration: 2s;
}
/* Code One */
@keyframes change-color {
    from {
        background-color: red;
    }
    to {
        background-color: blue;
    }
}
/* Code Two */
@keyframes change-color {
    0% {
        background-color: red;
    }
    100% {
        background-color: blue;
    }
}
/* Code Three */
@keyframes change-color {
    0% {
        background-color: red;
    }
    5% {
        background-color: blue;
    }
    80% {
        background-color: black;
    }
    100% {
        background-color: red;
    }
}
```

### 75 – Animation – Iteration Count, Timing Function, Spinner Loading

- **`animation-iteration-count` sets how many times the animation runs (`infinite` for never-ending).**
- **`animation-timing-function` controls speed curve (`linear`, `ease`, `ease-in`, `ease-out`).**
Can create loading spinners by rotating a bordered circle.

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
        <div></div>
    </body>
</html>
```

```css
/*
    Animation
        - Iteration Count
        - Timing Function
        - Spinner Loading
*/

* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: Arial, Helvetica, sans-serif;
}
div {
    width: 100px;
    height: 100px;
    background-color: #e8e3e3;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    border-radius: 50%;
    border: 5px solid #e91e63;
    transition: transform 0.3s;
    border-left-color: transparent;
    animation-name: spin;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
```

### 76 – Animation – Direction, Fill Mode, Play State, Delay

- **`animation-direction`: `normal`, `reverse`, `alternate`, `alternate-reverse`.**
- **`animation-fill-mode` keeps the state before/after animation (`none`, `forwards`, `backwards`, `both`).**
- **`animation-play-state`: `running` or `paused`.**
- **`animation-delay` waits before starting.**
Shorthand: `animation: name duration timing delay count direction fill-mode play-state`.

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
        <div></div>
    </body>
</html>
```

```css
/*
    Animation
        - Iteration Count
        - Timing Function
        - Spinner Loading
*/

* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: Arial, Helvetica, sans-serif;
}
div {
    width: 100px;
    height: 100px;
    background-color: #e8e3e3;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    animation-name: coloring;
    animation-duration: 5s;
    animation-iteration-count: 1;
    animation-timing-function: linear;
    animation-direction: reverse;
    animation-delay: -2s;
    animation-fill-mode: both;
    animation-play-state: running;
    animation: coloring 3s linear 2s infinite reverse;
}
div:hover {
    animation-play-state: paused;
}
@keyframes coloring {
    0% {
        background-color: red;
    }
    50% {
        background-color: blue;
    }
    100% {
        background-color: black;
    }
}
```

### 77 – Up And Down Loading Animation Training

Practical loading animation with bouncing dots.
Each dot has a staggered `animation-delay`.
Uses `translateY()` with `opacity` changes in keyframes.
- **`animation-direction: alternate` makes it bounce back.**

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
        <div class="load">
            <div class="one"></div>
            <div class="two"></div>
            <div class="three"></div>
        </div>
    </body>
</html>
```

```css
/*
    Loading Animation
*/

* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #333;
}
.load {
    display: flex;
    justify-content: center;
    margin: 50px auto;
}
.load div {
    width: 20px;
    height: 20px;
    background-color: orchid;
    border-radius: 50%;
    margin: 0 5px;
    animation-name: up-and-down;
    animation-duration: 0.9s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
.load .two {
    animation-delay: 0.3s;
}
.load .three {
    animation-delay: 0.6s;
}
@keyframes up-and-down {
    to {
        opacity: 0.2;
        -webkit-transform: translateY(-20px);
        -moz-transform: translateY(-20px);
        -ms-transform: translateY(-20px);
        -o-transform: translateY(-20px);
        transform: translateY(-20px);
    }
}
```
