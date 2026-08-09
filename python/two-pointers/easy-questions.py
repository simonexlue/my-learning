"""
------------------------------------- Question 1 ------------------------------------------
Write function reverse_list(numbers)

Given:
[1, 2, 3, 4, 5]

Return:
[5, 4, 3, 2, 1]

Requirements:
- Use two pointers
- Use a while loop
- Do NOT create a second list
- Modify the original list
"""

def reverse_list(numbers):
    left = 0
    right = len(numbers) - 1

    # while left < right switch left and right

    while left < right:
        numbers[left], numbers[right] = numbers[right], numbers[left]
        left += 1
        right -= 1

    return numbers

print(reverse_list([1, 2, 3, 4, 5]))


"""
------------------------------------- Question 2 ------------------------------------------
Write function is_palindrome(word)

Given:
"racecar"

Return:
True

Given:
"hello"

Return:
False

Requirements:
- Use two pointers
- Use a while loop
- Ignore uppercase/lowercase
- Do NOT reverse the string
"""

def is_palindrome(word):
    left = 0
    right = len(word) -1

    while left < right:
        if not word[left].lower() == word[right].lower():
            return False

        left += 1
        right -= 1

    return True

print(is_palindrome("racecar"))
print(is_palindrome("Racecar"))
print(is_palindrome("hello"))


"""
------------------------------------- Question 3 ------------------------------------------

Write function has_pair_sum(numbers, target)

The input list is SORTED.

Given:
numbers = [1, 2, 4, 6, 8, 9]
target = 10

Return:
True

Because:
1 + 9 = 10


Given:
numbers = [1, 2, 4, 6, 8, 9]
target = 20

Return:
False


Requirements:
- Use two pointers
- Use a while loop
- Do NOT use a dictionary or set
- Do NOT use nested loops
"""

def has_pair_sum(numbers, target): 
    # while left < right
    # find a pair that matches target
    # move left pointer up if current value is < target
    # move right pointer down if current value is > target
    # if target is > the value at side by side index, return False

    left = 0
    right = len(numbers) - 1

    while left < right:
        if numbers[left] + numbers[right] == target:
            return True
        elif numbers[left] + numbers[right] < target:
            left += 1
        elif numbers[left] + numbers[right] > target:
            right -= 1

    return False

print(has_pair_sum([1, 2, 4, 6, 8, 9], 10))
print(has_pair_sum([1, 2, 4, 6, 8, 9], 20))
print(has_pair_sum([1, 2, 4, 6, 8, 9], 12))


"""
------------------------------------- Question 4 ------------------------------------------
Write function remove_duplicates_sorted(numbers)

The input list is SORTED.

Given: [1, 1, 2, 2, 2, 3, 4, 4]
Return: [1, 2, 3, 4]

Given: [5, 5, 5, 5]
Return:[5]

Given:[]
Return:[]

Requirements:
- Use two pointers
- Use a while loop
- Do NOT use set()
- Do NOT create a second list
- Modify the original list
"""

def remove_duplicates_sorted(numbers): 
    if len(numbers) < 2:
        return numbers


    left = 0
    right = 1

    while right < len(numbers):
        if numbers[left] != numbers[right]:
            left +=1
            numbers[left] = numbers[right]
        
        right +=1 

    del numbers[left + 1:]

    return numbers

print(remove_duplicates_sorted([1, 1, 2, 2, 2, 3, 4, 4]))
print(remove_duplicates_sorted([5, 5, 5, 5]))
print(remove_duplicates_sorted([]))


"""
------------------------------------- Question 5 ------------------------------------------

Write function move_zeros(numbers)

Move all zeros to the END of the list while preserving
the order of the non-zero numbers.

Given: [0, 1, 0, 3, 12]
Return: [1, 3, 12, 0, 0]

Given: [0, 0, 1]
Return: [1, 0, 0]

Given: [1, 2, 3]
Return: [1, 2, 3]

Given:[]
Return:[]

Requirements:

- Use two pointers
- Modify the original list
- Do NOT create another list
- Do NOT use sorted()
- Aim for O(n)
"""

def move_zeroes(numbers):
    # Set left and right pointers at the beginning (ie. 0 and 1)
    # if 0 is on the left, and right is non-0, swap the two values -> move pointers up
    # if both values are 0, move right pointer only, until a non-zero is met -> swap the two values -> move left pointer up

    left = 0
    right = 1

    while right < len(numbers):
        if numbers[left] != 0 and numbers[right] != 0:
            left +=1 
            right +=1 
        elif numbers[left] == 0 and numbers[right] != 0:
            numbers[left], numbers[right] = numbers[right], numbers[left]
            left += 1
            right += 1
        elif numbers[left] == 0 and numbers[right] == 0:
            right +=1
        else:
            left +=1 
            right +=1
    return numbers

print(move_zeroes([0, 1, 0, 3, 12]))
print(move_zeroes([0, 0, 1]))
print(move_zeroes([1, 2, 3]))
print(move_zeroes([]))
        