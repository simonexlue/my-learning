/* 
------------------------------------- Question 5 ------------------------------------------ 
Given: 
const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 31 },
  { name: "David", age: 15 },
];
Return: Users over the age of 18: ["Bob", "Charlie"] 
*/

function findAdults(users) {
  // Filter for users over the age of 18
  // Return only the name

  return users.filter((user) => user.age > 18).map((user) => user.name);
}
console.log(
  findAdults([
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 31 },
    { name: "David", age: 15 },
  ]),
);

/* 
------------------------------------- Question 6 ------------------------------------------ 
Given: 
const products = [
  { name: "Phone", price: 900 },
  { name: "Mouse", price: 30 },
  { name: "Laptop", price: 1800 },
];
Return the total price of all products.
*/

function calculateTotal(products) {
  return products.reduce((total, product) => {
    return total + product.price;
  }, 0);
}
console.log(
  calculateTotal([
    { name: "Phone", price: 900 },
    { name: "Mouse", price: 30 },
    { name: "Laptop", price: 1800 },
  ]),
);

/* 
------------------------------------- Question 7 ------------------------------------------ 
Given: 
const words = [
  "cat",
  "dog",
  "elephant",
  "tiger",
  "giraffe",
];
Return the longest word.
*/

// Finds the first instance of the longest word
function findLongestWord(words) {
  let currentLongest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > currentLongest.length) {
      currentLongest = words[i];
    }
  }

  return currentLongest;
}
console.log(findLongestWord(["cat", "dog", "elephant", "tiger", "giraffe"]));

/* 
------------------------------------- Question 8 ------------------------------------------ 
Given: 
const employees = [
  { name: "Alice", department: "Engineering" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "Marketing" },
  { name: "David", department: "HR" },
];
Return the number of employees per department.
{
  Engineering: 2,
  Marketing: 1,
  HR: 1,
}
*/

function countEmployeesByDepartment(employees) {
  // Go through each employee
  // Set Department key in map if its a new department
  // Increment count for department if department name is already in map
  const map = {};

  employees.forEach((employee) => {
    if (!Object.hasOwn(map, employee.department)) {
      map[employee.department] = 1;
    } else {
      map[employee.department]++;
    }
  });

  return map;
}
console.log(
  countEmployeesByDepartment([
    { name: "Alice", department: "Engineering" },
    { name: "Bob", department: "Engineering" },
    { name: "Charlie", department: "Marketing" },
    { name: "David", department: "HR" },
  ]),
);
