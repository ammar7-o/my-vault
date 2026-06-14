---
banner: https://166tech.az/uploads/blogs/33915082.webp
tags:
  - html
  - volt-wiki
  - coding
  - programming
source: Elzero Web School
link: https://youtu.be/qfPUMV9J5yw?si=ifj_eO7nVy6d3NbB
book: https://drive.google.com/file/d/11dIvR8TV6QIOHYTzlZX3XYf_hnAoW1yw/view?usp=drive_link
---

# Head And Nested Elements
The basic structure of every HTML document. The `<head>` contains information about the page (metadata, title, CSS, scripts), while the `<body>` contains everything visible to the user.
```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Book Store</title>
    <meta name="description" content="This Is Our Book Store" />
    <style></style>
    <script></script>
    <link rel="stylesheet" href="">
  </head>
  <body>
    This Is My Book Store, Welcome
  </body>
</html>
```
**Explanation**

|Tag|Purpose|
|---|---|
|`<html>`|Root element of the page|
|`<head>`|Contains page information|
|`<meta charset="UTF-8">`|Supports all languages and symbols|
|`<title>`|Text displayed in browser tab|
|`<meta name="description">`|Description used by search engines|
|`<style>`|Internal CSS styles|
|`<script>`|JavaScript code|
|`<link>`|Connect external files like CSS|
|`<body>`|Visible page content|

---
# Comments And Use Cases
Comments are ignored by browsers and are used only by developers for notes and explanations.
```html
<html>
  <head>
    <!-- This Meta Is For Bla Bla Bla -->
    <meta charset="UTF-8" />
    <title>Book Store</title>
    <!-- This Is For Bla Bla Bla -->
    <meta name="description" content="This Is Our Book Store" />
    <!-- This Is Comment -->
    <meta name="elzero" content="v1.0" />
    <style></style>
    <script>
```
**Explanation**
- `<!-- Comment -->` creates a comment.
- Comments are not displayed on the page.
- Useful for documentation and organizing code.
- Can temporarily disable code during testing.
---
# Doctype And Standard And Quirks Mode
The `DOCTYPE` tells the browser which HTML standard to use.
```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Book Store</title>
    <meta name="description" content="This Is Our Book Store" />
  </head>
  <body>
  </body>
</html>
```
**Explanation**

|Item|Purpose|
|---|---|
|`<!doctype html>`|Activates HTML5 standards mode|
|Standards Mode|Browser renders page correctly|
|Quirks Mode|Browser behaves like old browsers|
Always place `<!doctype html>` at the first line.

---
# Headings And Use Cases
Headings organize content hierarchically.
```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Book Store</title>
    <meta name="description" content="This Is Our Book Store" />
  </head>
  <body>
    <!-- h1 - h6 -->
    <h1>Book Store</h1>
    <h2>Chapter Title Inside Book</h2>
    <h3>Story Title Inside Chapter</h3>
    <h4>Book Store</h4>
    <h5>Book Store</h5>
    <h6>Book Store</h6>
    This Is My Book Store, Welcome
  </body>
</html>
```
**Explanation**

|Tag|Level|
|---|---|
|`<h1>`|Main page title|
|`<h2>`|Major section|
|`<h3>`|Subsection|
|`<h4>`|Smaller subsection|
|`<h5>`|Minor heading|
|`<h6>`|Smallest heading|
**Best Practice**
- Use only one `<h1>` per page.
- Keep heading levels in order.
---
# Paragraph Element
The paragraph tag is used to display blocks of text.
```html
  <h1>Book Store</h1>
    <p>This Is My Book Store, Welcome</p> <p>We Have A Big Sale</p>
    Line 1
    Line 2
    Line 3
```
**Explanation**
- `<p>` creates a paragraph.
- Each paragraph starts on a new line.
- Plain text outside tags is displayed normally.
- Browsers automatically add spacing around paragraphs.
---
# Elements Attributes
Attributes provide additional information or behavior to elements.
```html
 <h1>Book Store</h1>
    <p>This Is My Book Store, Welcome</p>
    <img decoding="async" src="" alt="">
    <p></p>
    <a href=""></a>
    <audio src=""></audio>
    <video src=""></video>
```
**Explanation**

|Attribute|Purpose|
|---|---|
|`src`|Specifies file location|
|`href`|Specifies link destination|
|`alt`|Alternative text for images|
|`decoding="async"`|Improves image loading performance|

