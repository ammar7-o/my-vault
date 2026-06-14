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
# CSS Course – Part 17 – Grid – Child Properties & Games

### 61 – Grid – Child – Grid Column And Row

- **`grid-column: start / end` spans a child across multiple columns.**
- **`grid-row: start / end` spans a child across multiple rows.**
Can use `span n` to automatically span n tracks.

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
            <div style="grid-row: 1 / 5">1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div style="grid-row: span 2">8</div>
            <div>9</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div style="grid-column: span 3">4</div>
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
            - grid-template-areas
        Child
            - grid-column: [Grid-Column-Start] [Grid-Column-End]
            - grid-row: [Grid-Row-Start] [Grid-Row-End]
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
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
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

### 62 – Grid – Child – Grid Area And Trainings

- **`grid-area` shorthand: `row-start / column-start / row-end / column-end`.**
Also used to assign a child to a named area from `grid-template-areas`.

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
            <div
                style="
                    background-color: green;
                    grid-row-start: 2;
                    grid-column-start: 2;
                    grid-row-end: 5;
                    grid-column-end: 6;
                    grid-area: 2 / 2 / 5 / 6;
                "
            >
                9
            </div>
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
            - grid-template-areas
        Child
            - grid-column: [Grid-Column-Start] [Grid-Column-End]
            - grid-row: [Grid-Row-Start] [Grid-Row-End]
            - grid-area: [Grid-Row-Start] [Grid-Column-Start] [Grid-Row-End] [Grid-Column-End]
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
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, auto);
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

### 63 – Grid – Min, Max And Autofill

- **`minmax(min, max)` sets a size range for grid tracks.**
- **`auto-fill` creates as many tracks as fit the container.**
- **`repeat(auto-fill, minmax(200px, 1fr))` creates fully responsive grids.**

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
* {
    box-sizing: border-box;
    margin: 0;
}
.parent {
    margin: 20px auto;
    height: 500px;
    background-color: #ddd;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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

### 64 – Finish The Grid Garden Game

Solutions to the Grid Garden game (https://cssgridgarden.com/).
Covers `grid-column-start`, `grid-column-end`, `grid-row`, `grid-area`, `order`, `grid-template-columns`, `grid-template-rows`.

```css
/*
    https://cssgridgarden.com/
    ================================================
    grid-column-start: 3;
    ================================================
    grid-column-start: 5;
    ================================================
    grid-column-end: 4;
    ================================================
    grid-column-end: 2;
    ================================================
    grid-column-end: -2;
    ================================================
    grid-column-start: -3;
    ================================================
    grid-column-end: span 2;
    ================================================
    grid-column-end: span 5;
    ================================================
    grid-column-start: span 3;
    ================================================
    grid-column: 4 / 6;
    ================================================
    grid-column: 2 / span 3;
    ================================================
    grid-row-start: 3;
    ================================================
    grid-row: 3 / 6;
    ================================================
    grid-column: 2;
    grid-row: 5;
    ================================================
    grid-column: 2 / 6;
    grid-row: 1 / 6;
    ================================================
    grid-column: 2 / span 4;
    grid-row: 1 / span 5;
    ================================================
    grid-area: 1 / 2 / 4 / 6;
    OR
    grid-area: 1 / 2 / span 3 / span 4;
    ================================================
    grid-area: 2 / 3 / span 3 / span 3;
    ================================================
    order: 1;
    ================================================
    order: -1;
    ================================================
    grid-template-columns: 50% 50%;
    ================================================
    grid-template-columns: repeat(8, 12.5%);
    ================================================
    grid-template-columns: 100px 3em 40%;
    ================================================
    grid-template-columns: 1fr 5fr;
    ================================================
    grid-template-columns: 50px repeat(3, 1fr) 50px;
    ================================================
    grid-template-columns: 75px 3fr 2fr;
    ================================================
    grid-template-rows: 50px 0 0 0 1fr;
    ================================================
    grid-template: 60% / 200px;
    ================================================
    grid-template: 1fr 50px / 1fr 4fr;
    ================================================
*/
```
