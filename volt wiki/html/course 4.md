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

# Form Part 8 – File, Search, URL, Time
### File, Search, URL & Time Inputs
- **`type="file"`**: Creates a button letting users choose and upload files from their device.
- **`type="search"`**: A text field optimized for search queries (often includes an "X" button to clear text).
- **`type="url"`**: Validates that the entered text is a properly formatted web address (e.g., `https://...`).
- **`type="date"` / `"month"` / `"time"`**: Opens native pop-up pickers for dates, months, or specific times.
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form action="" method="GET">
      <input type="hidden" value="Osama" />
      <div>
        <label>Username</label>
        <input type="text" required placeholder="Username" name="user" value="Osama" readonly />
      </div>
      <br />
      <div>
        <label>Subject</label>
        <input type="text" name="subject" autofocus />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Write A Complex Password"
          name="pass"
          minlength="10"
          maxlength="20"
        />
      </div>
      <br />
      <div>
        <label>Email</label>
        <input type="email" required placeholder="Write A Valid Email" value="o@nn.sa" name="mail" disabled />
      </div>
      <br />
      <div>
        <label>Color</label>
        <input type="color" name="Color" />
      </div>
      <br />
      <div>
        <label>Range</label>
        <input type="range" name="range" min="0" max="100" step="20" value="80" />
      </div>
      <br />
      <div>
        <label for="num">Number</label>
        <input id="num" type="number" name="number" min="10" max="100" step="10" />
      </div>
      <hr />
      <div>
        <input id="win" type="radio" name="os" value="Windows" checked />
        <label for="win">Windows</label>
      </div>
      <div>
        <input id="lin" type="radio" name="os" value="Linux" />
        <label for="lin">Linux</label>
      </div>
      <div>
        <input id="mac" type="radio" name="os" value="Mac" />
        <label for="mac">Mac</label>
      </div>
      <hr />
      <div>
        <input id="win1" type="checkbox" name="os" value="Windows" checked />
        <label for="win1">Windows</label>
      </div>
      <div>
        <input id="lin1" type="checkbox" name="os" value="Linux" />
        <label for="lin1">Linux</label>
      </div>
      <div>
        <input id="mac1" type="checkbox" name="os" value="Mac" />
        <label for="mac1">Mac</label>
      </div>
      <br />
      <label for="book">Choose Book:</label>
      <select name="book" id="book">
        <optgroup label="Romantic Books">
          <option value="1">Book 1</option>
          <option value="2">Book 2</option>
          <option value="3">Book 3</option>
        </optgroup>
        <optgroup label="Police Books">
          <option value="4" selected>Book 4</option>
          <option value="5">Book 5</option>
          <option value="6">Book 6</option>
        </optgroup>
      </select>
      <hr />
      <textarea name="subject" cols="40" rows="10" placeholder="Test Text"></textarea>
      <hr />
      <div>
        <label>Upload</label>
        <input type="file" />
      </div>
      <hr />
      <div>
        <label>Search</label>
        <input type="search" />
      </div>
      <hr />
      <div>
        <label>Url</label>
        <input type="url" />
      </div>
      <hr />
      <div>
        <label>Date</label>
        <input type="date" />
      </div>
      <hr />
      <div>
        <label>Month</label>
        <input type="month" />
      </div>
      <hr />
      <div>
        <label>Time</label>
        <input type="time" />
      </div>
      <hr />
      <input type="reset" value="Reset" />
      <input type="submit" value="Save" />
    </form>
