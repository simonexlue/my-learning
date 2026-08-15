/* ------------------------------------- Question 1 ------------------------------------------

Build a library system.

Create the classes you think are necessary.

A book has:
- title
- author
- availability status

A library:
- starts with no books
- can add books
- can lend a book to a user
- can accept a returned book
- can return an array containing the titles of all currently available books

Example:

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Dune", "Frank Herbert");
const book3 = new Book("The Hobbit", "J.R.R. Tolkien");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.borrowBook("Dune");

console.log(library.getAvailableBooks());
// ["1984", "The Hobbit"]

library.returnBook("Dune");

console.log(library.getAvailableBooks());
// ["1984", "Dune", "The Hobbit"]

Requirements:

- A book should start as available.
- A book's availability should not be directly changeable from outside its class.
- borrowBook() should find the book using its title.
- An unavailable book cannot be borrowed again.
- Returning a book should make it available again.
- Store Book objects, not just book titles.
*/

class Book {
  #available;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.#available = true;
  }

  isAvailable() {
    return this.#available;
  }

  makeUnavailable() {
    this.#available = false;
  }

  makeAvailable() {
    this.#available = true;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  borrowBook(title) {
    // Find book by title
    // Check if its available
    let foundBook = this.books.filter((book) => book.title == title);
    foundBook.forEach((book) => {
      if (book.isAvailable()) {
        book.makeUnavailable();
      } else {
        console.log("Sorry, book is currently unavailable");
      }
    });
  }

  returnBook(title) {
    let foundBook = this.books.filter((book) => book.title == title);
    foundBook.forEach((book) => {
      if (!book.isAvailable()) {
        book.makeAvailable();
      } else {
        console.log("This book is already available");
      }
    });
  }

  getAvailableBooks() {
    return this.books
      .filter((book) => book.isAvailable())
      .map((book) => book.title);
  }
}

const book1 = new Book("1984", "George Orwell");
const book2 = new Book("Dune", "Frank Herbert");
const book3 = new Book("The Hobbit", "J.R.R. Tolkien");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.borrowBook("Dune");

console.log(library.getAvailableBooks());
// ["1984", "The Hobbit"]

library.returnBook("Dune");

console.log(library.getAvailableBooks());
// ["1984", "Dune", "The Hobbit"]

/* ------------------------------------- Question 2 ------------------------------------------

Build an employee payroll system.

Every employee has:
- name

There are two types of employees:

FullTimeEmployee
- receives a fixed monthly salary

HourlyEmployee
- receives an hourly rate
- has a number of hours worked

Each employee must provide:

calculatePay()

Example:

const employee1 = new FullTimeEmployee("Alice", 5000);
const employee2 = new HourlyEmployee("Bob", 25, 120);
const employee3 = new FullTimeEmployee("Charlie", 4500);

console.log(employee1.calculatePay());
// 5000

console.log(employee2.calculatePay());
// 3000


Create a Payroll class.

Payroll:
- stores employees
- can add employees
- can calculate the combined payroll

Example:

const payroll = new Payroll();

payroll.addEmployee(employee1);
payroll.addEmployee(employee2);
payroll.addEmployee(employee3);

console.log(payroll.calculateTotal());
// 12500

Requirements:

- Avoid duplicating shared employee data unnecessarily.
- Payroll must store employee objects.
- Payroll should not need to check which type of employee it receives.
- Do NOT use conditions like:

if (employee.type === "fullTime") ...

- calculateTotal() should work by asking each employee to calculate its own pay.
*/

class Employee {
  constructor(name) {
    this.name = name;
  }
}

class FullTimeEmployee extends Employee {
  constructor(name, salary) {
    super(name);
    this.salary = salary;
  }

  calculatePay() {
    return this.salary;
  }
}

class HourlyEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super(name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay() {
    return this.hourlyRate * this.hoursWorked;
  }
}

class Payroll {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  calculateTotal() {
    return this.employees.reduce((total, employee) => {
      return (total += employee.calculatePay());
    }, 0);
  }
}

const employee1 = new FullTimeEmployee("Alice", 5000);
const employee2 = new HourlyEmployee("Bob", 25, 120);
const employee3 = new FullTimeEmployee("Charlie", 4500);

