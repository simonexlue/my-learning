"""
================================================================================
                 CODING ASSESSMENT REVIEW — 4 PROBLEMS
================================================================================

These exercises are original practice problems based on the programming
concepts encountered in a previous coding assessment.

Try to solve each problem without looking up a solution.
"""


# ==============================================================================
# QUESTION 1 — REVERSE ACCESS CODE
# ==============================================================================

"""
A legacy system stores access codes as integers.

Write a function:

    reverse_code(number)

The function should reverse the digits of the integer.

Rules:

1. Reverse the order of the digits.
2. If the original number is negative, the result must remain negative.
3. Zeroes that become leading zeroes after reversing should disappear.

Examples:

    reverse_code(12345)
    Return: 54321

    reverse_code(-482)
    Return: -284

    reverse_code(1200)
    Return: 21

    reverse_code(-4500)
    Return: -54

    reverse_code(7)
    Return: 7

    reverse_code(0)
    Return: 0
"""


def reverse_code(number):
    if number == 0:
        return 0

    number_str = str(number)

    sign = ""

    if number_str[0] == "-":
        sign = "-"

    number_str = str(abs(number))[::-1]

    return int(sign + number_str.lstrip("0"))


print(reverse_code(12345))
print(reverse_code(-482))
print(reverse_code(1200))
print(reverse_code(-4500))
print(reverse_code(7))
print(reverse_code(0))


# ==============================================================================
# QUESTION 2 — VOWEL CIPHER
# ==============================================================================

"""
A simple cipher transforms a word using TWO rules.

Rule 1:
Replace every vowel with the next vowel in this cycle:

    a -> e
    e -> i
    i -> o
    o -> u
    u -> a

Consonants remain unchanged.

Rule 2:
Reverse the resulting word.

Write:

    encode_word(word)

Examples:

    encode_word("apple")
    Return: "ilppe"

Explanation:

    apple

    Change vowels:
    epple

    Reverse:
    ilppe


Another example:

    encode_word("avocado")

    Vowels change according to the same cycle,
    and the transformed word is then reversed.

Requirements:

- Preserve consonants.
- Transform every vowel.
- Reverse the final sequence of characters.
"""


def encode_word(word):
    vowels = {
        "a": "e",
        "e": "i",
        "i": "o",
        "o": "u",
        "u": "a"
    }

    translated = ""

    for letter in word:
        if letter in vowels:
            translated += vowels[letter]
        else: 
            translated += letter

    return translated[::-1]


print(encode_word("apple"))
print(encode_word("avocado"))
print(encode_word("cauliflower"))


# ==============================================================================
# QUESTION 3 — NEXT MIRROR NUMBER
# ==============================================================================

"""
A mirror number is an integer whose digits read the same forward and backward.

Examples:

    1001
    1111
    1331
    1343431

Write:

    next_mirror_number(secret)

Return the SMALLEST mirror number that is strictly greater than `secret`.

The returned number must contain between 4 and 7 digits.

Examples of the relationship:

    secret = 1000
    Return: 1001

    secret = 1001
    The answer cannot be 1001 because the result must be GREATER
    than the input.

Important:

- The result must be a palindrome.
- The result must be strictly greater than the input.
- Return the smallest number satisfying both conditions.
- Valid results range from 1000 through 9999999.
"""


def next_mirror_number(secret):
    candidate = str(secret + 1)

    half_length = (len(candidate) + 1) // 2
    first_half = candidate[:half_length]

    # Build palindrome from first half
    if len(candidate) % 2 == 0:
        mirrored = first_half + first_half[::-1]
    else:
        mirrored = first_half + first_half[:-1][::-1]

    # If mirrored value is still too small,
    # increment the first half and mirror again
    if int(mirrored) <= secret:
        first_half = str(int(first_half) + 1)

        if len(candidate) % 2 == 0:
            mirrored = first_half + first_half[::-1]
        else:
            mirrored = first_half + first_half[:-1][::-1]

    return int(mirrored)


print(next_mirror_number(1000))
print(next_mirror_number(12345))
print(next_mirror_number(1331))
print(next_mirror_number(12321))


# ==============================================================================
# QUESTION 4 — FIND AVAILABLE SCHEDULING GAPS
# ==============================================================================

"""
You are scheduling an event during July.

July contains days:

    1 through 31

Some dates are unavailable.

You are also given the number of CONSECUTIVE free days required for the event.

Write:

    find_available_gaps(busy_days, days_needed)

The function should identify every location where there are at least
`days_needed` consecutive free calendar days.

For example:

    busy_days = [1, 5, 7, 11, 18, 19, 20, 22, 26]
    days_needed = 5

Consider the gap between:

    11 and 18

The free dates are:

    12, 13, 14, 15, 16, 17

There are 6 consecutive available days, so the event CAN fit there.

After:

    26

the dates:

    27, 28, 29, 30, 31

are available.

There are exactly 5 available days, so the event can also fit there.

Return a representation of the busy-day sequence with "X" inserted
after each busy date where a sufficiently large free period begins.

For the example above:

    [
        1,
        5,
        7,
        11,
        "X",
        18,
        19,
        20,
        22,
        26,
        "X"
    ]

Assumptions:

- The month is July (31 days).
- Busy dates are sorted.
- A gap qualifies when it contains AT LEAST `days_needed` free days.
- Availability after the final busy date must also be checked.
"""


def find_available_gaps(busy_days, days_needed):
    availabilities = []

    previous_day = 0

    for day in busy_days:
        available = day - previous_day

        if available > days_needed:
            availabilities.append("X")

        availabilities.append(day)
        previous_day = day


    available = 31 - busy_days[len(busy_days) -1] 

    if available >= days_needed:
        availabilities.append("X")

    return availabilities


busy_days = [1, 5, 7, 11, 18, 19, 20, 22, 26]

print(find_available_gaps(busy_days, 5))