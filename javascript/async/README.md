# Async JavaScript

## Progress Log

### August 4, 2026

## Topics Covered

- Synchronous vs Asynchronous JavaScript
- `setTimeout()`
- Callback functions
- Promises
- Promise states
  - Pending
  - Fulfilled
  - Rejected
- `Promise.resolve()`
- `Promise.reject()`
- `.then()`
- `.catch()`
- `async`
- `await`
- Creating Promises with `new Promise()`

---

## Exercises Completed

### ✅ Easy Questions

- Predict asynchronous execution order
- Creating callback functions
- Delayed execution with `setTimeout()`
- Passing data through callbacks
- Creating resolved Promises
- Creating rejected Promises
- Returning values from `async` functions
- Using `await`
- Simulating asynchronous calculations
- Creating and awaiting a delayed Promise

---

## Notes

### Synchronous JavaScript

JavaScript executes one line of code at a time.

```js
console.log("A");
console.log("B");
console.log("C");
```

Output:

```text
A
B
C
```

---

### Asynchronous JavaScript

Some operations take time to complete.

Examples include:

- API requests
- Database queries
- File uploads
- Timers
- Reading files

Instead of blocking the application while waiting, JavaScript starts the operation and continues executing the remaining synchronous code.

---

### Callback Functions

A callback is a function passed to another function that will be executed later.

Example:

```js
setTimeout(() => {
  console.log("Finished");
}, 1000);
```

Callbacks are commonly used for:

- Timers
- Event listeners
- Asynchronous operations

---

### Promises

A Promise represents a value that will become available in the future.

A Promise always exists in one of three states:

- Pending
- Fulfilled
- Rejected

Example:

```js
const users = fetch("/users");
```

`users` is **not** the user data.

It is a **Promise** that will eventually resolve with the user data.

---

### Resolving a Promise

```js
const promise = new Promise((resolve) => {
  resolve("Success");
});
```

Calling `resolve()` fulfills the Promise and provides its value.

---

### Rejecting a Promise

```js
const promise = new Promise((resolve, reject) => {
  reject("Network Error");
});
```

Calling `reject()` marks the Promise as failed and provides an error.

---

### `.then()`

`.then()` registers a callback that executes when a Promise is fulfilled.

```js
fetch("/users").then((users) => {
  console.log(users);
});
```

Think of it as:

> "When this Promise finishes successfully, run this code."

---

### `.catch()`

`.catch()` handles rejected Promises.

```js
fetch("/users")
  .then((users) => {
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });
```

Think of it as:

> "If something goes wrong, handle the error here."

---

### `async`

Adding the `async` keyword to a function automatically makes it return a Promise.

```js
async function getColor() {
  return "Blue";
}
```

This is equivalent to:

```js
function getColor() {
  return Promise.resolve("Blue");
}
```

---

### `await`

`await` pauses the current **async function** until a Promise resolves.

```js
const users = await fetch("/users");
```

It **does not pause JavaScript** or freeze the application.

Only the current async function waits.

---

### `new Promise()`

Use `new Promise()` when creating your own asynchronous operation.

Example:

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
```

This is useful when converting callback-based code into Promise-based code.

---

## Key Takeaways

- JavaScript executes synchronous code before asynchronous callbacks.
- `setTimeout()` does not block execution.
- Callback functions are executed later by another function.
- `fetch()` immediately returns a Promise, not the requested data.
- A Promise represents a future value.
- Promises have three states: Pending, Fulfilled, and Rejected.
- `resolve()` fulfills a Promise.
- `reject()` rejects a Promise.
- `.then()` runs after a Promise is fulfilled.
- `.catch()` handles rejected Promises.
- Every `async` function automatically returns a Promise.
- `await` unwraps the value from a Promise.
- `await` only pauses the current async function.
- Avoid creating a new Promise when an `async` function alone is sufficient.
- Use `new Promise()` primarily to wrap callback-based APIs such as `setTimeout()`.

---

## Common Mistakes

❌ Logging a Promise instead of its resolved value.

```js
console.log(fetch("/users"));
```

✔️ Wait for the Promise.

```js
const users = await fetch("/users");
```

or

```js
fetch("/users").then((users) => {
  console.log(users);
});
```

---

❌ Forgetting to return a callback result.

```js
function calculate(a, b, callback) {
  callback(a, b);
}
```

✔️

```js
function calculate(a, b, callback) {
  return callback(a, b);
}
```

---

❌ Using `await` outside an `async` function.

```js
const users = await fetch("/users");
```

✔️

```js
async function loadUsers() {
  const users = await fetch("/users");
}
```

---

## Next Steps

- Simulate API requests using fake asynchronous functions
- Sequential vs. parallel asynchronous operations
- Error handling with `try...catch`
- `Promise.all()`
- Real API requests using `fetch()`
