"""
------------------------------------- Question 1 ------------------------------------------
Write function find_target_index(numbers, target)

Return the INDEX of the first occurrence of target.

Given:
numbers = [10, 25, 30, 25, 50]
target = 25

Return:
1

If target does not exist:
Return None

REQUIREMENT:
Use enumerate()
"""

def find_target_index(numbers, target):
    for index, number in enumerate(numbers):
        if number == target:
            return index
    return None

print(find_target_index([10, 25, 30, 25, 50], 25))


"""
------------------------------------- Question 2 ------------------------------------------
Write function largest_even(numbers)

Given:
[3, 8, 12, 5, 7, 10]

Return:
12

Given:
[1, 3, 5]

Return:
None

Do not use max().
"""

def largest_even(numbers):
    # Find even numbers first
    # Find largest out of the even numbers 
    # If no even numbers, return None

    even_numbers = []

    for number in numbers:
        if number % 2 == 0:
            even_numbers.append(number)

    if len(even_numbers) == 0:
        return None

    current_biggest = even_numbers[0]

    for number in even_numbers:
        if number > current_biggest:
            current_biggest = number

    return current_biggest

print(largest_even([3, 8, 12, 5, 7, 10]))
print(largest_even([1, 3, 5]))
print(largest_even([1, -6, -4]))


"""
------------------------------------- Question 3 ------------------------------------------
Write function most_frequent(numbers)

Given:
[1, 3, 1, 3, 2, 1]

Return:
1

If two numbers have the same frequency,
return whichever appeared first.

Use a dictionary.
"""

def most_frequent(numbers):
    # Count the appearances of each number in numbers
    # Return the number with the most appearances

    counts = {}

    for number in numbers:
        counts[number] = counts.get(number, 0) + 1

    current_highest_count = 0
    most_frequent_number = None

    for count in counts:
        if counts[count] > current_highest_count:
            current_highest_count = counts[count]
            most_frequent_number = count

    return most_frequent_number

print(most_frequent([1, 3, 3, 3, 2, 1]))


"""
------------------------------------- Question 4 ------------------------------------------
Write function find_duplicates(numbers)

Given:
[1, 2, 3, 2, 4, 1, 5]

Return:
[2, 1]

Each duplicate should appear ONLY ONCE
and preserve the order in which it first became a duplicate.

Given:
[1, 1, 1, 1]

Return:
[1]
"""

def find_duplicates(numbers):
    # Return an array of duplicate numbers that appear in numbers
    # Use a set to track numbers we've already seen

    duplicate_numbers = []
    seen = set()

    for number in numbers:
        if number not in seen:
            seen.add(number)
        else:
            if number not in duplicate_numbers:
                duplicate_numbers.append(number)
    return duplicate_numbers

print(find_duplicates([1, 1, 1, 1]))
print(find_duplicates([1, 2, 3, 2, 4, 1, 5]))


"""
------------------------------------- Question 5 ------------------------------------------
Write function is_palindrome(word)

Ignore uppercase/lowercase.

Given:
"RaceCar"

Return:
True

Given:
"Python"

Return:
False

REQUIREMENT:
Use Python slicing.
"""

def is_palindrome(word):
    reverse_word = word[::-1].lower()

    if reverse_word == word.lower():
        return True
    else:
        return False

print(is_palindrome("Racecar"))


"""
------------------------------------- Question 6 ------------------------------------------
Write function count_words(sentence)

Given:
"python is fun and python is fast"

Return:
{
    "python": 2,
    "is": 2,
    "fun": 1,
    "and": 1,
    "fast": 1
}

Use split() and a dictionary.
"""

def count_words(sentence):
    count = {}
    split_sentence = sentence.split(" ")

    for word in split_sentence:
        count[word] = count.get(word, 0) + 1

    return count

print(count_words("python is fun and python is fast"))


"""
------------------------------------- Question 7 ------------------------------------------
Write function contains_duplicate(numbers)

Given:
[1, 2, 3, 4]

Return:
False

Given:
[1, 2, 3, 2]

Return:
True

Try to return immediately once you know the answer.
"""

def contains_duplicate(numbers):
    seen = set()

    for number in numbers:
        if number not in seen:
            seen.add(number)
        else:
            return True
    return False

print(contains_duplicate([1, 2, 3, 4]))
print(contains_duplicate([1, 2, 3, 2]))


"""
------------------------------------- Question 8 ------------------------------------------
Write function second_largest(numbers)

Given:
[10, 5, 8, 10, 3]

Return:
8

Duplicates DO NOT count.

Given:
[5, 5, 5]

Return:
None

Can use:
set()
sorted()
"""

def second_largest(numbers):
    # Loop through numbers and add each number to the set if its not already in the set -> unique list of numbers
    # Sort the set of numbers
    # Second last index of the numbers will be the second highest

    seen = set()
    unique_numbers = []

    for number in numbers:
        if number not in seen:
            seen.add(number)

    for number in seen:
        unique_numbers.append(number)

    if len(unique_numbers) < 2:
        return None

    return sorted(unique_numbers)[len(unique_numbers) -2]

print(second_largest([10, 5, 8, 10, 3]))
print(second_largest([5, 5, 5]))


"""
------------------------------------- Question 9 ------------------------------------------
Write function same_character_counts(word1, word2)

Return True if both strings contain
exactly the same characters the same number of times.

Given:
"listen"
"silent"

Return:
True

Given:
"hello"
"world"

Return:
False

Ignore uppercase/lowercase.
"""

def same_character_count(word1, word2):
    word1_counts = {}
    word2_counts = {}

    for letter in word1.lower():
        word1_counts[letter] = word1_counts.get(letter, 0) + 1

    for letter in word2.lower():
        word2_counts[letter] = word2_counts.get(letter, 0) + 1

    if word1_counts == word2_counts:
        return True
    else: 
        return False

print(same_character_count("LISTEN", "silent"))
print(same_character_count("hello", "silent"))


"""
------------------------------------- Question 10 ------------------------------------------
Write function count_by_department(employees)

Given:

employees = [
    {"name": "Alice", "department": "Engineering"},
    {"name": "Bob", "department": "Marketing"},
    {"name": "Charlie", "department": "Engineering"},
    {"name": "David", "department": "HR"},
    {"name": "Emma", "department": "Engineering"},
]

Return:

{
    "Engineering": 3,
    "Marketing": 1,
    "HR": 1
}
"""

def count_by_department(employees):
    # New map to group departments
    # Loop through employees and add departmentment to map if not already there

    departments = {}

    for employee in employees:
        departments[employee["department"]] = departments.get(employee["department"], 0) + 1

    return departments

print(count_by_department([
    {"name": "Alice", "department": "Engineering"},
    {"name": "Bob", "department": "Marketing"},
    {"name": "Charlie", "department": "Engineering"},
    {"name": "David", "department": "HR"},
    {"name": "Emma", "department": "Engineering"},
]))