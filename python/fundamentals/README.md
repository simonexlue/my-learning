# Python Fundamentals

## Progress Log

### August 7, 2026

#### Topics Covered

- Functions with `def`
- `return`
- Variables
- `if` / `elif` / `else`
- `for` loops
- `range()`
- `len()`
- List indexing
- `.append()`
- Dictionaries
- Dictionary membership with `in` / `not in`
- `dict.get()`
- Basic frequency maps
- String iteration
- Boolean values (`True` / `False`)
- `None`

#### Exercises Completed

- ✅ Python Diagnostic
- ✅ Fundamentals — Easy Questions (1–15)

---

## Key Syntax

### Functions

```python
def calculate(number):
    return number * 2
```

### Conditions

```python
if number > 10:
    return "large"
elif number > 5:
    return "medium"
else:
    return "small"
```

### Loop Through Values

```python
for number in numbers:
    print(number)
```

### Loop Through Indexes

```python
for index in range(len(numbers)):
    print(numbers[index])
```

### Lists

```python
numbers = []

numbers.append(5)
```

JavaScript equivalent:

```js
numbers.push(5);
```

### Dictionaries

```python
counts = {}

if item not in counts:
    counts[item] = 1
else:
    counts[item] += 1
```

Common frequency-map shortcut:

```python
counts[item] = counts.get(item, 0) + 1
```

`dict.get(key, default)` returns the existing value or the provided default if the key does not exist.

---

## Important Patterns

### Search and Return

When searching through a collection, only return the failure result **after the loop finishes**.

```python
def find_negative(numbers):
    for number in numbers:
        if number < 0:
            return number

    return None
```

Putting `return None` inside the loop would stop the search after the first non-matching item.

### Index Traversal

```python
for index in range(len(numbers)):
    print(numbers[index])
```

`range(len(numbers))` already produces every valid index from `0` through `len(numbers) - 1`.

### Reverse Index Traversal

```python
for index in range(len(word) - 1, -1, -1):
    print(word[index])
```

### Frequency Counting

```python
counts = {}

for item in items:
    counts[item] = counts.get(item, 0) + 1
```

This pattern is especially important for coding assessments.

---

## JavaScript → Python

| JavaScript             | Python                |
| ---------------------- | --------------------- |
| `function test() {}`   | `def test():`         |
| `true` / `false`       | `True` / `False`      |
| `null`                 | `None`                |
| `array.push(x)`        | `list.append(x)`      |
| `array.length`         | `len(list)`           |
| `for (const x of arr)` | `for x in arr:`       |
| `obj[key]`             | `dict[key]`           |
| `if (!obj[key])`       | `if key not in dict:` |
| `&&`                   | `and`                 |
| `\|\|`                 | `or`                  |
| `!condition`           | `not condition`       |

---

## Key Takeaways

- Python uses **indentation instead of `{}`** to define blocks.
- `return` immediately ends the entire function, even when used inside a loop.
- Use `.append()` instead of JavaScript's `.push()`.
- Use `range(len(items))` when indexes are required.
- Dictionaries provide fast key lookups and are important for coding challenges.
- `counts[item] = counts.get(item, 0) + 1` is the standard frequency-counting pattern.
- Initialize min/max searches from actual input data rather than assuming values such as `0`.
- Always consider whether hidden test cases expose indexing or boundary errors.

---

## Assessment Focus

The goal of this section was not to learn all of Python, but to become comfortable enough with Python syntax to translate existing JavaScript problem-solving skills into working Python code.

### Next

➡️ `python/lists-strings-dictionaries/`

Focus:

- Python list operations
- String manipulation
- Dictionaries / hash maps
- Sets
- Sorting
- Slicing
- `enumerate()`
- JavaScript → Python problem translation
