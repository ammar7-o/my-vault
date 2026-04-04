---
banner: https://www.londonacademyofit.co.uk/images/courses/c_programming_for_beginners.jpg
dg-publish: true
tags:
  - cs50
  - c
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

## Compilation Stages

1. **Preprocessing** – Handles `#include`, `#define`, and macros.
2. **Compiling** – Converts C code into assembly code.
3. **Assembling** – Translates assembly into machine code (object file).
4. **Linking** – Combines object files and libraries into a single executable.
---
## Data Type Sizes

|Data Type|Size|
|---|---|
|`bool`|1 byte|
|`char`|1 byte|
|`int`|4 bytes|
|`long`|8 bytes|
|`float`|4 bytes|
|`double`|8 bytes|

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
