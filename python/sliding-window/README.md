# Sliding Window

## Progress Log

### August 9, 2026

#### Topics Covered

- Fixed-size sliding windows
- Running sums
- Adding incoming values
- Removing outgoing values
- Tracking maximum window values
- Avoiding repeated calculations

#### Exercises Completed

- ✅ Maximum window sum
- ✅ Maximum window average

---

# Fixed-Size Sliding Window

Use sliding window when working with consecutive groups of a fixed size.

```python id="uy27rm"
window_sum = sum(numbers[:k])
max_sum = window_sum

for index in range(k, len(numbers)):
    window_sum += numbers[index]
    window_sum -= numbers[index - k]

    if window_sum > max_sum:
        max_sum = window_sum
```

Each move:

```text id="6rc33m"
+ incoming value
- outgoing value
```

Important indexes:

```python id="ugy2h7"
numbers[index]       # incoming
numbers[index - k]   # outgoing
```

---

# Complexity

Sliding window usually reduces repeated calculations to:

```text id="p9yrfb"
Time: O(n)
```

instead of recalculating every window.

---

# Key Takeaways

- Calculate the first window once.
- Keep a running value for the current window.
- Add the incoming value.
- Remove the outgoing value.
- Track the best result seen so far.
- Fixed-size windows often use `index - k` to locate the outgoing value.

---

# Next

➡️ `python/matrices/`

Focus:

- 2D lists
- Rows and columns
- Nested traversal
- Accessing matrix values