console.log(employee1.calculatePay()); // 5000
console.log(employee2.calculatePay()); // 3000

const payroll = new Payroll();

payroll.addEmployee(employee1);
payroll.addEmployee(employee2);
payroll.addEmployee(employee3);

console.log(payroll.calculateTotal()); // 12500

/* ------------------------------------- Question 3 ------------------------------------------

Build an online order system.

A product has:
- name
- price

An order:
- can contain multiple products
- can add products
- can calculate its subtotal

There are three discount types:

NoDiscount
- leaves the price unchanged

PercentageDiscount
- receives a percentage such as 20
- reduces the subtotal by that percentage

FixedDiscount
- receives a fixed amount such as 15
- subtracts that amount from the subtotal
- the final total must never go below 0


The Order should receive its discount when it is created.

Example:

const laptop = new StoreProduct("Laptop", 1000);
const mouse = new StoreProduct("Mouse", 50);

const twentyPercent = new PercentageDiscount(20);

const order = new Order(twentyPercent);

order.addProduct(laptop);
order.addProduct(mouse);

console.log(order.getSubtotal());
// 1050

console.log(order.getTotal());
// 840


Another example:

const fixedDiscount = new FixedDiscount(100);

const secondOrder = new Order(fixedDiscount);

secondOrder.addProduct(new StoreProduct("Keyboard", 80));

console.log(secondOrder.getTotal());
// 0

Requirements:

- Store product objects inside the Order.
- The product collection should not be directly accessible from outside Order.
- Every discount class should provide the SAME method:

apply(amount)

- Order should not contain if/else statements checking which discount type it has.
- getTotal() should calculate the subtotal and then use the discount object it received.
*/

class StoreProduct {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class NoDiscount {
  constructor(discount) {
    this.discount = discount;
  }

  apply(amount) {
    return amount;
  }
}

class FixedDiscount {
  constructor(discount) {
    this.discount = discount;
  }

  apply(amount) {
    const total = amount - this.discount;

    if (total < 0) {
      return 0;
    }

    return total;
  }
}

class PercentageDiscount {
  constructor(discount) {
    this.discount = discount;
  }

  apply(amount) {
    return amount - amount * (this.discount / 100);
  }
}

class Order {
  #products;
  constructor(discount) {
    this.#products = [];
    this.discount = discount;
  }

  addProduct(product) {
    this.#products.push(product);
  }

  getSubtotal() {
    return this.#products.reduce((total, product) => {
      return (total += product.price);
    }, 0);
  }

  getTotal() {
    return this.discount.apply(this.getSubtotal());
  }
}

const laptop = new StoreProduct("Laptop", 1000);
const mouse = new StoreProduct("Mouse", 50);
const twentyPercent = new PercentageDiscount(20);
const order = new Order(twentyPercent);

order.addProduct(laptop);
order.addProduct(mouse);

console.log(order.getSubtotal()); // 1050
console.log(order.getTotal()); // 840

const fixedDiscount = new FixedDiscount(100);
const secondOrder = new Order(fixedDiscount);

secondOrder.addProduct(new StoreProduct("Keyboard", 80));

console.log(secondOrder.getTotal()); // 0

/* ------------------------------------- Question 4 ------------------------------------------

Build a simple messaging system.

There are three message senders:

EmailSender
SMSSender
PushSender

Each sender has:

send(recipient, message)

and returns:

EmailSender:
"Email to Alice: Meeting at 3"

SMSSender:
"SMS to Alice: Meeting at 3"

PushSender:
"Push to Alice: Meeting at 3"


Create a Contact class.

A contact has:
- name
- a sender

Create method:

sendMessage(message)

Example:

const emailSender = new EmailSender();
const smsSender = new SMSSender();

const alice = new Contact("Alice", emailSender);
const bob = new Contact("Bob", smsSender);

console.log(alice.sendMessage("Hello!"));
// "Email to Alice: Hello!"

console.log(bob.sendMessage("Your order is ready"));
// "SMS to Bob: Your order is ready"


Add this method to Contact:

changeSender(sender)

Example:

alice.changeSender(new PushSender());

console.log(alice.sendMessage("New notification"));
// "Push to Alice: New notification"

Requirements:

- Contact should not use if/else to determine the sender type.
- Contact should be able to switch sender objects.
- Adding another sender type later should not require changing Contact.
*/

