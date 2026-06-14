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
# Table
```html
 <h1>Book Store</h1>
    <p>This Is My <b>Book Store</b>, Welcome</p>
    <!--
      thead
      tbody
      tfoot
      tr => Table Row
      td => Table Data Cell
      th => Table Header Cell
    -->
    <table border="1">
      <caption>
        Students Marks
      </caption>
      <tr>
        <th>First</th>
        <th>Last</th>
        <th>Marks</th>
      </tr>
      <tr>
        <td>Osama</td>
        <td>Mohamed</td>
        <td>40</td>
      </tr>
      <tr>
        <td>Osama</td>
        <td>Mohamed</td>
        <td>40</td>
      </tr>
      <tr>
        <td>Osama</td>
        <td>Mohamed</td>
        <td>40</td>
      </tr>
      <tr>
        <td>Osama</td>
        <td>Mohamed</td>
        <td>40</td>
      </tr>
      <tr>
        <td colspan="2">Total</td>
        <td>160</td>
      </tr>
    </table>
```
# Span And Break And Horizontal Rule
- **`<span>`**: Groups a specific word or text for styling (stays on the same line).
- **`<br />`**: Forces a new line.
- **`<hr />`**: Draws a horizontal dividing line.
```html
 <h1>Book Store</h1>
    <p>This Is <span>My</span> <b>Book Store</b>, Welcome</p>
    <p>This Is Second Paragraph, <br />Test <br />Test Again</p>
    <hr />
    <p>Second Paragraph</p>
```
# Div And How To Use
- A `<div>` is an empty **container** used to group elements together so you can structure the webpage and style them as a single unit using CSS.
- In your code, it groups individual items into a single "book" box, and multiple books into genre sections ("romantic", "police", "fantasy").
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <div class="romantic">
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
    </div>
    <hr />
    <div class="police">
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
    </div>
    <hr />
    <div class="fantasy">
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
      <div class="book">
        <h3>Book Title</h3>
        <p>Book Description</p>
        <span>$100</span>
      </div>
    </div>
```
# HTML Entities
**HTML Entities** are special codes used to display reserved characters (like `<` and `>`) or hidden symbols (like `©`) that you can't normally type in HTML without breaking the code.
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
      <div>This Is My &lt;p&gt; Div &copy; &radic;</div>
    </div>
```
# Semantic Elements
**Semantic Elements** are tags that clearly describe their meaning and purpose to both the browser and the developer (e.g., `<header>` means header, not just a generic `<div>`).
Here is what your layout elements mean:
- **`<header>`**: Defines the top section of a page (usually contains logos and titles).
- **`<nav>`**: Contains navigation links for website menus.
- **`<section>`**: Groups related content together into a distinct chapter or section.
- **`<aside>`**: Holds side content that is tangentially related to the main topic (like a sidebar).
- **`<footer>`**: Defines the bottom section of a page (usually contains copyright or contact info).
```html
 <header>Head Of Website</header>
    <nav>Link - Link - Link</nav>
    <section>
      <section></section>
      <aside></aside>
    </section>
    <footer>Footer</footer>
```
# Layout With Div And Classes
This code creates a basic website layout using generic `<div>` containers and class names to label each section.
- **`<div class="header">`**: Groups the website logo and main menu links at the top.
- **`<ul class="navigation">`**: A secondary list acting as a navigation bar.
- **`<div class="content">`**: Holds the main body of the page (in this case, a cover image).
- **`<div class="sidebar">`**: A side section for extra links, ads, or secondary info.
- **`<div class="footer">`**: Groups the bottom elements of the website.
```html
 <div class="header">
      <h2>Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <hr>
    <ul class="navigation">
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
    </ul>
    <hr>
    <div class="content">
      <img decoding="async" src="imgs/home/cover-speed-website.png" alt="">
    </div>
    <div class="sidebar">
      Sidebar
    </div>
    <hr>
    <div class="footer">
      Footer
    </div>
```
# Layout With Semantic Elements
```html
 <header>
      <h2>Logo</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </header>
    <hr>
    <nav>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
      <li>Link</li>
    </nav>
    <hr>
    <section>
      <figure>
        <img decoding="async" src="imgs/home/cover-speed-website.png" alt="">
        <figcaption>Caption Of The Image</figcaption>
      </figure>
    </section>
    <aside>
      Sidebar
    </aside>
    <hr>
    <footer>
      Footer
    </footer>
```
# Audio
The `<audio>` tag is used to embed audio files into your webpage.
Here is what the **attributes** in your code do:
- **`controls`**: Displays the play/pause button, volume slider, and track timer.
- **`autoplay`**: Starts playing the audio automatically when the page loads.
- **`loop`**: Automatically restarts the audio from the beginning when it finishes.
- **`muted`**: Starts the audio with the sound turned off by default.
Inside the tag, the multiple **`<source>`** elements provide the same audio in different file formats (`.mp3`, `.ogg`, `.wav`) so that if a user's browser doesn't support one format, it can automatically load the next compatible one.
```html
  <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <audio controls autoplay loop muted>
      <source src="media/one_way_ticket.mp3" type="audio/mpeg">
      <source src="media/one_way_ticket.ogg" type="audio/ogg">
      <source src="media/one_way_ticket.wav" type="audio/wav">
      Your Browser Does Not Support Audio Tags
    </audio>
```
# Video
The `<video>` tag embeds a video player directly into your webpage.
Here is what your code's attributes and tags do:
- **`controls`**: Displays the play/pause button, volume control, timeline, and fullscreen options.
- **`width` & `height`**: Sets the size of the video player on the screen to $600 \times 400$ pixels.
- **`autoplay`, `loop`, `muted`**: Automatically plays the video on mute when the page loads, and loops it infinitely.
- **`poster`**: Displays a fallback thumbnail image while the video is downloading or before it plays.
- **`<source>`**: Provides multiple video formats (`.mp4`, `.ogg`) so the browser can play the one it supports best.
- **`<track>`**: Adds closed captions or subtitles in different languages (English and Italian) using external `.vtt` files.
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <video controls width="600" height="400" autoplay loop muted poster="imgs/home/cover-speed-website.png">
      <source src="media/ghosts.mp4" type="video/mp4">
      <source src="media/ghosts.ogg" type="video/ogg">
      Your Browser Does Not Support Video Tag
      <track src="my_file_en.vtt" kind="subtitles" srclang="en" label="English">
      <track src="my_file_it.vtt" kind="subtitles" srclang="it" label="Italian">
    </video>
```