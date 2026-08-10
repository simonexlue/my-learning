"""
------------------------------------- Question 1 ------------------------------------------
Write function max_window_sum(numbers, k)

Given: numbers = [2, 1, 5, 1, 3, 2] k = 3
Return: 9
Because: [5, 1, 3] = 9

Given: numbers = [1, 2, 3, 4] k = 2
Return: 7

Requirements:
- Do NOT use nested loops
- Aim for O(n)
- Use a sliding window
"""

def max_window_sum(numbers, k):
    window_sum = sum(numbers[:k])
    max_sum = window_sum

    for index in range(k, len(numbers)):
        window_sum += numbers[index]
        window_sum -= numbers[index - k]

        if window_sum > max_sum:
            max_sum = window_sum
    return max_sum

print(max_window_sum([2, 1, 5, 1, 3, 2], 3))
print(max_window_sum([1, 2, 3, 4], 2))
    
"""
------------------------------------- Question 2 ------------------------------------------
Write function max_average(numbers, k)

Given:
numbers = [1, 12, -5, -6, 50, 3]
k = 4

Return:
12.75

Requirements:
- Use sliding window
- Do NOT recalculate every group from scratch
"""

def max_average(numbers, k):
    window_sum = sum(numbers[:k])
    max_average = window_sum / k

    for index in range(k, len(numbers)):
        window_sum += numbers[index]
        window_sum -= numbers[index -k]
        if window_sum / k > max_average:
            max_average = window_sum / k

    return max_average

print(max_average([1, 12, -5, -6, 50, 3], 4))

