# JavaScript Operators

## Summary
JavaScript has a variety of operators for different purposes:
- **Arithmetic** (`+`, `-`, `*`, `/`, `%`, `**`)
- **Assignment** (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`)
- **Comparison** (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`)
- **Logical** (`&&`, `||`, `!`)
- **Bitwise** (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`)
- **Ternary** (`? :`)
- **Type Checking** (`typeof`, `instanceof`)
- **Advanced** (`...`, `?.`, `??`)

## 1. Arithmetic Operators
Used for mathematical calculations.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `+`  | Addition | `5 + 3` | `8` |
| `-`  | Subtraction | `5 - 3` | `2` |
| `*`  | Multiplication | `5 * 3` | `15` |
| `/`  | Division | `5 / 2` | `2.5` |
| `%`  | Modulus (Remainder) | `5 % 2` | `1` |
| `**` | Exponentiation (Power) | `2 ** 3` | `8` |

## 2. Assignment Operators
Used to assign values to variables.

| Operator | Description | Example | Equivalent To |
|----------|------------|---------|---------------|
| `=`  | Assignment | `x = 10` | `x = 10` |
| `+=` | Add and assign | `x += 5` | `x = x + 5` |
| `-=` | Subtract and assign | `x -= 5` | `x = x - 5` |
| `*=` | Multiply and assign | `x *= 5` | `x = x * 5` |
| `/=` | Divide and assign | `x /= 5` | `x = x / 5` |
| `%=` | Modulus and assign | `x %= 5` | `x = x % 5` |
| `**=` | Exponentiation and assign | `x **= 3` | `x = x ** 3` |

## 3. Comparison Operators
Used to compare values and return `true` or `false`.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `==`  | Equal to (loose comparison) | `5 == "5"` | `true` |
| `===` | Strict equal (checks type too) | `5 === "5"` | `false` |
| `!=`  | Not equal | `5 != "5"` | `false` |
| `!==` | Strict not equal | `5 !== "5"` | `true` |
| `>`   | Greater than | `5 > 3` | `true` |
| `<`   | Less than | `5 < 3` | `false` |
| `>=`  | Greater than or equal | `5 >= 5` | `true` |
| `<=`  | Less than or equal | `5 <= 3` | `false` |

## 4. Logical Operators
Used for boolean logic.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `&&`  | Logical AND | `true && false` | `false` |
| `||`  | Logical OR | `true || false` | `true` |
| `!`   | Logical NOT | `!true` | `false` |

## 5. Bitwise Operators
Operate on binary representations of numbers.

| Operator | Description | Example (`5 & 3`) | Binary Operation | Result |
|----------|------------|------------------|----------------|--------|
| `&`  | AND | `5 & 3` | `101 & 011` | `1` |
| `|`  | OR | `5 | 3` | `101 | 011` | `7` |
| `^`  | XOR | `5 ^ 3` | `101 ^ 011` | `6` |
| `~`  | NOT | `~5` | `~(101)` | `-6` |
| `<<` | Left shift | `5 << 1` | `101 << 1` | `10` |
| `>>` | Right shift | `5 >> 1` | `101 >> 1` | `2` |
| `>>>` | Unsigned right shift | `-5 >>> 1` | Negative to positive shift | Large positive number |

## 6. Ternary Operator
A shorthand for `if...else`.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `? :` | Ternary (Conditional) | `let result = (5 > 3) ? "Yes" : "No";` | `"Yes"` |

## 7. Type Operators
Used to check or manipulate types.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `typeof` | Returns the type of a variable | `typeof 5` | `"number"` |
| `instanceof` | Checks if an object is an instance of a class | `arr instanceof Array` | `true` |

## 8. Spread and Rest Operators (`...`)
Used for expanding or collecting values.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `...` | Spread (expands arrays/objects) | `let arr = [1, 2, ...[3, 4]];` | `[1, 2, 3, 4]` |
| `...` | Rest (collects remaining elements) | `function sum(...nums) { return nums; }` | `[1, 2, 3]` |

## 9. Optional Chaining (`?.`)
Used to safely access properties.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `?.` | Optional chaining | `obj?.property` | `undefined` if `obj` is null or undefined |

## 10. Nullish Coalescing (`??`)
Returns the right-hand value only if the left-hand value is `null` or `undefined`.

| Operator | Description | Example | Result |
|----------|------------|---------|--------|
| `??` | Nullish coalescing | `null ?? "default"` | `"default"` |
| `??` | Nullish coalescing | `0 ?? "default"` | `0` |
