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
# CSS Course – Part 5 – Grouping, Nesting, Dimensions & Overflow

### 13 – Grouping Multiple Selectors

Group selectors with a comma `,` to apply the same styles to multiple elements.
Reduces code repetition and keeps styles organized.

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
        <div class="four">Four</div>
        <p class="my-p">This Is P</p>
    </body>
</html>
```

```css
.one {
    border-bottom: 2px solid red;
    color: red;
}
.two {
    border-bottom: 2px solid green;
    color: green;
}
.three {
    border-bottom: 2px solid blue;
    color: blue;
}
.four {
    border-bottom: 2px solid black;
    color: black;
}
.one,
.two,
.three,
.four,
.my-p {
    padding: 15px;
    margin: 12px 0;
    background-color: #ededed;
}
```

### 14 – Nesting

Descendant selector `parent child` targets elements inside another element.
Helps scope styles to specific sections without needing extra classes.

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
        <div>
            <h2>Title</h2>
            <p>Paragraph Inside Div</p>
            <p class="special">Paragraph Inside Div With Class</p>
        </div>
        <p class="special">Paragraph Outside Div</p>
    </body>
</html>
```

```css
div .special {
    color: red;
}
```

### 15 – Dimensions – Width And Height

- **`width` and `height` set element dimensions.**
- **`max-width` limits how wide an element can grow.**
- **`min-width`, `max-height`, `min-height` set boundaries.**
Use `inline-block` to control dimensions on inline elements.

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
        <div>Osama Mohamed</div>
        <hr />
        <div>Osama Mohamed Ahmed</div>
        <hr />
        <div>Osama Mohamed Ahmed Sayed</div>
    </body>
</html>
```

```css
div {
    background-color: red;
    padding: 10px;
    display: inline-block;
    max-width: 400px;
}
```

### 16 – Overflow – Overflow-X And Overflow-Y

- **`overflow` controls what happens when content exceeds its container.**
Values: `visible` (default), `hidden`, `scroll`, `auto`.
- **`overflow-x` and `overflow-y` control each axis separately.**

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
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            sit molestiae, corrupti at quae debitis dicta adipisci unde, nemo,
            veritatis error. Cupiditate, deserunt maiores assumenda ut quod
            voluptate adipisci repellat.
        </div>
    </body>
</html>
```

```css
div {
    width: 150px;
    height: 150px;
    background-color: #eee;
    margin: 20px auto;
    border-radius: 6px;
    overflow: scroll;
}
```
