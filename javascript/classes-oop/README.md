# JavaScript Classes & OOP

## Progress Log

### August 14, 2026

#### Topics Covered

- JavaScript classes
- Creating objects with `new`
- `constructor()`
- `this`
- Instance properties
- Instance methods
- Private fields with `#`
- Encapsulation
- Inheritance
- `extends`
- `super()`
- Method overriding
- Composition
- Polymorphism
- Designing relationships between multiple classes
- Managing collections of objects
- Interchangeable object behavior
- Combining inheritance, composition, and encapsulation

#### Exercises Completed

- ✅ Easy Questions (1–13)
- ✅ Medium Questions (1–5)
- ⬜ Hard Questions

---

# Notes

## Classes

A class is a blueprint for creating objects that share properties and methods.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const user = new User("Alice");
```

---

## `constructor()` and `this`

The constructor runs when an object is created with `new`.

`this` refers to the current object instance.

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
```

---

## Encapsulation

Encapsulation protects an object's internal state and controls how it can be accessed or changed.

Private fields use `#`.

```js
class Wallet {
  #money;

  constructor(money) {
    this.#money = money;
  }

  getMoney() {
    return this.#money;
  }
}
```

Outside code cannot directly access:

```js
wallet.#money; // ❌
```

Instead, it must use the methods provided by the class.

---

## Inheritance

Inheritance allows one class to reuse properties and methods from another.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  speak() {
    return "Woof!";
  }
}
```

Think:

> `Dog` **IS AN** `Animal`.

---

## `super()`

`super()` calls the parent class's constructor.

```js
class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
}
```

The parent handles `brand`, while the child handles `model`.

---

## Method Overriding

A child class can provide its own version of an inherited method.

```js
class Employee {
  getDetails() {
    return "Employee";
  }
}

class Manager extends Employee {
  getDetails() {
    return "Manager";
  }
}
```

---

## Composition

Composition means one object contains or uses other objects.

Think:

> `ShoppingCart` **HAS** `Products`.

```js
class ShoppingCart {
  #products = [];

  addProduct(product) {
    this.#products.push(product);
  }
}
```

Composition is different from inheritance:

```text
Dog IS AN Animal            → inheritance

ShoppingCart HAS Products   → composition
```

---

## Polymorphism

Different objects can provide the same method while implementing different behavior.

```js
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
```

Other code can simply call:

```js
function notify(notification, message) {
  return notification.send(message);
}
```

It does not need to know which specific notification class it received.

The same pattern can be used with different kinds of behavior:

```js
discount.apply(amount);
employee.calculatePay();
sender.send(recipient, message);
```

The calling class does not need to know which specific implementation it received.

---

# OOP Relationships

When designing multiple classes, first think about how the objects relate to each other.

## IS-A

Usually indicates inheritance.

```text
FullTimeEmployee IS AN Employee
HourlyEmployee IS AN Employee
GraduateRecord IS A StudentRecord
```

## HAS-A

Usually indicates composition.

```text
Library HAS Books
Payroll HAS Employees
Order HAS Products
Contact HAS a Sender
```

---

# Medium OOP Patterns Practiced

## Objects Managing Other Objects

Classes can store and work with collections of other objects.

```js
addEmployee(employee) {
  this.employees.push(employee);
}
```

The complete object should usually be stored when its other properties or methods will be needed later.

---

## Asking Objects to Perform Their Own Behavior

Instead of one class determining what type of object it received:

```js
if (employee.type === "fullTime") {
  // ...
}
```

the object can provide its own behavior:

```js
employee.calculatePay();
```

This allows different employee types to calculate their pay differently.

---

## Interchangeable Objects

A class can receive another object and use a common method without knowing its exact class.

```js
class Order {
  constructor(discount) {
    this.discount = discount;
  }

  getTotal() {
    return this.discount.apply(this.getSubtotal());
  }
}
```

Different discount objects can then provide different implementations:

```js
NoDiscount;
PercentageDiscount;
FixedDiscount;
```

while `Order` always uses:

```js
this.discount.apply(amount);
```

---

## Changing Behavior Through Composition

An object can change its behavior by replacing an object it uses.

```js
changeSender(sender) {
  this.sender = sender;
}
```

For example:

```js
contact.changeSender(new PushSender());
```

The `Contact` class itself does not need to change.

---

# Key Takeaways

- Classes are blueprints for creating objects.
- `constructor()` initializes an object's state.
- `this` refers to the current instance.
- Private `#` fields protect internal state.
- Encapsulation controls how state is accessed and modified.
- Inheritance represents an **IS-A** relationship.
- `extends` creates a child class.
- `super()` calls the parent constructor.
- Child classes can override inherited methods.
- Composition represents a **HAS-A** relationship.
- Classes can store and interact with other objects.
- Polymorphism allows different objects to respond to the same method differently.
- Code can ask an object to perform its own behavior instead of checking what type it is.
- Objects can be swapped to change behavior without rewriting the class that uses them.

---

# Common Mistakes

## Forgetting to Return a Value

Calling or calculating something does not automatically return it.

```js
getStudentCount() {
  this.#students.length; // ❌ returns undefined
}
```

Instead:

```js
getStudentCount() {
  return this.#students.length;
}
```

---

## Confusing Inheritance and Composition

Ask:

```text
IS-A relationship  → inheritance

HAS-A relationship → composition
```

---

## Checking Object Types Instead of Using Polymorphism

Avoid designs like:

```js
if (employee.type === "fullTime") {
  // ...
} else if (employee.type === "hourly") {
  // ...
}
```

Prefer giving each object the same method:

```js
employee.calculatePay();
```

and letting each class decide how that method works.

---

# Next Steps

## Hard OOP

Increase the difficulty while continuing to practice the same OOP concepts:

- Design larger systems with multiple interacting classes
- Decide between inheritance and composition independently
- Combine encapsulation, inheritance, composition, and polymorphism
- Manage more complex object state
- Handle additional edge cases and business rules
- Design clean relationships between objects without being told which OOP concept to use

## After OOP

Create a separate **SOLID** folder and introduce each principle at Easy difficulty:

1. Single Responsibility Principle (SRP)
2. Open/Closed Principle (OCP)
3. Liskov Substitution Principle (LSP)
4. Interface Segregation Principle (ISP)
5. Dependency Inversion Principle (DIP)

Then increase SOLID difficulty separately after each principle has been introduced and practiced.
