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
# CSS Course – Part 2 – Background Properties

### 5 – Background – Color, Image, Repeat

- **`background-color` sets the background color using name, hex (`#ff0000`), or `rgb()` values.**
- **`background-image` sets an image as the background using `url()`.**
- **`background-repeat` controls if/how the image repeats (`no-repeat`, `repeat-x`, `repeat-y`).**

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
            <h2>Product Title</h2>
            <p>This Is Paragraph</p>
        </div>
    </body>
</html>
```

```css
div {
    background-color: red; /* Color Name */
    background-color: rgb(0 0 0 / 50%); /* Red, Green, Blue, Alpha Channel */
    background-color: #ff0000; /* Color Hex Code */
    background-image: url("../imgs/learn-programming.png");
    background-repeat: no-repeat;
}
```

### 6 – Background – Attachment, Position, Size

- **`background-attachment: fixed` keeps the background still while scrolling.**
- **`background-position` sets where the image starts (e.g., `left top`).**
- **`background-size` controls the image dimensions (`auto`, `cover`, `contain`).**

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
        <h2>Product Title</h2>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p>This Is Paragraph</p>
    </body>
</html>
```

```css
div {
    background-color: red; /* Color Name */
    background-color: rgb(0 0 0 / 50%); /* Red, Green, Blue, Alpha Channel */
    background-color: #ff0000; /* Color Hex Code */
    background-image: url("../imgs/learn-programming.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left top;
    background-size: auto;
}
```
