# JavaScript Classes & OOP

## Progress Log

### August 13, 2026

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
- Basic polymorphism

#### Exercises Completed

- ✅ Easy Questions (1–13)
- ⬜ Medium Questions
- ⬜ Hard / Design Questions

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

---

# Key Takeaways

- Classes are blueprints for creating objects.
- `constructor()` initializes an object's state.
- `this` refers to the current instance.
- Private `#` fields help protect internal state.
- Encapsulation controls how state is accessed and modified.
- Inheritance represents an **IS-A** relationship.
- `extends` creates a child class.
- `super()` calls the parent constructor.
- Child classes can override inherited methods.
- Composition represents a **HAS-A** relationship.
- Polymorphism allows different objects to be used through the same methods.

---

# Common Mistakes

### Storing the wrong thing during composition

If a class should store objects:

```js
this.#students.push(student); // ✅
```

not just:

```js
this.#students.push(student.name);
```

This preserves access to the entire object.

---

### Confusing inheritance and composition

Ask:

```text
IS-A relationship  → inheritance

HAS-A relationship → composition
```

---

# Next Steps

## Medium OOP

- Combine multiple classes
- Decide between inheritance and composition
- Work with private state
- Override behavior
- Manage collections of objects
- Use polymorphism without explicit type checks
- Solve problems without being told which OOP concept to use

## After OOP

Move into **SOLID principles**:

- Single Responsibility Principle
- Open/Closed Principle
- Liskov Substitution Principle
- Interface Segregation Principle
- Dependency Inversion Principle
