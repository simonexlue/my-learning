# Stacks

## Progress Log

### August 9, 2026

#### Topics Covered

- Stack data structure
- Last-In, First-Out (LIFO)
- Using Python lists as stacks
- `.append()` to push values
- `.pop()` to remove values
- Checking whether a stack is empty
- Matching parentheses with a stack

#### Exercises Completed

- ✅ Reverse a list using a stack
- ✅ Valid parentheses

---

# Stack Basics

A stack follows:

```text
Last In, First Out
```

Python lists can act as stacks:

```python id="gby2r8"
stack = []

stack.append("A")
stack.append("B")
stack.append("C")

stack.pop()  # "C"
stack.pop()  # "B"
stack.pop()  # "A"
```

---

# Common Stack Pattern

```python id="d2xve8"
stack = []

for item in items:
    if opening_condition:
        stack.append(item)
    else:
        if len(stack) == 0:
            return False

        stack.pop()
```

At the end, check whether anything remains:

```python id="3w73bi"
return len(stack) == 0
```

---

# Valid Parentheses Pattern

Opening parentheses are stored until a closing parenthesis matches them.

```text
"(())"

( → ["("]
( → ["(", "("]
) → ["("]
) → []

Valid
```

If a closing parenthesis appears while the stack is empty, the input is invalid.

---

# Complexity

Typical stack traversal:

```text
Time:  O(n)
Space: O(n)
```

`append()` and `pop()` from the end of a Python list are typically O(1).

---

# Key Takeaways

- Stack = Last-In, First-Out.
- Use `.append()` to push.
- Use `.pop()` to remove the most recently added value.
- Never `.pop()` an empty stack.
- Stacks are useful when later values need to match or interact with earlier values.
- Parentheses/bracket problems are a common stack pattern.

---

# Next

➡️ `python/sliding-window/`

Focus:

- Fixed-size windows
- Running sums
- Adding incoming values
- Removing outgoing values
- Avoiding repeated calculations
