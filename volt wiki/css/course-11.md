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
# CSS Course – Part 11 – Vendor Prefixes, Border Radius, Box Shadow, Box Model & Transition

### 38 – Vendors Prefixes

Vendor prefixes ensure experimental CSS features work across browsers.
- **`-webkit-` for Chrome/Safari, `-moz-` for Firefox, `-ms-` for IE/Edge, `-o-` for old Opera.**
Check https://caniuse.com for browser support.

```css
/*
    Vendors Prefixes

    Browsers:
        - Chrome
        - Safari
        - Firefox
        - IE, Edge
        - Opera

    [1] New CSS Feature Appeared
    [2] Browsers Tests The Feature In Version X
    [3] Browsers Add Prefix To Give Developers The Ability To Use It
    [4] The Feature Is Fully Supported In Version Y, No Need For Prefix

    Prefixes:
        -webkit- => Chrome, Safari, New Opera Version
        -moz- => Firefox
        -ms- => Ie, Edge
        -o- => Old Version of Opera
*/

.class {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -o-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
}

/*
    [1] Most of Users Is Using Modern Browsers
    [2] VS Code Addon To Add The Prefix
    [3] Task Runner
    [4] Check:
            https://caniuse.com/
*/
```

### 39 – Border Radius

- **`border-radius` rounds element corners.**
Can use 1-4 values (top-left, top-right, bottom-right, bottom-left).
Can create circles by setting 50% on equal width/height elements.

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
    border-radius: 1 value  => All corners have the same value
    border-radius: 2 values => This property is used to set first value as top-left and bottom right corner and second value as top right and bottom left corners.
    border-radius: 3 values => This property is used to set first value to top-left corner, second value applied to top-right and bottom left corners and third value applied to bottom right corner. 
    border-radius: 4 values => This property is used to set first, second, third and fourth value of border radius to top-left, top-right, bottom-right and bottom-left corners respectively.
*/
div {
    width: 150px;
    height: 150px;
    background-color: red;
    margin: 20px auto;
    border-radius: 6px;
    /* border-top-left-radius: 20px 20px; */
    /* border-bottom-right-radius: 20px; */
}
```

### 40 – Box Shadows And Examples

- **`box-shadow: x y blur spread color` adds shadow to elements.**
Multiple shadows can be comma-separated.
Can create glowing effects, multiple colored shadows, and depth.

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
        <div>Element</div>
    </body>
</html>
```

```css
div {
    padding: 20px;
    background-color: #eee;
    margin: 20px auto;
    width: 300px;
    box-shadow: 0 0 10px 0 #f10000, 0 0 10px 0 #000, 0 0 10px 0 #080,
        0 0 10px 0 #00f, 0 0 10px 0 yellow;
}
```

### 41 – The Box Model And Box Sizing

The box model: content → padding → border → margin.
- **`box-sizing: border-box` includes padding and border in the element's total width/height.**
Makes layout calculations much simpler.

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
            <div class="one">One</div>
            <div class="one">One</div>
        </div>
    </body>
</html>
```

```css
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.parent {
    width: 600px;
    overflow: hidden;
    margin: 20px auto;
    padding: 20px;
    background-color: #ddd;
}
.one {
    background-color: #eee;
    width: 300px;
    float: left;
    padding: 10px;
    border: 1px solid red;
}
```

### 42 – Transition

- **`transition` smoothly animates property changes over time.**
Properties: `transition-property`, `duration`, `timing-function` (ease, linear, ease-in...), `delay`.
Shorthand: `transition: property duration timing delay`.

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
    </body>
</html>
```

```css
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.one {
    background-color: #eee;
    width: 200px;
    height: 100px;
    transition-duration: 1s;
    transition-delay: 0.2s;
    transition-property: width;
    transition-timing-function: ease-in-out;
    transition: all 2s 0.5s linear;
}
.one:hover {
    width: 280px;
    height: 120px;
}
```
