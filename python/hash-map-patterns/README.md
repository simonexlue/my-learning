# Hash Map Patterns

## Progress Log

### August 8, 2026

#### Topics Covered

- Dictionary / hash-map lookups
- Mapping values to indexes
- Complement lookup
- Two Sum pattern
- Using `enumerate()` with dictionaries
- O(1) average dictionary lookup
- Reducing O(n²) solutions to O(n)

#### Exercises Completed

- ✅ Two Sum

---

# Two Sum Pattern

Given:

```python id="w43d4m"
numbers = [2, 7, 11, 15]
target = 9
```

Instead of comparing every pair, calculate the value needed to reach the target:

```python id="07z6nj"
need = target - number
```

Then check whether that value has already been seen.

```python id="q4th1c"
def two_sum(numbers, target):
    seen = {}

    for index, number in enumerate(numbers):
        need = target - number

        if need in seen:
            return [seen[need], index]

        seen[number] = index

    return None
```

---

# Key Idea

The dictionary stores:

```text id="imrmbr"
value → index
```

Example:

```python id="0avlvr"
{
    2: 0,
    7: 1
}
```

This is different from a frequency map:

```text id="3ql1n4"
value → count
```

---

# Problem-Solving Pattern

For each number:

```text id="uxzljc"
1. Calculate what value is needed

   need = target - number

2. Check whether need was already seen

3. If yes:
   return both indexes

4. If no:
   store the current value and index
```

---

# Complexity

### Nested-loop approach

```text id="rx4ubg"
Time: O(n²)
Space: O(1)
```

### Hash-map approach

```text id="9byxf7"
Time: O(n)
Space: O(n)
```

Dictionary membership and lookup are typically **O(1)** average time.

---

# Key Takeaways

- Dictionaries can store more than frequency counts.
- A dictionary can map a value to its index.
- Look for a **complement** instead of searching every possible pair.
- `enumerate()` is useful when both the value and index are needed.
- Check the dictionary before storing the current value when the same value may appear twice.
- Hash maps can often replace nested searches and reduce O(n²) to O(n).

---

# Next

➡️ `python/two-pointers/`

Focus:

- `while` loops
- Left and right pointers
- Moving pointers based on conditions
- Searching sorted arrays
- Palindrome problems
- O(n) traversal with two pointers
