# Javascript

JavaScript (JS) is a high-level, interpreted programming language primarily used for making web pages interactive. It is a multi-paradigm language, supporting event-driven, functional, and object-oriented programming styles.

## First Steps

The easiest way of running javascript is in the browser console, open the browser console and type the code bellow in the console tab.

```javascript
alert("Hello world")
```

Evaluate variable and print if it corresponds to the text.

```javascript
let js = 'amazing'

if(js === 'amazing') alert('Javascript is Fun')
```

We can make math operations in the console too, it will work just fine.

```javascript
40+3+90-11
```

Modern Javascript is considered from ES6 onwards, released in 2015, the older version ES5 is a little different, ES stands for ECMAScript.

| Method         | What it does                            |
| -------------- | --------------------------------------- |
| console.log( ) | writes (logs) a message to the console. |
| alert( ) | Displays an alert box with a message and an OK button. |

#### Hoisting

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope (before execution), allowing you to use them before they are defined.

#### Read and write a string

```javascript
const name = prompt("What is your name?")
alert(`Hi ${name}`)
alert("Hi " + name)
```
- Here we read a variable using prompt and print it to the user.
- We can use template strings with ``` to place varibles inside a string to print a variable or use +.

#### Comments

```javascript
// single line coment

/*
    Multi lines 
    comment
*/

```

#### Link Javascript file to HTML

To link a javascript file to a HTML page we can use the tag script with the path to the file

```html
<body>
    <script src="script.js"></script>
</body>
```
This example assumes that the script file is in the same folder as the index.html

[Varibles and Data Types](references/variables_data_types.md)
[Operators](references/operators.md)
