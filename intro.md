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

## Variables

### Variables naming conventions:

- cannot contain spaces.
- cannot start with a number.
- Cannot Contain special characters.
- Must be different from reserved words like: var, function, new, return etc.

Variables can be declared using:
- var
- let
- const

| Feature       | var                        | let                        | const                      |
|--------------|----------------------------|----------------------------|----------------------------|
| Scope        | Function-scoped             | Block-scoped               | Block-scoped               |
| Hoisting     | Hoisted (initialized as `undefined`) | Hoisted (TDZ applies)      | Hoisted (TDZ applies)      |
| Re-declaration | ✅ Allowed in the same scope | ❌ Not allowed in the same scope | ❌ Not allowed in the same scope |
| Re-assignment | ✅ Allowed                 | ✅ Allowed                 | ❌ Not allowed             |
| Initial Value | Optional (`undefined` if omitted) | Optional (`undefined` if omitted) | Required at declaration |
| Use Case     | Avoid (legacy)              | Use wheuired |
n re-assignment is needed | Use by default unless re-assignment is req
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

# JavaScript Data Types

| Category       | Data Type   | Description |
|---------------|------------|-------------|
| **Primitive** | `Number`    | Represents integers and floating-point numbers. |
|               | `String`    | Represents textual data, enclosed in quotes. |
|               | `Boolean`   | Represents `true` or `false`. |
|               | `Undefined` | A variable that has been declared but not assigned a value. |
|               | `Null`      | Represents an intentional absence of value. |
|               | `BigInt`    | Used for numbers larger than `Number.MAX_SAFE_INTEGER`. |
|               | `Symbol`    | Represents a unique value, often used for object property keys. |
| **Non-Primitive (Reference)** | `Object`   | A collection of key-value pairs. |
|               | `Array`     | A list-like collection of values. |
|               | `Function`  | A reusable block of code. |
|               | `Date`      | Represents date and time. |
|               | `Map`       | A collection of key-value pairs with unique keys. |
|               | `Set`       | A collection of unique values. |

**Note:** JavaScript is dynamically typed, meaning variables can change their type at runtime.

[Operators](operators.md)