```
# Form Part 9 – Data List, NoValidate, Target
### Form Settings & Data Lists
- **`<datalist>`**: Creates a text input with a dropdown menu of suggestions. Users can choose a recommendation or type their own unique entry.
- **`novalidate`**: Tells the browser to skip checking form validation rules (like `required` or `type="email"`) upon submission.
- **`target="_blank"`**: Opens the form submission result page in a brand new browser tab.
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form action="" method="GET" novalidate target="_blank">
      <input type="hidden" value="Osama" />
      <div>
        <label>Username</label>
        <input type="text" required placeholder="Username" name="user" value="Osama" readonly />
      </div>
      <br />
      <div>
        <label>Subject</label>
        <input type="text" name="subject" autofocus />
      </div>
      <br />
      <div>
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Write A Complex Password"
          name="pass"
          minlength="10"
          maxlength="20"
        />
      </div>
      <br />
      <div>
        <label>Email</label>
        <input type="email" required placeholder="Write A Valid Email" value="o@nn.sa" name="mail" disabled />
      </div>
      <br />
      <div>
        <label>Color</label>
        <input type="color" name="Color" />
      </div>
      <br />
      <div>
        <label>Range</label>
        <input type="range" name="range" min="0" max="100" step="20" value="80" />
      </div>
      <br />
      <div>
        <label for="num">Number</label>
        <input id="num" type="number" name="number" min="10" max="100" step="10" />
      </div>
      <hr />
      <div>
        <input id="win" type="radio" name="os" value="Windows" checked />
        <label for="win">Windows</label>
      </div>
      <div>
        <input id="lin" type="radio" name="os" value="Linux" />
        <label for="lin">Linux</label>
      </div>
      <div>
        <input id="mac" type="radio" name="os" value="Mac" />
        <label for="mac">Mac</label>
      </div>
      <hr />
      <div>
        <input id="win1" type="checkbox" name="os" value="Windows" checked />
        <label for="win1">Windows</label>
      </div>
      <div>
        <input id="lin1" type="checkbox" name="os" value="Linux" />
        <label for="lin1">Linux</label>
      </div>
      <div>
        <input id="mac1" type="checkbox" name="os" value="Mac" />
        <label for="mac1">Mac</label>
      </div>
      <br />
      <label for="book">Choose Book:</label>
      <select name="book" id="book">
        <optgroup label="Romantic Books">
          <option value="1">Book 1</option>
          <option value="2">Book 2</option>
          <option value="3">Book 3</option>
        </optgroup>
        <optgroup label="Police Books">
          <option value="4" selected>Book 4</option>
          <option value="5">Book 5</option>
          <option value="6">Book 6</option>
        </optgroup>
      </select>
      <hr />
      <textarea name="subject" cols="40" rows="10" placeholder="Test Text"></textarea>
      <hr />
      <div>
        <label>Upload</label>
        <input type="file" />
      </div>
      <hr />
      <div>
        <label>Search</label>
        <input type="search" />
      </div>
      <hr />
      <div>
        <label>Url</label>
        <input type="url" />
      </div>
      <hr />
      <div>
        <label>Date</label>
        <input type="date" />
      </div>
      <hr />
      <div>
        <label>Month</label>
        <input type="month" />
      </div>
      <hr />
      <div>
        <label>Time</label>
        <input type="time" />
      </div>
      <input list="programming" name="prog">
      <datalist id="programming">
        <option value="Python">
        <option value="PHP">
        <option value="C#">
        <option value="C">
        <option value="C++">
        <option value="Scala">
      </datalist>
      <hr />
      <input type="reset" value="Reset" />
      <input type="submit" value="Save" />
    </form>
```
# Q, BlockQuote, Wbr, Bdi, Button
### Quotes, Breaks, Text Direction & Buttons
- **`<q>` vs `<blockquote>`**: `<q>` adds inline quotation marks around short text. `<blockquote>` indents long, standalone blocks of quoted text.
- **`<button>`**: Creates a clickable button element that can hold text or images.
- **`<wbr>` (Word Break Opportunity)**: Tells the browser exactly where it is safe to split an extremely long word or URL if it hits the edge of the screen.
- **`<bdi>` (Bi-Directional Isolation)**: Isolates a piece of text (like Arabic) so its right-to-left direction won't scramble the formatting of surrounding left-to-right text.
```html
  <q>This Is Wise Word</q>
    <blockquote>This Is Wise Word</blockquote>
    <button>Click</button>
    <div>
      https://www.youtube.com/<wbr>playlist?list=PLM_i0obccy3swdHfFh1FrLEVVFMp8<wbr>-5Jc&fbclid=IwAR2eP038MSFNJSmNCssdpaBm3KofEJUG9e<wbr>jR95GGGm9AKB0StOIPpLA6fgc
    </div>
    <p>السلام 2 Welcome</p>
    <p><bdi>السلام</bdi> 2 Welcome</p>
```
# iFrame, Pre, Code
### Code Formatting & iFrames
- **`<code>`**: Changes text to a monospaced font to represent computer programming code.
- **`<pre>`**: Preserves exact spaces, tabs, and line breaks exactly as written in your source file.
- **`<pre><code>`**: The standard combination used to display block layout code snippets cleanly.
- **`<iframe>`**: Embeds an entire external website (`src="..."`) directly inside a window on your page.
```html
 <code>
      var x = 10;
      var y = 20;
      console.log(x + y);
    </code>
    <p>
      This Is
      P
      New Line
      New Line
    </p>
    <pre>
      This Is
      P
      New Line
      New Line
    </pre>
    <pre>
      <code>
        var x = 10;
        var y = 20;
        console.log(x + y);
      </code>
    </pre>
    <iframe src="https://elzero.org/" width="800" height="400"></iframe>
```
