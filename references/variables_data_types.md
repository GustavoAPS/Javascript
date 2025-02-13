## Variables

### Naming conventions:

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


# Data Types

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
