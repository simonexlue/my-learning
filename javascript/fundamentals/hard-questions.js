/* 
------------------------------------- Question 9 ------------------------------------------ 
Given: 
const orders = [
  { customer: "Alice", total: 120, paid: true },
  { customer: "Bob", total: 50, paid: false },
  { customer: "Charlie", total: 200, paid: true },
  { customer: "David", total: 80, paid: true },
];
Return: Customer's with a paid order: ["Alice", "Charlie", "David"]
*/

function paidOrders(orders) {
  // Looking for orders with paid: true -> filter
  // Return only the customer name

  return orders
    .filter((order) => order.paid === true)
    .map((order) => order.customer);
}
console.log(
  paidOrders([
    { customer: "Alice", total: 120, paid: true },
    { customer: "Bob", total: 50, paid: false },
    { customer: "Charlie", total: 200, paid: true },
    { customer: "David", total: 80, paid: true },
  ]),
);

/* 
------------------------------------- Question 10 ------------------------------------------ 
Given: 
const employees = [
  { name: "Alice", department: "Engineering", salary: 90000 },
  { name: "Bob", department: "Engineering", salary: 120000 },
  { name: "Charlie", department: "Marketing", salary: 70000 },
  { name: "David", department: "Engineering", salary: 95000 },
];
Return: Average salary of Engineering employees
*/

function averageSalaryEngineering(employees) {
  // Filter for only Engineering employees
  // Calculate the average for only the filtered employees

  const filteredEmployees = employees.filter(
    (employee) => employee.department === "Engineering",
  );
  const sum = filteredEmployees.reduce((total, employee) => {
    return total + employee.salary;
  }, 0);
  return sum / filteredEmployees.length;
}
console.log(
  averageSalaryEngineering([
    { name: "Alice", department: "Engineering", salary: 90000 },
    { name: "Bob", department: "Engineering", salary: 120000 },
    { name: "Charlie", department: "Marketing", salary: 70000 },
    { name: "David", department: "Engineering", salary: 95000 },
  ]),
);

/* 
------------------------------------- Question 11 ------------------------------------------ 
Given: 
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
  { name: "David", grade: "C" },
  { name: "Emma", grade: "B" },
];
Return: Students grouped by letter grade 
{
  A: ["Alice", "Charlie"],
  B: ["Bob", "Emma"],
  C: ["David"],
}
*/

function groupByGrade(students) {
  const map = {};

  students.forEach((student) => {
    if (!map[student.grade]) {
      map[student.grade] = [student.name];
    } else {
      map[student.grade].push(student.name);
    }
  });
  return map;
}
console.log(
  groupByGrade([
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "David", grade: "C" },
    { name: "Emma", grade: "B" },
  ]),
);

/* 
------------------------------------- Question 12 ------------------------------------------ 
Given: 
const transactions = [
  { category: "Food", amount: 25 },
  { category: "Transport", amount: 15 },
  { category: "Food", amount: 40 },
  { category: "Entertainment", amount: 50 },
  { category: "Transport", amount: 20 },
];
Return: Transactions grouped by category and amount 
{
  Food: 65,
  Transport: 35,
  Entertainment: 50,
}
*/

function groupTransactions(transactions) {
  // Group by category -> key
  // Sum amount for each category

  const map = {};

  transactions.forEach((transaction) => {
    if (!map[transaction.category]) {
      map[transaction.category] = transaction.amount;
    } else {
      map[transaction.category] += transaction.amount;
    }
  });

  return map;
}
console.log(
  groupTransactions([
    { category: "Food", amount: 25 },
    { category: "Transport", amount: 15 },
    { category: "Food", amount: 40 },
    { category: "Entertainment", amount: 50 },
    { category: "Transport", amount: 20 },
  ]),
);

/* 
------------------------------------- Bonus ------------------------------------------ 
Given: 
const users = [
  {
    name: "Alice",
    active: true,
    purchases: [
      { item: "Phone", price: 900 },
      { item: "Mouse", price: 30 },
    ],
  },
  {
    name: "Bob",
    active: false,
    purchases: [
      { item: "Laptop", price: 1800 },
    ],
  },
  {
    name: "Charlie",
    active: true,
    purchases: [
      { item: "Keyboard", price: 100 },
      { item: "Monitor", price: 400 },
    ],
  },
];
Return: Active users only, with user name and totalSpent
[
  {
    name: "Alice",
    totalSpent: 930,
  },
  {
    name: "Charlie",
    totalSpent: 500,
  },
]
*/

function returnActiveUsers(users) {
  // Filter for active users
  // Sum up purchases (price)
  // Return an array of user objects containing only name and totalSpent

  return users
    .filter((user) => user.active === true)
    .map((user) => ({
      name: user.name,
      totalSpent: user.purchases.reduce((total, purchase) => {
        return total + purchase.price;
      }, 0),
    }));
}
console.log(
  returnActiveUsers([
    {
      name: "Alice",
      active: true,
      purchases: [
        { item: "Phone", price: 900 },
        { item: "Mouse", price: 30 },
      ],
    },
    {
      name: "Bob",
      active: false,
      purchases: [{ item: "Laptop", price: 1800 }],
    },
    {
      name: "Charlie",
      active: true,
      purchases: [
        { item: "Keyboard", price: 100 },
        { item: "Monitor", price: 400 },
      ],
    },
  ]),
);
