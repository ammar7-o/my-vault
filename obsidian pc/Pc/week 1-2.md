---
banner: https://www.londonacademyofit.co.uk/images/courses/c_programming_for_beginners.jpg
author: Ammar chacal
dg-publish: true
---

# C Language Basics

## From Source Code to Executable

- **Source Code** → **Compiler** → **Machine Code (Binary)**

## Compilation Commands

- **Basic compile**
    ```bash
    clang hello.c
    ./a.out
    ```
- **With custom name**
    ```bash
    clang -o hello hello.c
    ```
- **With CS50 library**
    ```bash
    clang -o hello hello.c -lcs50
    ```

---

## Main Program Template

```c
#include <stdio.h>

int main(void)
{
    // your code here
}
```

---


---
## Data Types 

- string  → "Hello"
- int     → 42
- char    → 'A'
- float   → 3.14
- bool    → true / false

---
## Example project (stdio.h)
```c
#include <stdio.h>
int main(void)
{
printf("hello world \n");
}

```
- don't forget to add ; after finish fictions
- \n    make a new line
### Compile : 
```
clang -o hello hello.c
```
### Run :
```
./hello
```

---

## Example Project (CS50 Library)

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    char c = get_char("Do you agree? : ");

    if (c == 'y' || c == 'Y')   // '||' means OR
    {
        printf("You agreed!\n");
    }
    else if (c == 'n' || c == 'N')
    {
        printf("You disagreed!\n");
    }
    else
    {
        printf("Invalid input.\n");
    }
}
```

### CS50 functions
- get_string("Prompt")  // for user input string
- get_int("Prompt")     // for integer input
- get_char("Prompt")    // for one character
- printf("text", var)   // output to screen
- more ...

---

## How to Use `if` Statements in C

### Basic form

```c
if (condition)
{
    // code runs if condition is true
}
```

### With `else if`

```c
if (condition1)
{
    // runs if condition1 is true
}
else if (condition2)
{
    // runs if condition2 is true
}
```

### With `else`

```c
if (condition)
{
    // runs if condition is true
}
else
{
    // runs if condition is false
}
```


---

## Operators for Conditions

| Operator | Meaning          | Example             |
| -------- | ---------------- | ------------------- |
| ==       | equal to         | `x == 5`            |
| `!=`     | not equal to     | `x != 10`           |
| `>`      | greater than     | `x > 3`             |
| `<`      | less than        | `x < 7`             |
| `>=`     | greater or equal | `x >= 18`           |
| `<=`     | less or equal    | `x <= 100`          |
| `&&`     | AND (both true)  | `(x > 0 && x < 10)` |
| `        |                  | `                   |

---

## Example with Numbers

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int age = get_int("Enter your age: ");

    if (age >= 18)
    {
        printf("You are an adult.\n");
    }
    else if (age >= 13 && age < 18)
    {
        printf("You are a teenager.\n");
    }
    else
    {
        printf("You are a child.\n");
    }
}
```

### Compile:
```bash
clang -o agree agree.c -lcs50
```
### Run:
```bash
./agree
```
 ---
 
## Use variable
```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string name = get_string("What's your name? : ");
    printf("hello %s\n", name);   // %s is replaced by the value of variable name
}
```
## Explanation

- `string` is a CS50 type (basically `char *` in C).
- `get_string` asks user input and stores it into the variable.
- `printf("hello %s\n", name);`
- `%s` is the **placeholder** for a string.
- The variable `name` is inserted where `%s` is.

| Placeholder | Type               | Example         |
| ----------- | ------------------ | --------------- |
| `%s`        | string             | `"hello"`       |
| `%i`        | integer            | `42`            |
| `%f`        | float / double     | `3.14`          |
| `%.2f`      | float (2 decimals) | `3.14` → `3.14` |
| `%c`        | single char        | `'A'`           |
| `%li`       | long integer       | `1234567890`    |
| `%u`        | unsigned int       | `100`           |
| `%p`        | pointer (address)  | `0x7ffee12a3c`  |
Perfect 🚀 Now you’re moving into **functions in C**. Let’s break it down and make a simple guide for how to use functions.

---

## Example Project with Functions

```c
#include <stdio.h>
#include <cs50.h>

// Function prototypes (declare before main)
void meow(void);
void hello(int i);

int main(void)
{
    for (int i = 0; i < 2; i++) // Print "meow" 2 times
    {
        meow();
    }

    hello(3); // Call hello with argument 3
}

// Function definition
void meow(void)
{
    printf("meow\n");
}

void hello(int i)
{
    for (int n = 0; n < i ; n++)
    {
        printf("hello\n");
    }
}
```

