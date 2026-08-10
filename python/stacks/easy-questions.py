"""
------------------------------------- Question 1 ------------------------------------------
Write function reverse_with_stack(items)

Given: [1, 2, 3, 4]

Return: [4, 3, 2, 1]

Requirements:
- Use a stack
- Use append()
- Use pop()
"""

def reverse_with_stack(items):
    stack = []

    # Pop each item off and append to stack

    while len(items) > 0:
        stack.append(items.pop())

    return stack

print(reverse_with_stack([1, 2, 3, 4]))


"""
------------------------------------- Question 2 ------------------------------------------
Write function valid_parentheses(text)

Given: "()"
Return: True

Given: "(())"
Return: True

Given: "(()"
Return: False

Given: ")("
Return: False

Only parentheses '(' and ')' are included.

Use a stack.
"""

def valid_parentheses(text):
    # Opening bracket must be first -> False if not
    # Put opening bracket into stack, next must be either opening bracket or a closing bracket
    # Number of Opening brackets must be = to number of closing brackets (uneven length is False)

    if len(text) % 2 != 0:
        return False

    if len(text) == 0:
        return False
    
    if text[0] != "(": 
        return False


    stack = []

    for letter in text:
        if letter == "(":
            stack.append(letter)
        else: 
            if len(stack) == 0:
                return False
            stack.pop()

    if len(stack) == 0:
        return True
    else: return False

print(valid_parentheses("()"))
print(valid_parentheses("(())"))
print(valid_parentheses("(()"))
print(valid_parentheses(")("))
print(valid_parentheses("())("))
print(valid_parentheses(""))