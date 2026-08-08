/* ------------------------------------- Question 1 ------------------------------------------
Write function createMultiplier(multiplier)
Example: 
    const double = createMultiplier(2);
    const triple = createMultiplier(3);

    console.log(double(5)); // 10
    console.log(triple(5)); // 15
    console.log(double(8)); // 16
*/

function createMultiplier(multiplier) {
  return function (number) {
    return multiplier * number;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(8)); // 16

/* ------------------------------------- Question 2 ------------------------------------------
Write function createAdder(amount)
Example: 
    const addFive = createAdder(5);

    console.log(addFive(10)); // 15
    console.log(addFive(30)); // 35
*/

function createAdder(amount) {
  return function (number) {
    return amount + number;
  };
}

const addFive = createAdder(5);

console.log(addFive(10)); // 15
console.log(addFive(30)); // 35

/* ------------------------------------- Question 3 ------------------------------------------
Write function once(callback)
- The callback should only execute once
Example: 
    const greet = once(() => {
        console.log("Hello!");
    });

    greet(); // Hello!
    greet(); // nothing
    greet(); // nothing
*/

function once(callback) {
  let hasRun = false;
  return function () {
    if (!hasRun) {
      hasRun = true;
      callback();
    }
  };
}

const greet = once(() => {
  console.log("Hello!");
});

greet(); // Hello!
greet(); // nothing
greet(); // nothing

/* ------------------------------------- Question 4 ------------------------------------------
Write function createLoginAttempts()
- The callback should only execute once
Example: 
    const login = createLoginAttempts();

    login.fail();
    login.fail();
    console.log(login.getAttempts()); // 2
    login.reset();
    console.log(login.getAttempts()); // 0
*/
