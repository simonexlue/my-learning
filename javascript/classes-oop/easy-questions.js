/* ------------------------------------- Question 1 ------------------------------------------

Create a class called Person.

The constructor receives:
- name
- age

Create a method:
getInfo()

Example:

const person = new Person("Alice", 25);

console.log(person.getInfo());

Output:
"Alice is 25 years old."
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const person = new Person("Alice", 25);
console.log(person.getInfo());

/* ------------------------------------- Question 2 ------------------------------------------

Create a class called Rectangle.

The constructor receives:
- width
- height

Create methods:

getArea()
getPerimeter()

Example:

const rectangle = new Rectangle(5, 3);

console.log(rectangle.getArea());       // 15
console.log(rectangle.getPerimeter());  // 16
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

const rectangle = new Rectangle(5, 3);

console.log(rectangle.getArea()); // 15
console.log(rectangle.getPerimeter()); // 16

/* ------------------------------------- Question 3 ------------------------------------------

Create a class called BankAccount.

The constructor receives:
- owner
- balance

Create methods:

deposit(amount)
withdraw(amount)
getBalance()

Example:

const account = new BankAccount("Alice", 100);

account.deposit(50);
console.log(account.getBalance()); // 150

account.withdraw(30);
console.log(account.getBalance()); // 120

Requirements:

- deposit() should increase the balance
- withdraw() should decrease the balance
- Do not allow a withdrawal greater than the current balance
*/

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount("Alice", 100);

account.deposit(50);
console.log(account.getBalance()); // 150

account.withdraw(30);
console.log(account.getBalance()); // 120

/* ------------------------------------- Question 4 ------------------------------------------

Create a class called Wallet.

Private property:
- #money

The constructor receives:
- startingMoney

Create methods:

addMoney(amount)
spendMoney(amount)
getMoney()

Example:

const wallet = new Wallet(100);

wallet.addMoney(50);
console.log(wallet.getMoney()); // 150

wallet.spendMoney(40);
console.log(wallet.getMoney()); // 110

Requirements:

- #money must be private
- Do not allow spending more money than the wallet contains
*/

class Wallet {
  #money;

  constructor(startingMoney) {
    this.#money = startingMoney;
  }

  addMoney(amount) {
    this.#money += amount;
  }

  spendMoney(amount) {
    if (this.#money >= amount) {
      this.#money -= amount;
    }
  }

  getMoney() {
    return this.#money;
  }
}

const wallet = new Wallet(100);

wallet.addMoney(50);
console.log(wallet.getMoney()); // 150

wallet.spendMoney(40);
console.log(wallet.getMoney()); // 110

/* ------------------------------------- Question 5 ------------------------------------------

Create a class called UserProfile.

Private property:
- #password

The constructor receives:
- username
- password

The username can be public.
The password must be private.

Create methods:

checkPassword(password)
changePassword(oldPassword, newPassword)

Example:

const profile = new UserProfile("Alice", "hello123");

console.log(profile.checkPassword("wrong"));    // false
console.log(profile.checkPassword("hello123")); // true

profile.changePassword("hello123", "newPassword");

console.log(profile.checkPassword("newPassword")); // true

Requirements:

- #password must not be directly accessible
- checkPassword() returns true or false
- changePassword() should ONLY change the password if oldPassword
  matches the current password
*/

class UserProfile {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(password) {
    if (password === this.#password) {
      return true;
    } else {
      return false;
    }
  }

  changePassword(oldPassword, newPassword) {
    if (oldPassword === this.#password) {
      this.#password = newPassword;
    }
  }
}

const profile = new UserProfile("Alice", "hello123");

console.log(profile.checkPassword("wrong")); // false
console.log(profile.checkPassword("hello123")); // true

profile.changePassword("hello123", "newPassword");

console.log(profile.checkPassword("newPassword")); // true

/* ------------------------------------- Question 6 ------------------------------------------

Create a class called Temperature.

Private property:
- #celsius

The constructor receives:
- celsius

Create methods:

getCelsius()
setCelsius(temperature)
getFahrenheit()

Fahrenheit formula:

(celsius * 9 / 5) + 32

Example:

const temperature = new Temperature(20);

console.log(temperature.getCelsius());    // 20
console.log(temperature.getFahrenheit()); // 68

temperature.setCelsius(30);

console.log(temperature.getCelsius());    // 30
console.log(temperature.getFahrenheit()); // 86

Requirements:

- #celsius must be private
- All reading/changing of #celsius must happen through methods
*/

