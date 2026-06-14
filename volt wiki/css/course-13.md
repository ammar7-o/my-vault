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
# CSS Course – Part 13 – Flex Box – Parent Properties

### 46 – Flex Box – Parent – Direction, Wrap, Flow

- **`display: flex` activates Flexbox on the parent.**
- **`flex-direction` sets the main axis (`row`, `column`, `row-reverse`, `column-reverse`).**
- **`flex-wrap` controls whether items wrap to new lines.**
- **`flex-flow` is shorthand for direction + wrap.**

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
        <h3>Flex</h3>
        <div class="flex">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
        </div>
        <hr />
        <h3>Float</h3>
        <div class="float">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
        </div>
    </body>
</html>
```

```css
/*
    Flexible Box
        For Parent
            - display: flex => To Start Flexible Box
            - flex-direction: row => Default Value
            - flex-wrap: nowrap => Default Value
            - flex-flow: [Flex-Direction] + [Flex-Wrap]
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
}
.flex div {
    background-color: #f00;
    color: white;
    width: 25%;
    text-align: center;
    padding: 20px;
}
.float {
    overflow: hidden;
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
}
.float div {
    background-color: #f00;
    color: white;
    float: right;
    width: 25%;
    text-align: center;
    padding: 20px;
}
```

### 47 – Flex Box – Parent – Justify Content

- **`justify-content` aligns items along the main axis.**
Values: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.

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
        <h3>Flex</h3>
        <div class="flex">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
        </div>
        <hr />
        <h3>Float</h3>
        <div class="float">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
        </div>
    </body>
</html>
```

```css
/*
    Flexible Box
        For Parent
            - display: flex => To Start Flexible Box
            - flex-direction: row => Default Value
            - flex-wrap: nowrap => Default Value
            - flex-flow: [Flex-Direction] + [Flex-Wrap]
            ===========================================
            - justify-content: flex-start => Default Value
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.flex div {
    background-color: #f00;
    color: white;
    width: 25%;
    text-align: center;
    padding: 20px;
}
.float {
    overflow: hidden;
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
}
.float div {
    background-color: #f00;
    color: white;
    float: right;
    width: 25%;
    text-align: center;
    padding: 20px;
}
```

### 48 – Flex Box – Parent – Align Items

- **`align-items` aligns items along the cross axis.**
Values: `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`.
Great for vertically centering content with `center`.

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
        <h3>Flex</h3>
        <div class="flex">
            <div class="one">One</div>
            <div class="two">Two</div>
            <div>Three</div>
        </div>
        <hr />
        <h3>Float</h3>
        <div class="float">
            <div class="one">One</div>
            <div class="two">Two</div>
            <div>Three</div>
        </div>
        <div class="center">Center</div>
    </body>
</html>
```

```css
/*
    Flexible Box
        For Parent
            - display: flex => To Start Flexible Box
            - flex-direction: row => Default Value
            - flex-wrap: nowrap => Default Value
            - flex-flow: [Flex-Direction] + [Flex-Wrap]
            ===========================================
            - justify-content: flex-start => Default Value
            - align-items: stretch => Default Value
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}
.flex div {
    background-color: #f00;
    color: white;
    width: calc(100% / 3);
    text-align: center;
    padding: 20px;
}
.flex .one,
.float .one {
    height: 80px;
}
.float {
    overflow: hidden;
    background-color: #eee;
    width: 600px;
    padding: 20px;
    margin: 20px auto;
}
.float div {
    background-color: #f00;
    color: white;
    float: right;
    width: calc(100% / 3);
    text-align: center;
    padding: 20px;
}
.center {
    background-color: blue;
    color: white;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### 49 – Flex Box – Parent – Align Content

- **`align-content` aligns multiple lines (rows) along the cross axis.**
Only works when `flex-wrap` is enabled and there are multiple lines.
Values: `stretch`, `flex-start`, `flex-end`, `center`, `space-between`, `space-around`.

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
        <h3>Flex</h3>
        <div class="flex">
            <div>One</div>
            <div>Two</div>
            <div>Three</div>
            <div>Four</div>
            <div>Five</div>
        </div>
    </body>
</html>
```

```css
/*
    Flexible Box
        For Parent
            - display: flex => To Start Flexible Box
            - flex-direction: row => Default Value
            - flex-wrap: nowrap => Default Value
            - flex-flow: [Flex-Direction] + [Flex-Wrap]
            ==========================================
            - justify-content: flex-start => Default Value
            - align-items: stretch => Default Value
            - align-content: stretch => Default Value
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 600px;
    height: 400px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: space-between;
}
.flex div {
    background-color: #f00;
    color: white;
    width: calc(100% / 3);
    text-align: center;
    padding: 20px;
}
```
