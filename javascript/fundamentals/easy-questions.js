/* ------------------------------------- Question 1 ------------------------------------------ */
// Return all numbers greater than 10
// const numbers = [5, 12, 8, 130, 44];

function greaterThanTen(numbers) {
  return numbers.filter((number) => number > 10);
}
console.log(greaterThanTen([5, 12, 8, 130, 44]));

/* ------------------------------------- Question 2 ------------------------------------------ */
// Given: const names = ["alice", "bob", "charlie"];
// Return: ["ALICE", "BOB", "CHARLIE"]

function changeToUppercase(names) {
  // Loop through array
  // Change each element to uppercase
  // Push each change to a new array
  const upperCaseNames = [];

  names.forEach((name) => upperCaseNames.push(name.toUpperCase()));
  return upperCaseNames;
}
console.log(changeToUppercase(["alice", "bob", "charlie"]));

/* ------------------------------------- Question 3 ------------------------------------------ */
// Given: const scores = [85, 90, 78, 92];
// Return the average score

function calculateAverage(scores) {
  // To calculate average, we must sum up the scores
  // Use the sum to divide by the number of elements in the array

  let sum = 0;

  scores.forEach((score) => (sum += score));
  return sum / scores.length;
}
console.log(calculateAverage([85, 90, 78, 92]));

// Use .reduce() to calculate the average
function useReduce(numbers) {
  const total = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
  return total / numbers.length;
}
console.log(useReduce([85, 90, 78, 92]));

/* ------------------------------------- Question 4 ------------------------------------------ */
// Given: const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Return { apple: 3, banana: 2, orange: 1}

function countFruits(fruits) {
  // Create a map with fruit name as the key and count as the value
  // Loop through the fruits array and add to the map

  const map = {};

  fruits.forEach((fruit) => {
    if (!Object.hasOwn(map, fruit)) {
      map[fruit] = 1;
    } else {
      map[fruit]++;
    }
  });

  return map;
}
console.log(
  countFruits(["apple", "banana", "apple", "orange", "banana", "apple"]),
);
