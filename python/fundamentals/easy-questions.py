"""
------------------------------------- Question 1 ------------------------------------------

Write function get_positive_numbers(numbers)

Given:
[-3, 5, -1, 8, 0, 12, -4]

Return:
[5, 8, 12]
"""

def get_positive_numbers(numbers):
    # Given an array of negative and positive numbers -> Return an array of only positive numbers
    # Postive numbers = number > 0
    # In the provided definition above, 0 is not included in the returned list, making it a non-positive number
    positive_numbers = []

    for number in numbers:
        if number > 0:
            positive_numbers.append(number)

    return positive_numbers

print(get_positive_numbers([-3, 5, -1, 8, 0, 12, -4]))


"""
------------------------------------- Question 2 ------------------------------------------

Write function calculate_sum(numbers)

Given:
[10, 20, 30, 40]

Return:
100

Do not use sum()
"""

def calculate_sum(numbers): 
    # Have a sum variable to hold the accumulation
    # Loop through numbers array and add to the sum 

    sum = 0

    for number in numbers:
        sum += number

    return sum

print(calculate_sum([10, 20, 30, 40]))


"""
------------------------------------- Question 3 ------------------------------------------

Write function count_evens(numbers)

Given:
[1, 2, 4, 7, 8, 11, 12]

Return:
4
"""

def count_evens(numbers):
    # Count the number of even numbers and hold the count in a variable 
    # Even numbers are numbers % 2 = 0
    # Increment count and not add as a total
    
    count = 0

    for number in numbers:
        if number % 2 == 0:
            count += 1

    return count

print(count_evens([1, 2, 4, 7, 8, 11, 12]))


"""
------------------------------------- Question 4 ------------------------------------------

Write function find_smallest(numbers)
- Do not use min()

Given:
[8, 3, 15, -2, 7]

Return:
-2
"""

def find_smallest(numbers):
    # Smallest number can include negative numbers
    # Hold the current smallest number in a variable
    # Replace the variable every encounter of a smaller number

    current_smallest = numbers[0]

    for number in numbers:
        if number < current_smallest:
            current_smallest = number

    return current_smallest

print(find_smallest([8, 3, 15, -2, 7]))


"""
------------------------------------- Question 5 ------------------------------------------

Write function double_numbers(numbers)

Given:
[1, 2, 3, 4]

Return:
[2, 4, 6, 8]
"""

def double_numbers(numbers):
    # Double each number in the array 
    # Create empty array and double the number and add to the new array

    doubles = []

    for number in numbers:
        doubles.append(number * 2)

    return doubles

print(double_numbers([1, 2, 3, 4]))


"""
------------------------------------- Question 6 ------------------------------------------

Write function count_value(numbers, target)
- Do not use .count()

Given:
numbers = [1, 3, 3, 5, 3, 7]
target = 3

Return:
3
"""

def count_value(numbers, target): 
    # Go through array and count the number of times target appears

    count = 0

    for number in numbers:
        if number == target:
            count += 1

    return count

print(count_value([1, 3, 3, 5, 3, 7], 3))


"""
------------------------------------- Question 7 ------------------------------------------

Write function get_long_words(words)

Given:
["cat", "elephant", "dog", "giraffe", "hi"]

Return words with MORE THAN 5 characters.

Return:
["elephant", "giraffe"]
"""

def get_long_words(words):
    # Append any words with more than 5 characters into a new array
    
    long_words = []

    for word in words:
        if len(word) > 5:
            long_words.append(word)

    return long_words

print(get_long_words(["cat", "elephant", "dog", "giraffe", "hi"]))


"""
------------------------------------- Question 8 ------------------------------------------

Write function find_first_negative(numbers)

Given:
[4, 7, 2, -5, -8, 10]

Return:
-5

If there are no negative numbers:
Return None
"""

def find_first_negative(numbers):
    # Return the first negative number encountered -> do not need to go through the rest of the list
    # Return None if no negative numbers encountered

    for number in numbers:
        if number < 0: 
            return number   

    return None           

print(find_first_negative([4, 7, 2, -5, -8, 10]))


