/* ------------------------------------- Question 1 ------------------------------------------ 
Write a function: function waitOneSecond(callback) that waits 1 second -> then executes the callback
*/

function waitOneSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function callback() {
  console.log("Finished");
}
waitOneSecond(callback);

/* ------------------------------------- Question 2 ------------------------------------------ 
Write a function: function greetLater(name) that waits 2 seconds -> then prints "Hello Alice!"
*/

function greetLater(name) {
  // Need timeout function to set 2 second delay
  setTimeout(() => {
    console.log(`Hello ${name}!`);
  }, 2000);
}

greetLater("Alice");

/* ------------------------------------- Question 3 ------------------------------------------ 
Write a function: function addLater(a, b) that waits 1 second -> then prints the sum
Example: addLater(5,3) || Output: 8
*/

function addLater(a, b) {
  setTimeout(() => {
    console.log(a + b);
  }, 1000);
}

addLater(5, 3);

/* ------------------------------------- Question 4 ------------------------------------------ 
Write a function: function delayedMessage(message, delay) that waits 3 seconds 
Then prints the message
Example: delayedMessage("Loading complete", 3000)
*/

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("Loading complete", 3000);

/* ------------------------------------- Question 5 ------------------------------------------ 
Write a function: function createResolvedPromise() 
Returns a Promise that resolves to: 
{
    name: "Simone",
    age: 27
}
*/

function createResolvedPromise() {
  return new Promise((resolve) => {
    resolve({
      name: "Simone",
      age: 27,
    });
  });
}

createResolvedPromise().then((value) => {
  console.log(value);
});

/* ------------------------------------- Question 6 ------------------------------------------ 
Write a function: function createRejectedPromise()
Returns a Promise that rejects to: "Network Error"
*/

function createRejectedPromise() {
  return new Promise((_, reject) => {
    reject("Network Error");
  });
}

createRejectedPromise().catch((error) => {
  console.log(error);
});

/* ------------------------------------- Question 7 ------------------------------------------ 
Write a function: async function getFavoriteColor()
Returns "Blue" using a Promise
*/

async function getFavoriteColor() {
  return new Promise((resolve) => {
    resolve("Blue");
  });
}

getFavoriteColor().then((value) => {
  console.log(value);
});

/* ------------------------------------- Question 8 ------------------------------------------ 
Write a function: async function multiplyByTwo(number)
Use: await Promise.resolve(...)
Return: number*2
*/

async function multiplyByTwo(number) {
  return await Promise.resolve(number * 2);
}

multiplyByTwo(10).then((number) => {
  console.log(number);
});

/* ------------------------------------- Question 9 ------------------------------------------ 
Write a function: async function calculateTotal(price, tax)
- Pretend both values come from asynchronous operations.
- Use await
Return: price + tax
*/

async function calculateTotal(price, tax) {
  const asyncPrice = await Promise.resolve(price);
  const asyncTax = await Promise.resolve(tax);
  return asyncPrice + asyncTax;
}

calculateTotal(10, 5).then((total) => {
  console.log(total);
});

/* ------------------------------------- Question 10 ------------------------------------------ 
Write a function: async function getUser()
- Create a Promise that resolves after one second.
- Resolve with:
    {
        id: 1,
        name: "Alice"
    }
- Await the Promise.
- Return the user.
*/

async function getUser() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Alice",
      });
    }, 1000);
  });
}

getUser().then((user) => {
  console.log(user);
});