class EmailSender {
  send(recipient, message) {
    return `Email to ${recipient}: ${message}`;
  }
}

class SMSSender {
  send(recipient, message) {
    return `SMS to ${recipient}: ${message}`;
  }
}

class PushSender {
  send(recipient, message) {
    return `Push to ${recipient}: ${message}`;
  }
}

class Contact {
  constructor(name, sender) {
    this.name = name;
    this.sender = sender;
  }

  sendMessage(message) {
    return this.sender.send(this.name, message);
  }

  changeSender(sender) {
    this.sender = sender;
  }
}

const emailSender = new EmailSender();
const smsSender = new SMSSender();

const alice = new Contact("Alice", emailSender);
const bob = new Contact("Bob", smsSender);

console.log(alice.sendMessage("Hello!")); // "Email to Alice: Hello!"
console.log(bob.sendMessage("Your order is ready")); // "SMS to Bob: Your order is ready"

alice.changeSender(new PushSender());

console.log(alice.sendMessage("New notification")); // "Push to Alice: New notification"

/* ------------------------------------- Question 5 ------------------------------------------

Build a school grading system.

A StudentRecord has:
- name
- private collection of grades

Methods:

addGrade(grade)
getAverage()

Example:

const record1 = new StudentRecord("Alice");
record1.addGrade(80);
record1.addGrade(90);
record1.addGrade(100);

console.log(record1.getAverage());
// 90


Create a GraduateRecord that shares the appropriate behavior from
StudentRecord but also has:

hasPassed()

A graduate student passes when their average is at least 70.

Example:

const graduate = new GraduateRecord("Bob");

graduate.addGrade(65);
graduate.addGrade(75);
graduate.addGrade(80);

console.log(graduate.getAverage());
// 73.33...

console.log(graduate.hasPassed());
// true


Create a Classroom.

Classroom:
- stores student record objects
- can add students
- can return the name of the student with the highest average

Example:

const classroom = new Classroom();

classroom.addStudent(record1);
classroom.addStudent(graduate);

console.log(classroom.getTopStudent());
// "Alice"

Requirements:

- Grades must not be directly accessible outside StudentRecord.
- GraduateRecord should reuse the appropriate StudentRecord behavior.
- Classroom should store the actual student objects.
- getTopStudent() must work with both StudentRecord and GraduateRecord objects.
- Do not duplicate grade-management logic.
*/

class StudentRecord {
  #grades;
  constructor(name) {
    this.name = name;
    this.#grades = [];
  }

  addGrade(grade) {
    this.#grades.push(grade);
  }

  getAverage() {
    if (this.#grades.length === 0) {
      return 0;
    }

    const total = this.#grades.reduce((total, grade) => {
      return (total += grade);
    }, 0);

    return total / this.#grades.length;
  }
}

class GraduateRecord extends StudentRecord {
  constructor(name) {
    super(name);
  }

  hasPassed() {
    if (this.getAverage() >= 70) {
      return true;
    }

    return false;
  }
}

class Classroom {
  constructor() {
    this.students = [];
  }

  addStudent(record) {
    this.students.push(record);
  }

  getTopStudent() {
    let currentHighest = { name: "", average: 0 };

    this.students.forEach((student) => {
      const average = student.getAverage();
      if (average > currentHighest.average) {
        currentHighest.name = student.name;
        currentHighest.average = average;
      }
    });

    return currentHighest.name;
  }
}

const record1 = new StudentRecord("Alice");
record1.addGrade(80);
record1.addGrade(90);
record1.addGrade(100);

console.log(record1.getAverage()); // 90

const graduate = new GraduateRecord("Bob");

graduate.addGrade(65);
graduate.addGrade(75);
graduate.addGrade(80);

console.log(graduate.getAverage()); // 73.33...
console.log(graduate.hasPassed()); // true

const classroom = new Classroom();

classroom.addStudent(record1);
classroom.addStudent(graduate);

console.log(classroom.getTopStudent()); // "Alice"
