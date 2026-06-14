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
# CSS Course – Part 6 – Text Properties

### 17 – Text – Color And Shadow

- **`color` sets the text color.**
- **`text-shadow: x y blur color` adds a shadow effect to text.**

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
        <div>Elzero Web School</div>
    </body>
</html>
```

```css
div {
    background-color: #f9f9f9;
    color: rebeccapurple;
    text-shadow: 0 0 0 red;
}
```

### 18 – Text – Alignment

- **`text-align` sets horizontal alignment (`left`, `center`, `right`, `justify`).**
- **`direction` sets text direction (`ltr`, `rtl`).**
- **`vertical-align` aligns inline elements with surrounding text.**

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
            Elzero Web
            <img src="https://via.placeholder.com/60" alt="" />
            School
        </div>
    </body>
</html>
```

```css
div {
    background-color: #f9f9f9;
    text-align: center;
    direction: ltr;
}
img {
    vertical-align: middle;
}
```

### 19 – Text – Decoration And Transform

- **`text-decoration` adds underline, overline, line-through.**
- **`text-transform` changes case (`uppercase`, `lowercase`, `capitalize`).**

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
        <div>elzero web school</div>
        <a href="#">Google</a>
    </body>
</html>
```

```css
div {
    background-color: #f9f9f9;
    text-transform: capitalize;
}
```

### 20 – Text – Spacing

- **`word-spacing` controls space between words.**
- **`letter-spacing` controls space between characters.**
- **`line-height` controls spacing between lines.**
- **`white-space` controls how whitespace is handled.**

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
            Elzero Web School Elzero Web School Elzero Web School Elzero Web
            School
        </div>
    </body>
</html>
```

```css
div {
    background-color: #f9f9f9;
    word-spacing: 5px;
}
```

### 21 – Text – Overflow And Use Cases

- **`white-space: nowrap` prevents text from wrapping.**
- **`overflow: hidden` clips overflow.**
- **`text-overflow: ellipsis` adds `...` when text overflows.**
Hover can show the full text using `overflow: visible`.

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
        <div title="Welcome To Elzero Web School, Hello">
            Welcome To Elzero Web School, Hello
        </div>
    </body>
</html>
```

```css
div {
    background-color: #ddd;
    padding: 10px;
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
div:hover {
    overflow: visible;
}
```