class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  getCelsius() {
    return this.#celsius;
  }

  setCelsius(temperature) {
    this.#celsius = temperature;
  }

  getFahrenheit() {
    return (this.#celsius * 9) / 5 + 32;
  }
}

const temperature = new Temperature(20);

console.log(temperature.getCelsius()); // 20
console.log(temperature.getFahrenheit()); // 68

temperature.setCelsius(30);

console.log(temperature.getCelsius()); // 30
console.log(temperature.getFahrenheit()); // 86

/* ------------------------------------- Question 7 ------------------------------------------

Create a class called GameCharacter.

Private property:
- #health

The constructor receives:
- name
- health

The name can be public.
Health must be private.

Create methods:

takeDamage(amount)
heal(amount)
getHealth()

Example:

const hero = new GameCharacter("Knight", 100);

hero.takeDamage(30);
console.log(hero.getHealth()); // 70

hero.heal(10);
console.log(hero.getHealth()); // 80

Requirements:

- #health must be private
- takeDamage() decreases health
- heal() increases health
- Health must NEVER go below 0

Example:

hero.takeDamage(500);
console.log(hero.getHealth()); // 0
*/

class GameCharacter {
  #health;

  constructor(name, health) {
    this.name = name;
    this.#health = health;
  }

  takeDamage(amount) {
    if (amount > this.#health) {
      this.#health = 0;
    } else {
      this.#health -= amount;
    }
  }

  heal(amount) {
    this.#health += amount;
  }

  getHealth() {
    return this.#health;
  }
}

const hero = new GameCharacter("Knight", 100);

hero.takeDamage(30);
console.log(hero.getHealth()); // 70

hero.heal(10);
console.log(hero.getHealth()); // 80

hero.takeDamage(500);
console.log(hero.getHealth()); // 0

/* ------------------------------------- Question 8 ------------------------------------------

Create a parent class called Animal.

The constructor receives:
- name

Create method:
getName()

Then create a child class called Dog that inherits from Animal.

Dog should also have method:
speak()

Example:

const dog = new Dog("Buddy");

console.log(dog.getName()); // "Buddy"
console.log(dog.speak());   // "Woof!"

Requirements:

- Dog must extend Animal
- Do NOT create another getName() inside Dog
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return "Woof!";
  }
}

const dog = new Dog("Buddy");

console.log(dog.getName()); // "Buddy"
console.log(dog.speak()); // "Woof!"

/* ------------------------------------- Question 9 ------------------------------------------

Create a parent class called Vehicle.

The constructor receives:
- brand

Create method:
getBrand()

Then create a child class called Car.

Car's constructor receives:
- brand
- model

Use super() to give brand to the Vehicle constructor.

Car should have method:
getInfo()

Example:

const car = new Car("Toyota", "Corolla");

console.log(car.getBrand()); // "Toyota"
console.log(car.getInfo());  // "Toyota Corolla"

Requirements:

- Car must extend Vehicle
- brand should be initialized by Vehicle
- model should be initialized by Car
- Use super()
*/

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getInfo() {
    return `${this.getBrand()} ${this.model}`;
  }
}

const car = new Car("Toyota", "Corolla");

console.log(car.getBrand()); // "Toyota"
console.log(car.getInfo()); // "Toyota Corolla"

