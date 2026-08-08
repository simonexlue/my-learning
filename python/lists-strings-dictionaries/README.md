# Lists, Strings & Dictionaries

## Progress Log

### August 7, 2026

#### Topics Covered

- List iteration and indexing
- `enumerate()`
- List building with `.append()`
- String slicing
- String reversal
- `.lower()`
- `.split()`
- Dictionaries / hash maps
- Dictionary membership
- `dict.get()`
- Frequency maps
- Sets
- Set membership
- Duplicate detection
- Sorting with `sorted()`
- Negative indexing
- Basic edge-case handling

#### Exercises Completed

- ✅ JavaScript → Python translation
- ✅ List traversal
- ✅ Index + value traversal
- ✅ Finding minimum/maximum values
- ✅ Frequency counting
- ✅ Duplicate detection
- ✅ Palindrome checking
- ✅ Word counting
- ✅ Finding second-largest values
- ✅ Character-frequency comparison
- ✅ Grouping/counting dictionary data

---

# Key Syntax

## Lists

```python id="r1ypo4"
result = []

for number in numbers:
    result.append(number)
```

---

## Index + Value with `enumerate()`

```python id="is5mh4"
for index, value in enumerate(numbers):
    print(index, value)
```

Use `enumerate()` when both the **index and value** are needed.

---

## String Operations

```python id="y1bd7f"
word.lower()
word.upper()

sentence.split()

word[::-1]
```

Slicing:

```python id="nj28fy"
items[start:end]
```

The start is included and the end is excluded.

---

## Dictionaries

Create a dictionary:

```python id="dcrv0w"
counts = {}
```

Check membership:

```python id="gg3ys3"
if item in counts:
    ...
```

Access a value:

```python id="5ic0wm"
counts[item]
```

Use a default value:

```python id="26u9jc"
counts.get(item, 0)
```

---

# Frequency Map Pattern

One of the most important patterns for coding assessments:

```python id="znqopk"
counts = {}

for item in items:
    counts[item] = counts.get(item, 0) + 1
```

Example:

```python id="d9z8u8"
["a", "b", "a", "c", "a"]
```

becomes:

```python id="ojb6fq"
{
    "a": 3,
    "b": 1,
    "c": 1
}
```

---

# Sets

Use a set when you care about whether a value has already been seen but do not need to store additional information about it.

```python id="aox6ri"
seen = set()

for number in numbers:
    if number in seen:
        return True

    seen.add(number)

return False
```

### Set vs Dictionary

Use a **set** for:

> Have I seen this value?

Use a **dictionary** for:

> What information do I know about this value?

Examples:

```python id="w8hfb4"
# Set
seen = {1, 2, 3}

# Dictionary
counts = {
    1: 3,
    2: 5,
    3: 1
}
```

---

# Sorting

```python id="ycvx86"
sorted_numbers = sorted(numbers)
```

`sorted()` returns a new sorted collection.

Negative indexes access values from the end:

```python id="ep1d1i"
numbers[-1]  # last
numbers[-2]  # second last
```

---

# Important Patterns

## Search and Return

```python id="a5hn6m"
for item in items:
    if condition:
        return item

return None
```

Do not return the failure result until the entire collection has been searched.

---

## Duplicate Detection

```python id="78pmyx"
seen = set()

for item in items:
    if item in seen:
        # duplicate found
        ...

    seen.add(item)
```

Set membership is typically **O(1)**.

---

## Frequency Counting

```python id="fbw4gg"
counts[item] = counts.get(item, 0) + 1
```

This pattern is useful for:

- Counting occurrences
- Comparing strings
- Finding the most frequent value
- Grouping data
- Detecting duplicates

---

# Edge Cases

Before considering a solution finished, check inputs such as:

```text id="ubdsjq"
[]
[5]
[5, 5, 5]
[-5, -2, -10]
[0]
```

Also consider:

- Duplicate values
- Missing targets
- Uppercase/lowercase
- Already sorted input
- Reverse-sorted input
- Negative numbers
- Off-by-one indexing errors

---

# Complexity Basics

| Operation             | Typical Complexity |
| --------------------- | -----------------: |
| List traversal        |               O(n) |
| Dictionary lookup     |       O(1) average |
| Set lookup            |       O(1) average |
| Sorting               |         O(n log n) |
| Nested full traversal |              O(n²) |

Prefer dictionary/set lookups over repeatedly searching through a list when possible.

---

# Key Takeaways

- Use `enumerate()` when both index and value are needed.
- Use dictionaries when values need associated information.
- Use sets when only membership matters.
- Frequency maps are a core coding-assessment pattern.
- `dict.get(key, 0)` simplifies counting.
- `return` immediately ends a function.
- Python slicing can simplify common string/list operations.
- Correct solutions must account for hidden edge cases, not just the example input.

---