---

## How to Use Functions in C

### 1. Function Prototype (Declaration)

You tell the compiler the function **exists** before `main`:

```c
void say_hi(void);   // no return, no input
int add(int a, int b); // returns int, takes 2 ints
```

### 2. Function Call

Inside `main` (or another function), you **call** it:

```c
say_hi();
int result = add(3, 5);
```

### 3. Function Definition

You **write the body** (the real code):

```c
void say_hi(void)
{
    printf("Hi!\n");
}

int add(int a, int b)
{
    return a + b;
}
```

---

## Function Syntax Template

```c
return_type function_name(parameter_type parameter, ...)
{
    // code
    return value; // only if return_type is not void
}
```

---

## Example: Add, Subtract, Multiply

```c
#include <stdio.h>

// Function prototypes
int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);

int main(void)
{
    int x = 10;
    int y = 5;

    printf("Add: %d\n", add(x, y));
    printf("Subtract: %d\n", subtract(x, y));
    printf("Multiply: %d\n", multiply(x, y));
}

int add(int a, int b)
{
    return a + b;
}

int subtract(int a, int b)
{
    return a - b;
}

int multiply(int a, int b)
{
    return a * b;
}
```

---

✅ Now you have a **step-by-step formula**:

1. Declare (prototype)
2. Call in `main`
3. Define

---

# 🔁 Loops in C

Loops let us **repeat code** without writing it many times.

---

## 1. While Loop

👉 Repeats **while condition is true**.

```c
#include <stdio.h>

int main(void)
{
    int i = 3; // counter

    while (i > 0)   // condition
    {
        printf("meow\n");
        i--;        // update counter
    }
}
```

**Output:**

```
meow
meow
meow
```

---

## 2. For Loop

👉 Best when you know **exactly how many times** to repeat.

```c
#include <stdio.h>

int main(void)
{
    for (int i = 0; i < 3; i++)   // start=0, stop<3, step=+1
    {
        printf("hello\n");
    }
}
```

**Output:**

```
hello
hello
hello
```

---

## 3. Do While Loop

👉 Runs **at least once**, then checks condition.

```c
#include <stdio.h>

int main(void)
{
    int x = 0;

    do
    {
        printf("run once!\n");
        x++;
    }
    while (x < 3);
}
```

**Output:**

```
run once!
run once!
run once!
```

---

## Loop Summary

|Loop|When to use|
|---|---|
|`while`|Repeat until condition is false (don’t always know number of times).|
|`for`|Repeat a known number of times (best for counting).|
|`do while`|Always run at least once, even if condition is false.|

---

✅ Simple Example Combining All:

```c
#include <stdio.h>

int main(void)
{
    // while loop
    int a = 2;
    while (a > 0)
    {
        printf("while loop\n");
        a--;
    }

    // for loop
    for (int i = 0; i < 2; i++)
    {
        printf("for loop\n");
    }

    // do while loop
    int x = 0;
    do
    {
        printf("do while loop\n");
        x++;
    }
    while (x < 2);
}
```

---
## Projects
### BMi counter
```c
#include <stdio.h>
#include <cs50.h>

int main(void) // BMI Counter
{
    string name = get_string("What's your name? : ");
    int age = get_int("What is your age? : ");
    float height_cm = get_float("What is your height (in cm)? : ");
    float weight = get_float("What is your weight (in kg)? : ");

    // Convert height to meters
    float height_m = height_cm / 100;

    // Calculate BMI using float
    float bmi = weight / (height_m * height_m);

    // Determine weight status
    string status;

    if (bmi < 18.5)
    {
        status = "Underweight";
    }
    else if (bmi < 25.0)
    {
        status = "Normal weight";
    }
    else if (bmi < 30.0)
    {
        status = "Overweight";
    }
    else
    {
        status = "Obese";
    }

    // Output result
    printf("\nHello %s, how are you?\n", name);
    printf("You are %d years old.\n", age);
    printf("Your BMI is: %.2f\n", bmi);
    printf("You are classified as: %s\n", status);

    return 0;
}
```
### addition 
```c
#include <stdio.h>
#include <cs50.h>

int add(int a, int b);  // Change to 'int' instead of 'void'

int main(void)
{
    int x = get_int("first number: ");
    int y = get_int("second number: ");
    int result = add(x, y);       // Store the result
    printf("the resulte is :  %i\n", result);       // Print the result
}

int add(int a, int b)  // Also return 'int' here
{
    return a + b;      // Return the sum
}
```
### # maker
```c
#include <stdio.h>
#include <cs50.h>

void que(int x, int y);

int main(void)
{
    int aaa = get_int("Choose the height: ");
    int bbb = get_int("Choose the width: ");

    while (aaa <= 0 || bbb <= 0)
    {
        printf("Please enter positive numbers only.\n");
        aaa = get_int("Choose the height: ");
        bbb = get_int("Choose the width: ");
    }
    // or you can use 
    /* do {
           printf("Please enter positive numbers only.\n");
           aaa = get_int("Choose the height: ");
           bbb = get_int("Choose the width: ");
          }
           while {aaa < 1 || bbb < 1}
     */
    que(aaa, bbb);
}

void que(int x, int y)
{
    for (int i = 0; i < x; i++)
    {
        for (int k = 0; k < y; k++)
        {
            printf("#");
        }
        printf("\n");
    }
}
```

