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
# CSS Course – Part 14 – Flex Box – Child Properties & Games

### 50 – Flex Box – Child – Grow, Shrink, Order

- **`flex-grow` controls how much a child grows relative to siblings (default 0).**
- **`flex-shrink` controls how much a child shrinks (default 1).**
- **`order` changes the visual order of flex items (default 0).**

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
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
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
            - justify-content: flex-start => Default Value
            - align-items: stretch => Default Value
            - align-content: stretch => Default Value
        ===============================================
        For Child
            - flex-grow: 0 => Default Value
            - flex-shrink: 1 => Default Value
            - order: 0 => Default Value
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 800px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
}
.flex div {
    background-color: #f00;
    color: white;
    width: 80px;
    text-align: center;
    padding: 20px;
    margin-right: 5px;
    flex-grow: 1;
}
```

### 51 – Flex Box – Child – Flex Basis, Flex Shorthand

- **`flex-basis` sets the initial main size before growing/shrinking.**
- **`flex` shorthand: `flex: grow shrink basis` (defaults `0 1 auto`).**
- **`display: inline-flex` makes the flex container inline while children remain flex items.**

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
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
        <div class="in">In</div>
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
            - justify-content: flex-start => Default Value
            - align-items: stretch => Default Value
            - align-content: stretch => Default Value
        =====================================================
        For Child
            - flex-grow: 0 => Default Value
            - flex-shrink: 1 => Default Value
            - order: 0 => Default Value
            - flex-basis: auto => Default Value
            - flex: [Flex Grow] [Flex Shrink] [Flex Basis] => Defaults => 0 1 Auto
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 800px;
    padding: 20px;
    margin: 20px auto;
    display: inline-flex;
}
.flex div {
    background-color: #f00;
    color: white;
    width: 80px;
    text-align: center;
    padding: 20px;
    margin-right: 5px;
    flex-grow: 1;
}
.in {
    display: inline-block;
}
```

### 52 – Flex Box – Child – Align Self And Task

- **`align-self` overrides the parent's `align-items` for a specific child.**
Values: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`.

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
        <div class="flex">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
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
            - justify-content: flex-start => Default Value
            - align-items: stretch => Default Value
            - align-content: stretch => Default Value
        For Child
            - flex-grow: 0 => Default Value
            - flex-shrink: 1 => Default Value
            - order: 0 => Default Value
            - flex-basis: auto => Default Value
            - flex: [Flex Grow] [Flex Shrink] [Flex Basis] => Defaults => 0 1 Auto
            - align-self: auto => Default Value

        Search For:
            justify-self
*/

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.flex {
    background-color: #eee;
    width: 800px;
    height: 300px;
    padding: 20px;
    margin: 20px auto;
    display: flex;
    align-items: flex-start;
}
.flex div {
    background-color: #f00;
    color: white;
    width: 80px;
    text-align: center;
    padding: 20px;
    margin-right: 5px;
    flex-grow: 1;
}
```

### 53 – Flex Box – Finish The Flex Froggy Game

Solutions to the Flexbox Froggy game (https://flexboxfroggy.com/).
Covers `justify-content`, `align-items`, `flex-direction`, `order`, `align-self`, `flex-wrap`, `flex-flow`, `align-content`.

```css
/*
    https://flexboxfroggy.com/
    ==================================================
    justify-content: flex-end;
    ==================================================
    justify-content: center;
    ==================================================
    justify-content: space-around;
    ==================================================
    justify-content: space-between;
    ==================================================
    align-items: flex-end;
    ==================================================
    align-items: center;
    justify-content: center;
    ==================================================
    justify-content: space-around;
    align-items: flex-end;
    ==================================================
    flex-direction: row-reverse;
    ==================================================
    flex-direction: column;
    ==================================================
    flex-direction: row-reverse;
    justify-content: flex-end;
    ==================================================
    flex-direction: column;
    justify-content: flex-end;
    ==================================================
    flex-direction: column-reverse;
    justify-content: space-between;
    ==================================================
    justify-content: center;   
    align-items: flex-end;
    flex-direction: row-reverse;
    ==================================================
    order: 1;
    ==================================================
    order: -3;
    ==================================================
    align-self: flex-end;
    ==================================================
    align-self: flex-end;
    order: 1;
    ==================================================
    flex-wrap: wrap;
    ==================================================
    flex-direction: column;
    flex-wrap: wrap;
    ==================================================
    flex-flow: column wrap;
    ==================================================
    align-content: flex-start;
    ==================================================
    align-content: flex-end;
    ==================================================
    flex-direction: column-reverse;
    align-content: center; 
    ==================================================
    justify-content:center;
    align-content:space-between;
    flex-flow:column-reverse wrap-reverse;
    ==================================================
*/
```
