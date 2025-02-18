## Variables

A value is the smallest piece of data in javascript, like names or numbers, values are stored in variables to be used when needed. 

In Javascript every value is an object or a primitive.

### Naming conventions:

- Use cammel case.
- cannot contain spaces.
- cannot start with a number.
- Cannot Contain special characters.
- Must be different from reserved words like: var, function, new, return etc.
- Constants myst be all uppercase like "let PI = 3.1415"

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
| Use Case     | Avoid (legacy)              | Use when re-assignment is needed | Use by default unless re-assignment is required


# Data Types

| Category       | Data Type   | Description |
|---------------|------------|-------------|
| **Primitive** | `Number`    | Integers and floating-point numbers. |
|               | `String`    | Textual data, enclosed in quotes. |
|               | `Boolean`   | `true` or `false`. |
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
<br>
**Note:** In JavaScript the value has a type, not the varible.
