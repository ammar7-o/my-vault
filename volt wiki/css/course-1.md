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
# CSS Course – Part 1 – CSS Introduction & Basics

### 1 – Introduction And What I Need To Learn

This introductory lesson covers what CSS is, why we need it, and the prerequisites for learning CSS styling.

*No code examples for this lesson — only presentation slides.*

### 2 – Your First Project And Syntax

CSS syntax consists of selectors and declaration blocks.
Selectors target HTML elements (by class, id, or element name).
Declarations are property: value pairs inside curly braces {}.
Use classes (`.class-name`) for reusable styles and IDs (`#id-name`) for unique elements.

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
        <p class="my-p">This Is Paragraph</p>
    </body>
</html>
```

```css
.my-p {
    color: red;
    font-size: 40px;
}
#my-p {
    color: red;
    font-size: 40px;
}
```

### 3 – Elements Styling

CSS can be applied in three ways: External (linked `.css` file), Internal (`<style>` in `<head>`), and Inline (`style` attribute on the element).
Inline styles have the highest priority, then internal, then external.
Comments in CSS use `/* ... */`.

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Learn CSS</title>
        <!-- External Style -->
        <link rel="stylesheet" href="main.css" />
        <!-- Internal Style -->
        <style>
            .special {
                color: green;
            }
        </style>
    </head>
    <body>
        <p style="color: purple">This Is Paragraph</p>
        <p>This Is Paragraph</p>
        <p class="special">This Is Paragraph</p>
        <p>This Is Paragraph</p>
    </body>
</html>
```

```css
/*
    Target All Paragraphs
*/

p {
    color: green;
}
p {
    color: red;
}
```

### 4 – Name Conventions And Rules

Class and ID names must start with a letter, underscore `_`, or hyphen `-`.
Use meaningful names like `.user-test` instead of `.ut`.
Avoid spaces and special characters in names.

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
        <div>Div</div>
        <div class="_test">Div</div>
        <div id="test">Div</div>
    </body>
</html>
```

```css
._test {
    color: red;
}
.user-test {
    color: red;
}
```
