/* ------------------------------------- Question 1 ------------------------------------------
Write function createCounter()
Requirements: 
    const counter = createCounter();

    console.log(counter()); // 1
    console.log(counter()); // 2
    console.log(counter()); // 3
*/

function createCounter() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

/* ------------------------------------- Question 2 ------------------------------------------
Write function createCounter2(start)
Requirements: 
    const counter2 = createCounter2(10);

    console.log(counter2()); // 11
    console.log(counter2()); // 12
    console.log(counter2()); // 13
*/

function createCounter2(start) {
  let count = start;

  return function inner() {
    count++;
    return count;
  };
}

const counter2 = createCounter2(10);

console.log(counter2()); // 11
console.log(counter2()); // 12
console.log(counter2()); // 13

/* ------------------------------------- Question 3 ------------------------------------------
Write function createGreeting(name)
Requirements: 
    const greetAlice = createGreeting("Alice");
    const greetBob = createGreeting("Bob");

    greetAlice(); // Hello Alice!
    greetBob();   // Hello Bob!
*/

function createGreeting(name) {
  return function greeting() {
    console.log("Hello", name + "!");
  };
}

const greetAlice = createGreeting("Alice");
const greetBob = createGreeting("Bob");

greetAlice(); // Hello Alice!
greetBob(); // Hello Bob!

/* ------------------------------------- Question 4 ------------------------------------------
Write function createBankAccount(balance)
Requirements: 
    const account = createBankAccount(100);

    console.log(account(50));   // 150
    console.log(account(25));   // 175
    console.log(account(-30));  // 145
*/

function createBankAccount(balance) {
  let currentBalance = balance;

  return function (amount) {
    return (currentBalance += amount);
  };
}

const account = createBankAccount(100);

console.log(account(50)); // 150
console.log(account(25)); // 175
console.log(account(-30)); // 145

/* ------------------------------------- Question 5 ------------------------------------------
Write function createSecret(secret)
Return an object with two methods
- The variable secret should not be directly accessible

    const vault = createSecret("OpenAI");
    vault.getSecret(); // "OpenAI"
    vault.changeSecret("ChatGPT");
    vault.getSecret(); // "ChatGPT"
*/

function createSecret(secret) {
  let secretWord = secret;

  return {
    getSecret: function () {
      console.log(secretWord);
    },
    changeSecret: function (word) {
      secretWord = word;
    },
  };
}

const vault = createSecret("OpenAI");
vault.getSecret(); // "OpenAI"
vault.changeSecret("ChatGPT");
vault.getSecret(); // "ChatGPT"

/* ------------------------------------- Question 6 ------------------------------------------
Write function createTodoList()
Methods: 
    const todos = createTodoList();
    todos.add("Study");
    todos.add("Workout");
    console.log(todos.getAll());
Output: ["Study", "Workout"]
- The array should stay private
*/

function createTodoList() {
  const todoList = [];
  return {
    add: function (task) {
      todoList.push(task);
    },
    getAll: function () {
      return todoList;
    },
  };
}

const todos = createTodoList();
todos.add("Study");
todos.add("Workout");
console.log(todos.getAll());

/* ------------------------------------- Question 7 ------------------------------------------
Write function createScore()
Methods: 
    score.add(5);
    score.add(10);
    score.reset();
    score.getScore();
Output: 0
*/

function createScore() {
  let score = 0;
  return {
    add: function (number) {
      score += number;
    },
    reset: function () {
      score = 0;
    },
    getScore: function () {
      return score;
    },
  };
}
const score = createScore();
score.add(5);
score.add(10);
score.reset();
console.log(score.getScore());

/* ------------------------------------- Question 8 ------------------------------------------
Write function createIdGenerator()
    const ids = createIdGenerator();
    console.log(ids()); // 1
    console.log(ids()); // 2
    console.log(ids()); // 3
*/

function createIdGenerator() {
  let id = 0;
  return function () {
    id++;
    return id;
  };
}

const ids = createIdGenerator();
console.log(ids()); // 1
console.log(ids()); // 2
console.log(ids()); // 3

/* ------------------------------------- Question 9 ------------------------------------------
Write function createLikeButton()
Methods:
    button.like();
    button.like();
    button.getLikes();
Output: 2
*/

function createLikeButton() {
  let likes = 0;
  return {
    like: function () {
      likes++;
    },
    getLikes: function () {
      return likes;
    },
  };
}
const button = createLikeButton();
button.like();
button.like();
console.log(button.getLikes());

/* ------------------------------------- Question 10 ------------------------------------------
Write function createUser(name)
Return:
    const simone = createUser("Simone");
    simone.getName();
    simone.rename("Alex");
    simone.getName();
The name should remain private
*/

function createUser(name) {
  let userName = name;

  return {
    getName: function () {
      return userName;
    },
    rename: function (name) {
      userName = name;
    },
  };
}
const simone = createUser("Simone");
console.log(simone.getName());
simone.rename("Alex");
console.log(simone.getName());