/* ------------------------------------- Question 10 -----------------------------------------

Create a parent class called Employee.

The constructor receives:
- name
- salary

Create method:
getDetails()

It should return:

"<name> earns $<salary>"

Then create a child class called Manager.

Manager's constructor receives:
- name
- salary
- department

Use super() for the properties inherited from Employee.

OVERRIDE getDetails() inside Manager.

Employee example:

const employee = new Employee("Alice", 50000);

console.log(employee.getDetails());
// "Alice earns $50000"


Manager example:

const manager = new Manager("Bob", 80000, "Engineering");

console.log(manager.getDetails());
// "Bob manages Engineering and earns $80000"

Requirements:

- Manager must extend Employee
- Use super()
- Manager should inherit name and salary
- Manager should have its own department property
- Manager must override getDetails()
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns $${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return `${this.name} manages ${this.department} and earns $${this.salary}`;
  }
}

const employee = new Employee("Alice", 50000);
console.log(employee.getDetails());
// "Alice earns $50000"

const manager = new Manager("Bob", 80000, "Engineering");
console.log(manager.getDetails());
// "Bob manages Engineering and earns $80000"

/* ------------------------------------- Question 11 -----------------------------------------

Create a class called Product.

The constructor receives:
- name
- price

Then create a separate class called ShoppingCart.

ShoppingCart should contain a private array:
- #products

Create methods:

addProduct(product)
getTotal()

Example:

const apple = new Product("Apple", 2);
const bread = new Product("Bread", 4);
const milk = new Product("Milk", 3);

const cart = new ShoppingCart();

cart.addProduct(apple);
cart.addProduct(bread);
cart.addProduct(milk);

console.log(cart.getTotal()); // 9

Requirements:

- ShoppingCart should NOT extend Product
- #products must be private
- addProduct() receives a Product object
- getTotal() returns the total price of all products

Think about the relationship:
A ShoppingCart HAS Products.
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  #products;

  constructor() {
    this.#products = [];
  }

  addProduct(products) {
    this.#products.push(products);
  }
  getTotal() {
    return this.#products.reduce((total, product) => {
      return (total += product.price);
    }, 0);
  }
}

const apple = new Product("Apple", 2);
const bread = new Product("Bread", 4);
const milk = new Product("Milk", 3);

const cart = new ShoppingCart();

cart.addProduct(apple);
cart.addProduct(bread);
cart.addProduct(milk);

console.log(cart.getTotal()); // 9

/* ------------------------------------- Question 12 -----------------------------------------

Create a class called Course.

The constructor receives:
- title

Course should contain a private array:
- #students

Create methods:

addStudent(student)
getStudentCount()
getStudentNames()

Then create a separate class called Student.

Student receives:
- name

Example:

const javascript = new Course("JavaScript");

const student1 = new Student("Alice");
const student2 = new Student("Bob");

javascript.addStudent(student1);
javascript.addStudent(student2);

console.log(javascript.getStudentCount());
// 2

console.log(javascript.getStudentNames());
// ["Alice", "Bob"]

Requirements:

- Course should NOT extend Student
- #students must be private
- Store Student objects inside #students
- getStudentNames() must return an array of names

Think about the relationship:
A Course HAS Students.
*/

class Course {
  #students;

  constructor(title) {
    this.title = title;
    this.#students = [];
  }

  addStudent(student) {
    this.#students.push(student);
  }

  getStudentCount() {
    return this.#students.length;
  }

  getStudentNames() {
    let names = [];

    this.#students.forEach((student) => {
      names.push(student.name);
    });

    return names;
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
}

const javascript = new Course("JavaScript");

const student1 = new Student("Alice");
const student2 = new Student("Bob");

javascript.addStudent(student1);
javascript.addStudent(student2);

console.log(javascript.getStudentCount());
// 2

console.log(javascript.getStudentNames());
// ["Alice", "Bob"]

/* ------------------------------------- Question 13 -----------------------------------------

Create THREE separate classes:

EmailNotification
SMSNotification
PushNotification

Each class should have a method:

send(message)

But each implementation should return something different.

EmailNotification:

send("Hello")
// "Email: Hello"

SMSNotification:

send("Hello")
// "SMS: Hello"

PushNotification:

send("Hello")
// "Push: Hello"


Then create this function:

function sendNotification(notification, message) {
  // your code
}


Example:

const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

console.log(sendNotification(email, "Welcome!"));
// "Email: Welcome!"

console.log(sendNotification(sms, "Your order shipped!"));
// "SMS: Your order shipped!"

console.log(sendNotification(push, "New message!"));
// "Push: New message!"

Requirements:

- All three classes must have a send() method
- sendNotification() should work with ANY of the three objects
- Do NOT use if/else to determine which notification type was passed
*/

class EmailNotification {
  send(message) {
    return `Email: ${message}`;
  }
}

class SMSNotification {
  send(message) {
    return `SMS: ${message}`;
  }
}

class PushNotification {
  send(message) {
    return `Push: ${message}`;
  }
}

function sendNotification(notification, message) {
  return notification.send(message);
}

const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

console.log(sendNotification(email, "Welcome!"));
// "Email: Welcome!"

console.log(sendNotification(sms, "Your order shipped!"));
// "SMS: Your order shipped!"

console.log(sendNotification(push, "New message!"));
// "Push: New message!"
