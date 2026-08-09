"""
------------------------------------- Question 1 ------------------------------------------

Write function two_sum(numbers, target)

Given:

numbers = [2, 7, 11, 15]
target = 9

Return:
[0, 1]

Because:
numbers[0] + numbers[1] == 9


Given:

numbers = [3, 2, 4]
target = 6

Return:
[1, 2]


Given:

numbers = [3, 3]
target = 6

Return:
[0, 1]


If no pair exists:

Return:
None


Requirements:

- Do NOT use nested loops.
- Aim for O(n).
- Return the indexes, not the numbers.
"""

def two_sum(numbers, target):
    index_array = []
    seen = {}

    # Loop through numbers and add to seen dictionary with the value as the index
    # target - current number is the value that we need -> check dictionary for this value
    # if value is in the dictionary -> we have the two numbers and indexes we need
    # if value is not in the dictionary -> we move on to the next number

    for index, number in enumerate(numbers):
        need = target - number

        if need in seen:
            index_array.append(seen.get(need))
            index_array.append(index)

            return index_array

        seen[number] = index

    if len(index_array) < 2:
        return None
    

print(two_sum([2, 7, 11, 15], 9))
print(two_sum([3, 2, 4], 6))
print(two_sum([3, 3], 6))
print(two_sum([3, 3], 7))
