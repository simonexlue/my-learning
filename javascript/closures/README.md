# Closures

## Progress Log

### August 5, 2026

#### Topics Covered

- Function scope
- Lexical scope
- Closures
- Returning functions
- Returning objects
- Private variables
- Persistent state
- Factory functions
- Multiple methods sharing the same closure

#### Exercises Completed

- ✅ Easy Questions

---

# Notes

## Scope

Variables are only accessible where they are defined.

```js
function example() {
  const message = "Hello";
}

console.log(message); // Error
```

---

## Lexical Scope

Inner functions can access variables from their outer functions.

```js
function outer() {
  const name = "Alice";

  function inner() {
    console.log(name);
  }

  inner();
}
```

---

## Closures

A closure is when a function remembers and can access variables from its outer scope even after the outer function has finished executing. Its purpose is to maintain private state and create reusable functions without relying on global variables.

```js
function outer() {
  const name = "Alice";

  return function () {
    console.log(name);
  };
}

const greet = outer();

greet();
```

Output:

```text
Alice
```

---

## Returning Functions

Functions can return other functions.

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
```

The returned function remembers `count` between calls.

---

## Returning Objects

Closures can also be shared across multiple methods.

```js
function createUser(name) {
  let userName = name;

  return {
    getName() {
      return userName;
    },

    rename(newName) {
      userName = newName;
    },
  };
}
```

Every method shares the same private variable.

---

## Private Variables

Variables inside the outer function cannot be accessed directly.

```js
const vault = createSecret("OpenAI");

// ❌
vault.secret;

// ✔
vault.getSecret();
```

This allows data to remain private while exposing controlled methods.

---

# Key Takeaways

- Functions remember variables from where they were created.
- Returned functions keep access to outer variables.
- Every call to the outer function creates a new closure.
- Closures provide private state without using global variables.
- Multiple methods can share the same private variables.
- Closures are commonly used to build reusable factory functions.

---

# Common Mistakes

- Forgetting to return the inner function.
- Assuming outer variables disappear after the outer function returns.
- Thinking calling the returned function calls the outer function again.
- Forgetting that every call creates a separate closure.
- Exposing private variables instead of accessing them through methods.

---

# Next Steps

- Real-world closure patterns
  - Debounce
  - Throttle
  - Memoization
  - `once()`
  - Function factories
- Closures with callbacks and event listeners