# Problem set 1

### hello world
```c
#include <stdio.h>
int main(void)
{
printf("hello, world");
}
```

### hello.c  in folder me
```c
#include <cs50.h>
#include <stdio.h>

int main(void)

{

string name = get_string("whats your name ? :");

printf("hello, %s\n", name);

}
```
### Mario-less
```c
#include <cs50.h>
#include <stdio.h>

int main(void)
{
int height;
// Prompt user for pyramid height between 1 and 8
do
{
height = get_int("Height: ");
}
while (height < 1 || height > 8);
// Build the pyramid
for (int i = 1; i <= height; i++)

{
// Print leading spaces
for (int j = 0; j < height - i; j++)

{

printf(" ");

}
// Print hashes
for (int j = 0; j < i; j++)
{
printf("#");
}
// Move to the next line
printf("\n");
}

}
```
### Cash 
```c
#include <cs50.h>
#include <stdio.h>
int main(void)

{

int cent;

do
{
cent = get_int("change owed :");
}
while (cent < 0);

int vintC = cent / 25;
cent = cent % 25;
int dis = cent / 10;
cent = cent % 10;
int cinq = cent / 5;
cent = cent % 5;
int un = cent / 1;
int all = vintC + dis + cinq + un;
printf(" %i\n", all);

}
```

# Arrays

## Compilation Stages

1. **Preprocessing** – Handles `#include`, `#define`, and macros.
2. **Compiling** – Converts C code into assembly code.
3. **Assembling** – Translates assembly into machine code (object file).
4. **Linking** – Combines object files and libraries into a single executable.

## REVERSE ENGINEERING
- You can decompile machine code using decompilers.
- This is called Reverse Engineering.
## DEBUGGING
- Process of finding & fixing bugs
- Tools: debug50 ./hello, gdb, lldb, rubber duck, cs50.ai.
- Garbage Variable: All variables have content if not initialized.
## MEMORY SIZE OF DATA TYPES

| Data Type |           Size            |
| --------- | :-----------------------: |
| `bool`    |          1 byte           |
| `char`    |          1 byte           |
| `int`     |          4 bytes          |
| `long`    |          8 bytes          |
| `float`   |          4 bytes          |
| `double`  |          8 bytes          |
| string    | Variable (array of chars) |
## STORAGE LOCATION
- Variables are stored in RAM (memory)

---

## arrays : Declare, assign, and print an array

```c
#include <stdio.h>

int main(void)
{
    // Declare an array of 3 integers
    int score[3];

    // Assign values to each element
    score[0] = 10;
    score[1] = 20;
    score[2] = 30;

    // Print each value
    printf("First score: %i\n", score[0]);
    printf("Second score: %i\n", score[1]);
    printf("Third score: %i\n", score[2]);

}
```

---

### ✅ Example: Initialize directly

```c
#include <stdio.h>

int main(void)
{
    // Declare and initialize at the same time
    int score[3] = {10, 20, 30};

    // Print all scores
    for (int i = 0; i < 3; i++)
    {
        printf("Score %i: %i\n", i, score[i]);
    }

    return 0;
}
```

---

### 📝 Key points:

- Array indices start at **0**.  
    → `score[0]` is the first element, `score[2]` is the last (for size 3).