**Examples**
- Image source: `src="logo.png"`
- Link destination: `href="about.html"`
---
# Formatting Elements
Formatting tags change the appearance or meaning of text.
```html
<!--
      b => Bold
      strong => Bold => Important Text
      i => Italic
      em => Emphasized
      mark => Marked Text Or Highlighted Text
      u => Underline
      small => Smaller text
      del => Deleted Text
      ins => Inserted Text
      sub => Subscript
      sup => Superscript
     -->
    <h1>Book Store</h1>
    <p>This Is My <b>Book Store</b>, Welcome</p>
    <p>This Is My <strong>Book Store</strong>, Welcome</p>
    <p>This Is My <i>Book Store</i>, Welcome</p>
    <p>This Is My <em>Book Store</em>, Welcome</p>
    <p>This Is My Book Store, <mark>Welcome</mark></p>
    <p>This Is My Book Store, <u>Welcome</u></p>
    <p>This Is My Book Store, <small>Welcome</small></p>
    <p>This Is My <del>Book Store</del>, Welcome</p>
    <p><del>$100</del> $80</p>
    <p>This Is My <ins>Book Store</ins>, Welcome</p>
    <p>h<sub>2</sub>o</p>
    <p>2<sup>2</sup></p>
```
**Explanation**

|Tag|Meaning|
|---|---|
|`<b>`|Bold text|
|`<strong>`|Important text|
|`<i>`|Italic text|
|`<em>`|Emphasized text|
|`<mark>`|Highlighted text|
|`<u>`|Underlined text|
|`<small>`|Smaller text|
|`<del>`|Deleted text|
|`<ins>`|Inserted text|
|`<sub>`|Subscript|
|`<sup>`|Superscript|

---
# Links – Anchor Tag
Anchor tags create hyperlinks.
```html
 <h1>Book Store</h1>
    <p>This Is My <b>Book Store</b>, Welcome</p>
    <a href="https://google.com" target="_blank" title="Go To Google">Google</a>
    <a href="https://facebook.com" title="Go To Facebook">Facebook</a>
    <a href="test.html" title="Go To Test Page">Test</a>
    <a href="#osama" title="Go To Osama">Osama Paragraph</a>
    <a href="mailto:o@nn.sa">Contact Me</a>
```
**Explanation**

|Attribute|Purpose|
|---|---|
|`href`|Destination URL|
|`target="_blank"`|Opens link in new tab|
|`title`|Tooltip text|
|`mailto:`|Opens email application|
|`#id`|Jump to section in page|

---
# Image And Deal With Paths
The image tag displays images.
```html
 <!--
      src => Source
      alt => Alternate Text
     -->
    <h1>Book Store</h1>
    <p>This Is My <b>Book Store</b>, Welcome</p>
    <img decoding="async"
      src="https://elzero.org/wp-content/uploads/2018/06/cover-speed-website.png"
      alt=""
      width="200px"
      height="200px">
    <img decoding="async" src="imgs/home/cover-speed-website.png" alt="">
    <img decoding="async" src="../cover-speed-website.png" alt="Will Not Show">
    <img decoding="async" src="missing-image.png" alt="Logo Testing">
```
**Explanation**

|Attribute|Purpose|
|---|---|
|`src`|Image location|
|`alt`|Text shown if image fails|
|`width`|Image width|
|`height`|Image height|
**Path Types**

|Type|Example|
|---|---|
|Absolute Path|`https://site.com/image.png`|
|Relative Path|`imgs/image.png`|
|Parent Folder|`../image.png`|

---
# Lists – Ul, Ol, DL
Lists are used to organize related items.
```html
 <h1>Book Store</h1>
    <p>This Is My <b>Book Store</b>, Welcome</p>
    <!--
      ul => Unorderd List
      li => List Item
      ol => Ordered List
    -->
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>
        JS
        <ul>
          <li>Angular</li>
          <li>Reactjs</li>
          <li>Vuejs</li>
        </ul>
      </li>
    </ul>
    <!-- Separator -->
    <!--
      reversed => Reverse The Ordering
      start => Start From Position
      type => Type Of Ordering
    -->
    <ol>
      <li value="50">Name</li>
      <li>Address</li>
      <li>Id</li>
    </ol>
    <!-- Separator -->
    <!--
      dl => Description List
      dt => Term
      dd => Description Term
    -->
    <dl>
      <dt>HTML</dt>
      <dd>Language Of The Web</dd>
      <dd>The First Lan</dd>
      <dt>CSS</dt>
      <dd>Language Of The Visuals</dd>
    </dl>
```
**Explanation**
### Unordered List (`ul`)
Used when item order does not matter.
- HTML
- CSS
- JavaScript
### Ordered List (`ol`)
Used when item order matters.
1. First Step
2. Second Step
3. Third Step
### Description List (`dl`)
Used for terms and definitions.

|Tag|Purpose|
|---|---|
|`<dl>`|Description list container|
|`<dt>`|Term|
|`<dd>`|Description|
**Useful Attributes**

| Attribute  | Purpose                           |
| ---------- | --------------------------------- |
| `reversed` | Reverse numbering                 |
| `start`    | Start from a custom number        |
| `type`     | Numbering style (1, A, a, I, i)   |
| `value`    | Set a specific number for an item |
This format is ideal for Obsidian notes because the explanation appears before or after each code block while keeping the original code unchanged.