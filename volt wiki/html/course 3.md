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
# Form Part 1 – Input Types And Label
The `<form>` tag creates a section to collect user inputs and send data to a server.
Here is what your form components do:
- **`<label>`**: Displays a text label (like "Username") next to the input box so users know what to type.
- **`<input type="text">`**: Creates a single-line text box where the user can type plain text.
- **`<input type="password">`**: Creates a secure text box that hides the typed characters behind dots or asterisks.
- **`<input type="submit">`**: Creates a button that submits the entered form data when clicked.
```html
  <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form>
      <div>
        <label>Username</label>
        <input type="text">
      </div>
      <br>
      <div>
        <label>Password</label>
        <input type="password">
      </div>
      <input type="submit">
    </form>
```
# Form Part 2 – Required, Placeholder, Value
This part of the form introduces **input attributes** that control behavior, provide hints, and set default data:
- **`required`**: Makes the field mandatory. The browser will block the form from submitting and show an error message if the field is left empty.
- **`placeholder`**: Displays a temporary, light-gray hint inside the input box (e.g., _"Write A Complex Password"_) that disappears as soon as the user starts typing.
- **`value`**: Sets the actual data of the input field.
    - On `type="email"`, `value="o@nn.sa"` pre-fills the field with that email address by default.
    - On `type="submit"`, `value="Save"` changes the text written on the clickable button from "Submit" to "Save".
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form>
      <div>
        <label>Username</label>
        <input type="text" required placeholder="Username">
      </div>
      <br>
      <div>
        <label>Subject</label>
        <input type="text">
      </div>
      <br>
      <div>
        <label>Password</label>
        <input type="password" required placeholder="Write A Complex Password">
      </div>
      <br>
      <div>
        <label>Email</label>
        <input type="email" required placeholder="Write A Valid Email" value="o@nn.sa">
      </div>
      <input type="submit" value="Save">
    </form>
```
# Form Part 3 – Action, Name, Method
This part of the form introduces critical attributes that control how data is packaged and sent to a server backend.
### Form Attributes
- **`action=""`**: Specifies the URL or server-side file (like `submit.php`) where the form data should be sent. When left empty, it submits the data back to the current page.
- **`method="POST"`**: Defines how the data is sent. **POST** sends the data securely hidden inside the HTTP request body (best for sensitive data like passwords), whereas **GET** would visible attach the data to the URL.
### Input Attribute
- **`name="..."`**: This acts as a **unique identifier** (or variable name) for the input field. Without a `name` attribute, the backend server will not receive the data from that field.
    - For example, the server will read the username field as `user=entered_username`.
```html
 <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form action="" method="POST">
      <div>
        <label>Username</label>
        <input type="text" required placeholder="Username" name="user">
      </div>
      <br>
      <div>
        <label>Subject</label>
        <input type="text" name="subject">
      </div>
      <br>
      <div>
        <label>Password</label>
        <input type="password" required placeholder="Write A Complex Password" name="pass">
      </div>
      <br>
      <div>
        <label>Email</label>
        <input type="email" required placeholder="Write A Valid Email" value="o@nn.sa" name="mail">
      </div>
      <input type="submit" value="Save">
    </form>
```
# Form Part 4 – Hidden, Reset, Color, Range, Number
###  Input Types
- **`type="hidden"`**: Sends data to the server behind the scenes without showing it to the user.
- **`type="color"`**: Opens a native color picker tool.
- **`type="range"`**: Creates a slider bar using `min`, `max`, and increments (`step`).
- **`type="number"`**: A text box that only accepts numbers within a defined numeric range.
- **`type="reset"`**: A button that instantly clears all fields back to their default state.
```html
  <div>
      <h1>Book Store</h1>
      <p>This Is My Book Store, Welcome</p>
    </div>
    <form action="" method="GET">
      <input type="hidden" value="Osama">
      <div>
        <label>Username</label>
        <input type="text" required placeholder="Username" name="user">
      </div>
      <br>
      <div>
        <label>Subject</label>
        <input type="text" name="subject">
      </div>
      <br>
      <div>
        <label>Password</label>
        <input type="password" required placeholder="Write A Complex Password" name="pass">
      </div>
      <br>
      <div>
        <label>Email</label>
        <input type="email" required placeholder="Write A Valid Email" value="o@nn.sa" name="mail">
      </div>
      <br>
      <div>
        <label>Color</label>
        <input type="color" name="Color">
      </div>
      <br>
      <div>
        <label>Range</label>
        <input type="range" name="range" min="0" max="100" step="20" value="80">
      </div>
      <br>
      <div>
        <label>Number</label>
        <input type="number" name="number" min="10" max="100" step="10">
      </div>
      <input type="reset" value="Reset">
      <input type="submit" value="Save">
    </form>
```
# Form Part 5 – Read Only, Disabled, Auto Focus
### Input Behavior & Constraints
- **`readonly`**: Users can see and submit the pre-filled value, but they cannot edit it.
- **`disabled`**: Locks the field completely. It cannot be edited **and** its value is not sent to the server.
- **`autofocus`**: Automatically puts the cursor in this input box as soon as the page loads.
- **`minlength` & `maxlength`**: Forces a character limit (e.g., password must be between 10 and 20 characters long).
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
        <label>Number</label>
        <input type="number" name="number" min="10" max="100" step="10" />
      </div>
      <input type="reset" value="Reset" />
      <input type="submit" value="Save" />
    </form>
```
# Form Part 6 – Radio And Checkbox
### Selectors & Labels
- **`type="radio"`**: Circular buttons where you can only choose **one option** from a matching group (`name="os"`).
- **`type="checkbox"`**: Square boxes that let users select **multiple options** at the same time.
- **`checked`**: Pre-selects a radio button or checkbox by default.
- **`for` & `id`**: Linking a label's `for="..."` attribute to an input's `id="..."` makes clicking the text label activate the input box.
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
      <input type="reset" value="Reset" />
      <input type="submit" value="Save" />
    </form>
```
# Form Part 7 – Select And Textarea
### Menus & Text Areas
- **`<select>` & `<option>`**: Creates a clean, space-saving dropdown menu list.
- **`<optgroup>`**: Adds clear, un-clickable category titles inside the dropdown list to group choices.
- **`selected`**: Sets the default active choice in the dropdown menu.
- **`<textarea>`**: Creates a large, multi-line text input box for longer messages, sized using `rows` and `cols`.
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
      <input type="reset" value="Reset" />
      <input type="submit" value="Save" />
    </form>
```