- Size must be known at compile time (or use `malloc` for dynamic arrays).
- You can use loops to process arrays easily.

---


```c
#include <stdio.h>

int main(void)
{
    int one = 12;
    int two = 23;
    int three = 29;

    // Option 1: Use 3.0 (double literal) so the division is floating-point
    double avg1 = (one + two + three) / 3.0;

    // Option 2: Cast numerator to double
    double avg2 = (double)(one + two + three) / 3;

    printf("Average (using 3.0) = %.2f\n", avg1);
    printf("Average (using cast) = %.2f\n", avg2);

    return 0;
}
```

---

### 💡 Output:

```
Average (using 3.0) = 21.33
Average (using cast) = 21.33
```

---

So yes ✅ you can either:

- Write `3.0` (makes it a `double` literal), or
- Cast with `(double)`.

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{

char jem[3];

jem[0] = 'a';
jem[1] = 'd';
jem[2] = 'k';
printf("%i %i %i\n", jem[0], jem[1], jem[2]);
return 0;

}
```
- you can make arrays contain chars
- you can print ASCII code for every char
---

### Strings in C

- **Length**: The number of actual characters (not counting the `\0`).
    
- **Memory size**: Length + 1 (because of the null terminator `\0`).
    
- **End of string**: Every string in C ends with the character `\0`.
    

---

### Example 1

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string name = "ammar"; // string is an array
    printf("%c\n", name[0]);
}
```

**Output:**

```
a
```

✅ Correct (it prints the first character).

---

### Example 2 : string length 

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int h = 0;
    string name = "ammaryasser";

    for (int i = 0; name[i] != 0; i++)
    {
        h++;
    }

    printf("%i\n", h);
}
```

**Output:**

```
11
```

---

### array of strings

```c
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string words[2]; // array of strings
    words[0] = "ammar";
    words[1] = " yasser";

    // print the 3rd character of the second string
    printf("%c\n", words[1][2]);
}
```

**Output:**

```
y
```

---

### Explanation

1. `words` is an **array of strings** (2 strings in this case).
    
2. `words[1]` accesses the **second string**, `" yasser"`.
    
3. `words[1][2]` accesses the **third character** of the second string (`0`-based index).
    

> Index counting starts at 0:

```
words[1][0] -> ' ' (space)
words[1][1] -> 'y'
words[1][2] -> 'a'
```

Ah! Wait carefully — in your string `" yasser"`, the **second letter** (`index 1`) is `'y'`, the **third letter** (`index 2`) is `'a'`. So if you want the **second letter**, you should do:

```c
printf("%c\n", words[1][1]); // prints 'y'
```

---


## Uppercase & Lowercase in C

#### 1. Get string length with `strlen()`

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string s = get_string("Input : ");
    int length = strlen(s);

    for (int i = 0; i < length; i++)
    {
        printf("%c\n", s[i]); // print each character
    }
}
```

---

#### 2. Convert lowercase → uppercase (manual ASCII method)

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string input = get_string("Input : ");
    int length = strlen(input);

    for (int i = 0; i < length; i++)
    {
        if (input[i] >= 'a' && input[i] <= 'z')
        {
            int upper = input[i] - 32; // ASCII difference between 'a' and 'A'
            printf("%c", upper);
        }
        else
        {
            printf("%c", input[i]); // unchanged
        }
    }
    printf("\n");
}
```

---

#### 3. Convert uppercase → lowercase (manual ASCII method)

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string input = get_string("Input : ");
    int length = strlen(input);

    for (int i = 0; i < length; i++)
    {
        if (input[i] >= 'A' && input[i] <= 'Z')
        {
            int lower = input[i] + 32; // ASCII difference between 'A' and 'a'
            printf("%c", lower);
        }
        else
        {
            printf("%c", input[i]);
        }
    }
    printf("\n");
}
```

---

#### 4. Toggle case (Lower ↔ Upper)

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>

int main(void)
{
    string input = get_string("Input : ");
    int length = strlen(input);

    for (int i = 0; i < length; i++)
    {
        if (input[i] >= 'a' && input[i] <= 'z')
        {
            printf("%c", input[i] - 32); // lowercase → uppercase
        }
        else if (input[i] >= 'A' && input[i] <= 'Z')
        {
            printf("%c", input[i] + 32); // uppercase → lowercase
        }
        else
        {
            printf("%c", input[i]); // numbers, symbols unchanged
        }
    }
    printf("\n");
}
```

---

#### 5. Using `<ctype.h>` (recommended)

The **ctype.h** library provides ready-made functions:

- `toupper(c)` → convert character to uppercase
    
- `tolower(c)` → convert character to lowercase
    

##### Example:

```c
#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