"""
------------------------------------- Question 9 ------------------------------------------

Write function values_at_even_indexes(numbers)

Given:
[10, 20, 30, 40, 50, 60]

Return:
[10, 30, 50]
"""

def values_at_even_indexes(numbers):
    # Store the values of the numbers at even indexes in a new array

    even_indexes = []

    for index in range(len(numbers)):
        if index % 2 == 0:
            even_indexes.append(numbers[index])

    return even_indexes

print(values_at_even_indexes([10, 20, 30, 40, 50, 60]))


"""
------------------------------------- Question 10 ------------------------------------------

Write function count_letters(word)
- Don't use .get()

Given:
"banana"

Return:
{
    "b": 1,
    "a": 3,
    "n": 2
}
"""

def count_letters(word):
    # Loop through each character in the word
    # Check to see if the character is already in the dictionary

    letters = {}

    for letter in word:
        if letter not in letters:
            letters[letter] = 1
        else:
            letters[letter] += 1

    return letters

print(count_letters("banana"))


"""
------------------------------------- Question 11 ------------------------------------------

Write function count_letters_v2(word)

Given:
"banana"

Return:
{
    "b": 1,
    "a": 3,
    "n": 2
}

REQUIREMENT:
Use dict.get()
"""

def count_letters_v2(word):
    counts = {}

    for letter in word:
        counts[letter] = counts.get(letter, 0) + 1

    return counts

print(count_letters_v2("banana"))


"""
------------------------------------- Question 12 ------------------------------------------

Write function remove_duplicates(numbers)
- Do not use set

Given:
[1, 2, 2, 3, 1, 4, 3]

Return:
[1, 2, 3, 4]

Preserve the original order.
"""

def remove_duplicates(numbers):
    # Have a dictionary track if the number has been seen yet
    # If it has not been seen, add to new array and change seen status in dictionary
    # Do nothing if already seen

    seen = {}
    no_duplicates = []

    for number in numbers:
        if number not in seen:
            seen[number] = True
            no_duplicates.append(number)

    return no_duplicates

print(remove_duplicates([1, 2, 2, 3, 1, 4, 3]))


"""
------------------------------------- Question 13 ------------------------------------------

Write function is_palindrome(word)

Given:
"racecar"

Return:
True

Given:
"hello"

Return:
False
"""

def is_palindrome(word):
    # Turn word to lowercase
    # Store the reverse word in a string variable
    # Compare the two strings and return True or False

    reverse_word = ""

    for index in range(len(word) - 1, -1, -1):
        reverse_word += word[index]

    if reverse_word.lower() == word.lower(): 
        return True
    else: 
        return False

print(is_palindrome("Racecar"))
print(is_palindrome("hello"))


"""
------------------------------------- Question 14 ------------------------------------------

Write function fizz_buzz(n)

Loop from 1 through n.

If divisible by 3:
"Fizz"

If divisible by 5:
"Buzz"

If divisible by BOTH:
"FizzBuzz"

Otherwise:
the number

Example:
fizz_buzz(5)

Return:
[1, 2, "Fizz", 4, "Buzz"]
"""

def fizz_buzz(n):
    fizz_buzz_array = []

    for number in range(1, n+1, 1):
        if number % 3 == 0 and number % 5 == 0:
            fizz_buzz_array.append("FizzBuzz")
        elif number % 3 == 0:
            fizz_buzz_array.append("Fizz")
        elif number % 5 == 0: 
            fizz_buzz_array.append("Buzz")
        else:
            fizz_buzz_array.append(number)

    return fizz_buzz_array

print(fizz_buzz(5))


"""
------------------------------------- Question 15 ------------------------------------------

Write function get_score(scores, name)

Given:
scores = {
    "Alice": 90,
    "Bob": 82,
    "Charlie": 95
}

get_score(scores, "Bob")
Return: 82

get_score(scores, "David")
Return: None
"""
def get_score(scores, name):
    # Search scores dictionary for the name (key) and return the value

    if name not in scores:
        return None

    return scores.get(name)

print(get_score({
    "Alice": 90,
    "Bob": 82,
    "Charlie": 95
}, "Bob"))