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
# CSS Course – Part 10 – Pseudo Classes & Pseudo Elements

### 34 – Pseudo Classes

Pseudo classes target elements based on state or position.
- **`:hover` — on mouse over.**
- **`:visited` — already visited link.**
- **`:focus` — when element has focus.**
- **`:checked` — checked checkbox/radio.**
- **`:empty` — element with no children.**

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
        <div class="one">Normal Element</div>
        <hr />
        <div class="two"></div>
        <p></p>
        <hr />
        <a href="https://google.com">Link 1</a>
        <a href="https://twitter.com">Link 2</a>
        <a href="https://youtube.com">Link 3</a>
        <a href="https://linkedin.com">Link 4</a>
        <hr />
        <form action="">
            <div>
                <input class="in" type="text" />
            </div>
            <div>
                <input class="ch" type="checkbox" />
                <label for="">Testing Check</label>
            </div>
        </form>
    </body>
</html>
```

```css
.one {
    background-color: red;
    color: white;
}
.two {
    background-color: #eee;
    width: 100px;
    height: 100px;
}
a {
    color: green;
    text-decoration: none;
}
a:hover {
    color: red;
}
a:visited {
    color: blue;
}
:empty {
    border: 10px solid red;
}
.ch:checked {
    display: none;
}
.in:focus {
    border-color: red;
    outline: none;
}
```

### 35 – Pseudo Elements – First Letter, First Line, Selection

- **`::first-letter` styles the first letter of a block element.**
- **`::first-line` styles the first line of text.**
- **`::selection` styles text highlighted by the user.**

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
        <div class="one">
            <span>L</span>orem ipsum dolor sit amet consectetur, adipisicing
            elit. Laudantium accusantium ipsa veniam officiis blanditiis numquam
            rerum! Eligendi perspiciatis atque ut adipisci quam, temporibus
            eveniet nisi assumendaconsequatur, maiores ad veritatis.
        </div>
        <hr />
        <div class="two">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            accusantium ipsa veniam officiis blanditiis numquam rerum! Eligendi
            perspiciatis atque ut adipisci quam, temporibus eveniet nisi
            assumendaconsequatur, maiores ad veritatis.
        </div>
        <hr />
        <p class="three">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            accusantium ipsa veniam officiis blanditiis numquam rerum! Eligendi
            perspiciatis atque ut adipisci quam, temporibus eveniet nisi
            assumendaconsequatur, maiores ad veritatis.
        </p>
    </body>
</html>
```

```css
.one span {
    display: inline-block;
    background-color: red;
    color: white;
    font-size: 60px;
    font-weight: bold;
}
.two::first-letter {
    display: inline-block;
    background-color: red;
    color: white;
    font-size: 60px;
    font-weight: bold;
}
.three::first-line {
    font-weight: bold;
    color: green;
}
::selection {
    background-color: black;
    color: yellow;
}
```

### 36 – Pseudo Elements – Before, After, Content

- **`::before` and `::after` insert content before/after an element's content.**
Requires `content` property (even if empty string).
Used for decorative elements, tooltips, quotes, etc.

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
            <div class="user">O</div>
            <div class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
        <div class="parent">
            <div class="user">A</div>
            <div class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
        <div class="parent">
            <div class="user">E</div>
            <div class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
    </body>
</html>
```

```css
.parent {
    margin-bottom: 20px;
    overflow: hidden;
}
.one {
    background-color: #eee;
    padding: 10px;
    width: 600px;
    float: left;
    position: relative;
}
.one::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 100%;
    right: -10px;
    top: 0;
    background-color: #009688;
}
.one::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -20px;
    width: 0;
    height: 0;
    background-color: white;
    margin-top: -10px;
    border-style: solid;
    border-width: 10px;
    border-color: transparent #009688 transparent transparent;
}
.user {
    background-color: #eee;
    width: 50px;
    margin-right: 20px;
    padding: 10px;
    height: 55.5px;
    float: left;
    font-size: 50px;
    text-align: center;
}
```

### 37 – Pseudo Elements – Content And Trainings

- **`content` can use `attr()` to display attribute values.**
- **`counter()` auto-numbers elements.**
CSS counters: `counter-increment`, `counter-reset`.
Can create complex UI elements without extra HTML.

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
            <div class="user">O</div>
            <div class="one" data-text="Something">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
        <div class="parent">
            <div class="user">A</div>
            <div class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
        <div class="parent">
            <div class="user">E</div>
            <div class="one">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                labore culpa dolores, autem voluptatum atque, in dolore
                asperiores facilis libero dolorum magni iure doloribus quae
                pariatur! Similique ipsum nobis quos.
            </div>
        </div>
        <ul>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
            <li>One</li>
        </ul>
    </body>
</html>
```

```css
.parent {
    margin-bottom: 20px;
    overflow: hidden;
    counter-increment: members-counter;
}
.one {
    background-color: #eee;
    padding: 10px;
    width: 600px;
    float: left;
    position: relative;
}
.one::before {
    content: attr(data-text);
    display: none;
}
.one::after {
    content: counter(members-counter);
    position: absolute;
    background-color: red;
    color: white;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: bold;
    right: -10px;
    top: 50%;
    margin-top: -10px;
}
.user {
    background-color: #eee;
    width: 50px;
    margin-right: 20px;
    padding: 10px;
    height: 55.5px;
    float: left;
    font-size: 50px;
    text-align: center;
}
ul {
    list-style: none;
}
ul li {
    position: relative;
}
ul li::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: -20px;
    top: 50%;
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #009688 transparent transparent;
}
```
