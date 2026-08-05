/* ------------------------------------- Question 1 ------------------------------------------ */
// FAKE BACKEND CALL
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Alice",
      });
    }, 1000);
  });
}
/* 
Write a function: async function getUser() 
- Call fetchUser()
- Await the result
- Return the user
*/

async function getUser() {
  const user = await fetchUser();

  return user;
}

getUser().then((user) => console.log(user));

/* ------------------------------------- Question 2 ------------------------------------------ 
Use the same fetchUser() function
Write async greetUser()
Return "Hello Alice!"
*/

async function greetUser() {
  const user = await fetchUser();

  return `Hello ${user.name}!`;
}

greetUser().then((value) => console.log(value));

/* ------------------------------------- Question 3 ------------------------------------------ 
Use the same fetchUser() function
Write async getUserName()
Return only "Alice"
*/

async function getUserName() {
  const user = await fetchUser();
  return user.name;
}

getUserName().then((name) => console.log(name));

/* ------------------------------------- Question 4 ------------------------------------------ */
// FAKE BACKEND CALL
function fetchProduct() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 5,
        name: "Laptop",
        price: 1500,
      });
    }, 1000);
  });
}
/* 
Write a function: async function getProductPrice() 
- Return the the price 1500
*/

async function getProductPrice() {
  const product = await fetchProduct();

  return product.price;
}

getProductPrice().then((price) => console.log(price));

/* ------------------------------------- Question 5 ------------------------------------------ 
Given: */
function fetchPrice() {
  return Promise.resolve(100);
}

function fetchTax() {
  return Promise.resolve(12);
}
/*
Write async function calculateTotal()
Return 112
*/

async function calculateTotal() {
  const price = await fetchPrice();
  const tax = await fetchTax();

  return price + tax;
}

calculateTotal().then((total) => console.log(total));

/* ------------------------------------- Question 6 ------------------------------------------ 
Given: */
function fetchAlice() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  });
}

function fetchOrders() {
  return Promise.resolve(["Laptop", "Mouse"]);
}
/*
Write async function getUserProfile()
Return :
    {
        user: {
            id: 1,
            name: "Alice"
        },
        orders: [
            "Laptop",
            "Mouse"
        ]
    }
*/

async function getUserProfile() {
  const user = await fetchAlice();
  const orders = await fetchOrders();

  return {
    user: user,
    orders: orders,
  };
}

getUserProfile().then((object) => console.log(object));

/* ------------------------------------- Question 7 ------------------------------------------ 
Given: 
function fetchAlice() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  });
}
  */

function fetchPosts(userId) {
  return Promise.resolve(["Post 1", "Post 2"]);
}

/*
Write async function getPosts()
- Fetch the user.
- Use the user's id.
- Fetch the posts.
- Return the posts.
*/

async function getPosts() {
  const user = await fetchAlice();
  return await fetchPosts(user.id);
}

getPosts().then((posts) => console.log(posts));

/* ------------------------------------- Question 8 ------------------------------------------ 
Given: */

function rejectFetchUser() {
  return Promise.reject("Network Error");
}

/*
Write async function getRejectedFetchUser()
- Use try/catch
- Return "Failed to load user." if an error occurs
*/

async function getRejectFetchUser() {
  try {
    const user = await rejectFetchUser();
    return user;
  } catch (error) {
    return error;
  }
}

getRejectFetchUser().then((value) => console.log(value));

/* ------------------------------------- Question 9 ------------------------------------------ 
Given: */

function fetchUsers2() {
  return Promise.resolve(120);
}

function fetchProducts2() {
  return Promise.resolve(45);
}

/*
Write async function loadDashboard()
Return : 
    {
        users: 120,
        products: 45,
    }
*/

async function loadDashboard() {
  const users = await fetchUsers2();
  const products = await fetchProducts2();

  return {
    users,
    products,
  };
}

loadDashboard().then((dashboard) => console.log(dashboard));

/* ------------------------------------- Question 10 ------------------------------------------ 
Given: */

function fetchUser3() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  });
}

function fetchOrders2() {
  return Promise.resolve([
    { item: "Laptop", price: 1200 },
    { item: "Mouse", price: 50 },
  ]);
}

/*
Write async function getDashboard()
Return : 
    {
        userName: "Alice",
        totalSpent: 1250,
    }
*/

async function getDashboard() {
  const user = await fetchUser3();
  const orders = await fetchOrders2();

  return {
    userName: user.name,
    totalSpent: orders.reduce((total, order) => {
      return total + order.price;
    }, 0),
  };
}
getDashboard().then((dashboard) => console.log(dashboard));
