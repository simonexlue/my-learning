# Async JavaScript

## Progress Log

### August 4, 2026

#### Topics Covered

- Synchronous vs Asynchronous JavaScript
- Callback functions
- `setTimeout()`
- Promises
- Promise states
- `Promise.resolve()`
- `Promise.reject()`
- `.then()`
- `.catch()`
- `async`
- `await`
- Creating Promises with `new Promise()`

#### Exercises Completed

- ✅ Easy Questions

---

### August 5, 2026

#### Topics Covered

- Fake backend API calls
- Consuming Promises with `await`
- Sequential asynchronous requests
- Building objects from asynchronous data
- Error handling with `try...catch`
- Returning transformed asynchronous data
- Introduction to parallel requests (`Promise.all()`)
- Combining async code with:
  - `filter()`
  - `map()`
  - `reduce()`
  - Dynamic object keys
  - Nested arrays and objects
- Calculating totals, averages, and summaries from async results
- Distinguishing dependent and independent requests

#### Exercises Completed

- ✅ Medium Questions
- ✅ Hard Questions
- ✅ Nested async data transformation challenge
- ✅ Error handling challenge
- ✅ Sequential vs parallel request practice

---

# Notes

## Synchronous vs Asynchronous

Synchronous code executes one line at a time.

Asynchronous operations (API requests, timers, file uploads, etc.) allow JavaScript to continue executing other code while waiting for a result.

---

## Callback Functions

A callback is a function passed to another function that executes later.

```js
setTimeout(() => {
  console.log("Finished");
}, 1000);
```

---

## Promises

A Promise represents a future value.

Promise states:

- Pending
- Fulfilled
- Rejected

```js
const users = fetch("/users");
```

`users` is a Promise, **not** the user data.

---

## `.then()` & `.catch()`

`.then()` runs when a Promise resolves.

`.catch()` handles rejected Promises.

```js
fetch("/users")
  .then((users) => console.log(users))
  .catch((error) => console.error(error));
```

---

## `async` / `await`

Every `async` function automatically returns a Promise.

`await` pauses **only the current async function** until a Promise resolves.

```js
async function loadUsers() {
  const users = await fetch("/users");

  return users;
}
```

---

## `new Promise()`

Use `new Promise()` when creating your own asynchronous operations.

```js
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
```

Most of the time, you'll consume existing Promises rather than create new ones.

---

## Sequential Requests

Use sequential requests when the second operation depends on the first.

```js
const user = await fetchUser();
const posts = await fetchPosts(user.id);
```

---

## Parallel Requests

If two requests are independent, run them together.

```js
const [users, products] = await Promise.all([fetchUsers(), fetchProducts()]);
```

---

# Key Takeaways

- JavaScript never blocks while waiting for asynchronous operations.
- `fetch()` returns a Promise immediately.
- `await` unwraps the value inside a Promise.
- `async` automatically returns a Promise.
- Use `try...catch` to handle rejected Promises.
- Use `new Promise()` mainly when wrapping callback-based APIs.
- Dependent requests should be executed sequentially.
- Independent requests should use `Promise.all()`.

---

# Common Mistakes

❌ Logging a Promise instead of its resolved value.

```js
console.log(fetch("/users"));
```

✔️

```js
const users = await fetch("/users");
```

---

❌ Creating unnecessary Promises.

```js
async function getColor() {
  return new Promise((resolve) => {
    resolve("Blue");
  });
}
```

✔️

```js
async function getColor() {
  return "Blue";
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

# Next Steps

- `Promise.all()`
- Parallel vs. sequential requests
- Real API requests with `fetch()`
- HTTP responses & JSON parsing
- Mini project using a public API
