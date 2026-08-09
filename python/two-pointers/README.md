# Two Pointers

## Progress Log

### August 8, 2026

#### Topics Covered

- `while` loops
- Left and right pointers
- Opposite-end pointer traversal
- Same-direction pointer traversal
- Scanner + writer pattern
- In-place list modification
- Pair-sum problems on sorted arrays
- Palindrome checking
- Removing duplicates from sorted arrays
- Moving zeroes in-place

#### Exercises Completed

- ✅ Reverse list in-place
- ✅ Palindrome with two pointers
- ✅ Pair sum in sorted array
- ✅ Remove duplicates from sorted array
- ✅ Move zeroes

---

# Core Patterns

## Opposite-End Pointers

Useful when comparing or combining values from both ends.

```python
left = 0
right = len(numbers) - 1

while left < right:
    # inspect numbers[left] and numbers[right]

    left += 1
    right -= 1
```

Common uses:

- Palindromes
- Reversing arrays
- Pair sum in sorted arrays

---

## Pair Sum in Sorted Array

```python
def has_pair_sum(numbers, target):
    left = 0
    right = len(numbers) - 1

    while left < right:
        current_sum = numbers[left] + numbers[right]

        if current_sum == target:
            return True
        elif current_sum < target:
            left += 1
        else:
            right -= 1

    return False
```

Because the list is sorted:

- Sum too small → move `left` right
- Sum too large → move `right` left

---

## Scanner + Writer

Both pointers move in the same direction.

```text
right → scans values
left  → tracks where valid values should be written
```

Useful for:

- Removing duplicates
- Moving zeroes
- Compacting arrays
- In-place filtering

---

## Swapping Values

Python allows direct swapping:

```python
numbers[left], numbers[right] = numbers[right], numbers[left]
```

---

# Complexity

Typical two-pointer solutions:

```text
Time:  O(n)
Space: O(1)
```

They often replace:

```text
O(n²)
```

nested-loop approaches.

---

# Key Takeaways

- Use two pointers when one traversal can eliminate multiple possibilities.
- Sorted arrays often make two-pointer solutions possible.
- `while left < right` is common for opposite-end traversal.
- Scanner + writer is useful for modifying arrays in-place.
- Avoid removing elements while traversing if it causes indexes to shift.
- Keep pointer roles clear: know exactly what `left` and `right` represent.
- Move scanning pointers consistently to avoid infinite loops.

---

# Common Mistakes

- Forgetting to move a pointer inside a `while` loop.
- Using `len(numbers) - 1` as a stopping condition incorrectly.
- Removing items while actively traversing the same list.
- Moving both pointers when only one should move.
- Losing track of what each pointer represents.

---

# Next

➡️ `python/stacks/`

Focus:

- Stack behavior
- `append()` and `pop()`
- Last-In, First-Out
- Matching brackets
- Undo/reverse-style problems
