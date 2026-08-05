// ------------------------------------- FAKE FETCH CALLS -------------------------------------
function fetchUser() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
  });
}

function fetchUsers() {
  return Promise.resolve([
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true },
  ]);
}

function fetchOrders() {
  return Promise.resolve([{ total: 120 }, { total: 80 }, { total: 250 }]);
}

function fetchUserOrders(userId) {
  return Promise.resolve([{ price: 100 }, { price: 50 }, { price: 200 }]);
}

function fetchEmployees() {
  return Promise.resolve([
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Marketing" },
    { name: "David", department: "HR" },
  ]);
}

function fetchProducts() {
  return Promise.resolve([{ price: 100 }, { price: 250 }, { price: 50 }]);
}

function fetchUsers2() {
  return Promise.resolve([
    {
      name: "Alice",
      purchases: [{ price: 100 }, { price: 50 }],
    },
    {
      name: "Bob",
      purchases: [{ price: 200 }],
    },
    {
      name: "Charlie",
      purchases: [],
    },
  ]);
}

function fetchOrders2() {
  return Promise.reject("Database Offline");
}

function fetchUsers3() {
  return Promise.resolve(120);
}

function fetchProducts2() {
  return Promise.resolve(45);
}

function fetchRevenue() {
  return Promise.resolve(12000);
}

function fetchUsers4() {
  return Promise.resolve([
    {
      id: 1,
      name: "Alice",
      active: true,
      purchases: [{ price: 100 }, { price: 50 }],
    },
    {
      id: 2,
      name: "Bob",
      active: false,
      purchases: [{ price: 300 }],
    },
    {
      id: 3,
      name: "Charlie",
      active: true,
      purchases: [{ price: 200 }, { price: 100 }],
    },
  ]);
}

/* ------------------------------------- Question 1 ------------------------------------------ 
Given: fetchUsers()
Write async function getActiveUserNames()
Return : ["Alice", "Charlie"]
*/

async function getActiveUserNames() {
  const users = await fetchUsers();

  return users.filter((user) => user.active).map((user) => user.name);
}

getActiveUserNames().then((users) => console.log(users));

/* ------------------------------------- Question 2 ------------------------------------------
Given: fetchOrders()
Write async function calculateRevenue()
Return : 450
*/

async function calculateRevenue() {
  const orders = await fetchOrders();

  return orders.reduce((total, order) => {
    return total + order.total;
  }, 0);
}

calculateRevenue().then((total) => console.log(total));

/* ------------------------------------- Question 3 ------------------------------------------
Given: fetchEmployees()
Return :
    {
        Engineering: ["Alice", "Bob"],
        Marketing: ["Charlie"],
        HR: ["David"]
    }
*/

async function groupByDepartment() {
  const employees = await fetchEmployees();

  const map = {};

  employees.forEach((employee) => {
    if (!map[employee.department]) {
      map[employee.department] = [employee.name];
    } else {
      map[employee.department].push(employee.name);
    }
  });

  return map;
}

groupByDepartment().then((map) => console.log(map));

/* ------------------------------------- Question 4 ------------------------------------------
Given: fetchProducts()
Return :
    {
        count: 3,
        total: 400,
        average: 133.33
    }
Round to 2 decimal places
*/

async function getSummary() {
  const products = await fetchProducts();

  const count = products.length;
  const total = products.reduce((total, product) => {
    return total + product.price;
  }, 0);
  const average = total / count;

  return {
    count,
    total,
    average: Number(average.toFixed(2)),
  };
}

getSummary().then((summary) => console.log(summary));

/* ------------------------------------- Question 5 ------------------------------------------
Given: fetchUsers2()
Return :
    [
        {
            name: "Alice",
            totalSpent: 150,
        },
        {
            name: "Bob",
            totalSpent: 200,
        },
        {
            name: "Charlie",
            totalSpent: 0,
        },
    ]
*/

async function getUsers() {
  const users = await fetchUsers2();

  const usersArray = [];

  users.forEach((user) => {
    usersArray.push({
      name: user.name,
      totalSpent: user.purchases.reduce((total, purchase) => {
        return total + purchase.price;
      }, 0),
    });
  });

  return usersArray;
}

getUsers().then((users) => console.log(users));

/* ------------------------------------- Question 6 ------------------------------------------
Given: fetchOrders2() - Promise.reject
Use try/catch
Return :
    {
        success: false,
        orders: [],
    }
*/

async function getOrders() {
  try {
    return await fetchOrders2();
  } catch (error) {
    console.log(error);
    return {
      success: false,
      orders: [],
    };
  }
}
getOrders().then((result) => console.log(result));

/* ------------------------------------- Question 7 ------------------------------------------
Given: fetchUsers3() and fetchProducts2()
Use Promise.all()
Return :
    {
        users: 120,
        products: 45,
    }
*/

async function getUsersProducts() {
  const [users, products] = await Promise.all([
    fetchUsers3(),
    fetchProducts2(),
  ]);

  return {
    users,
    products,
  };
}

getUsersProducts().then((value) => console.log(value));

/* ------------------------------------- Question 8 ------------------------------------------
Given: fetchUsers() and fetchRevenue()
Return :
    {
        activeUsers: 2,
        revenue: 12000,
    }
*/

async function getRevenue() {
  const [users, revenue] = await Promise.all([fetchUsers(), fetchRevenue()]);

  const activeUsers = users.filter((user) => user.active).length;

  return {
    activeUsers,
    revenue,
  };
}

getRevenue().then((revenue) => console.log(revenue));

/* ------------------------------------- Question 9 ------------------------------------------
Given: fetchUser() and fetchUserOrders(userId)
Return :
    {
        name: "Alice",
        orders: 3,
        totalSpent: 350,
    }
*/

async function getUserSummary() {
  const user = await fetchUser();
  const orders = await fetchUserOrders(user.id);

  return {
    name: user.name,
    orders: orders.length,
    totalSpent: orders.reduce((total, order) => {
      return total + order.price;
    }, 0),
  };
}

getUserSummary().then((value) => console.log(value));

/* ------------------------------------- Question 10 ------------------------------------------ 
Given: fetchUsers4()
- Only active users count toward totalActiveUsers.
- Revenue is the sum of active users' purchases only.
- topCustomer is the active user with the highest total purchases.
Return : 
    {
        totalActiveUsers: 2,
        totalRevenue: 450,
        topCustomer: "Charlie",
    }
*/

async function getSummaries() {
  const usersArray = [];
  const users = await fetchUsers4();

  const activeUsers = users.filter((user) => user.active);

  activeUsers.forEach((user) => {
    usersArray.push({
      name: user.name,
      totalSpent: user.purchases.reduce((total, purchase) => {
        return total + purchase.price;
      }, 0),
    });
  });

  const totalRevenue = usersArray.reduce((total, user) => {
    return total + user.totalSpent;
  }, 0);

  let topCustomer = "";
  let topCustomerSpending = 0;
  usersArray.forEach((user) => {
    if (user.totalSpent > topCustomerSpending) {
      topCustomer = user.name;
      topCustomerSpending = user.totalSpent;
    }
  });

  return {
    totalActiveUsers: activeUsers.length,
    totalRevenue,
    topCustomer,
  };
}

getSummaries().then((value) => console.log(value));