int main(void)
{
    string input = get_string("Input : ");
    int length = strlen(input);

    // Convert entire string to UPPERCASE
    for (int i = 0; i < length; i++)
    {
        printf("%c", toupper(input[i]));
    }
    printf("\n");

    // Convert entire string to lowercase
    for (int i = 0; i < length; i++)
    {
        printf("%c", tolower(input[i]));
    }
    printf("\n");
}
```

---

✅ Summary:
- **Manual method:** use ASCII math (`±32`).
- **Cleaner method:** use `toupper()` / `tolower()` from `<ctype.h>`.
# Cryptography

plain text + key  --->     cipher   -----> cipher-text 
decryption is the reverse

# problem set 2
## scrabble
```c
#include <cs50.h>

#include <ctype.h>

#include <stdio.h>

#include <string.h>

  

int main(void)

{

// قيم الحروف من Scrabble

int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};

  

// player 1

string player1 = get_string("Player 1: ");

int score1 = 0;

int length1 = strlen(player1);

  

for (int i = 0; i < length1; i++)

{

if (isalpha(player1[i])) // فقط الحروف

{

char letter = tolower(player1[i]); // حوّل إلى صغير

int index = letter - 'a'; // حدد الموقع (0 = a, 25 = z)

score1 += POINTS[index];

}

}

  

printf("Score1: %i\n", score1);

  

// player 2

string player2 = get_string("Player 2: ");

int score2 = 0;

int length2 = strlen(player2);

  

for (int i = 0; i < length2; i++)

{

if (isalpha(player2[i]))

{

char letter = tolower(player2[i]);

int index = letter - 'a';

score2 += POINTS[index];

}

}

  

printf("Score2: %i\n", score2);

  

// تحديد الفائز

if (score1 > score2)

{

printf("Player 1 wins!\n");

}

else if (score2 > score1)

{

printf("Player 2 wins!\n");

}

else

{

printf("Tie!\n");

}

}
```

### 1. Points table for Scrabble letters

```c
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 
                5, 1, 3, 1, 1, 3,10, 1, 1, 1, 
                1, 4, 4, 8, 4,10};
```

- This array stores the **point value** for each letter of the English alphabet.
    
- Index `0` → `'a'` worth 1 point
    
- Index `1` → `'b'` worth 3 points
    
- …
    
- Index `25` → `'z'` worth 10 points
    

So `POINTS[letter - 'a']` gives you the value of any letter.

---

### 2. Input from Player 1

```c
string player1 = get_string("Player 1: ");
```

- Asks Player 1 to type a word.
    
- `get_string` comes from CS50’s library, it reads user input as a string.
    

---

### 3. Score calculation (Player 1)

```c
int score1 = 0;
int length1 = strlen(player1);

for (int i = 0; i < length1; i++)
{
    if (isalpha(player1[i]))  // check: is it a letter?
    {
        char letter = tolower(player1[i]);  // convert to lowercase
        int index = letter - 'a';           // map 'a'–'z' to 0–25
        score1 += POINTS[index];            // add points for that letter
    }
}
```

- Loop through each character in the word.
    
- Ignore non-letters (e.g., numbers, punctuation).
    
- Convert to lowercase (so `'A'` and `'a'` are treated the same).
    
- Find the **index** by subtracting `'a'` from the letter.
    
    - Example: `'c' - 'a' = 2` → `POINTS[2] = 3` points.
        
- Add the value to Player 1’s score.
    

---

### 4. Same process for Player 2

```c
string player2 = get_string("Player 2: ");
...
score2 += POINTS[index];
```

- Identical loop for Player 2’s word.
    
- Calculates total score.
    

---

### 5. Print results and decide the winner

```c
printf("Score1: %i\n", score1);
printf("Score2: %i\n", score2);

if (score1 > score2)
    printf("Player 1 wins!\n");
else if (score2 > score1)
    printf("Player 2 wins!\n");
else
    printf("Tie!\n");
```

- Shows the score of each player.
    
- Compares them and prints the winner.
    
- If scores are equal → prints `"Tie!"`.
    

---

✅ Example Run:

```
Player 1: CAT
Player 2: DOG
Score1: 5
Score2: 5
Tie!
```

---
