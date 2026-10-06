// =====================================
// Closures
// =====================================

// Definition:
// A closure is created when an inner function
// remembers and can access variables from
// its outer function even after the outer
// function has finished executing.


// =====================================
// 1. Basic Closure
// =====================================

function outerFunction() {

    let message = "Hello";

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

let result = outerFunction();

result();


// Output:
// Hello


// =====================================
// 2. How Does This Work?
// =====================================

// First:
//
// outerFunction()
//       ↓
// creates message
//       ↓
// creates innerFunction
//       ↓
// returns innerFunction
//       ↓
// outerFunction finishes


// But innerFunction still remembers
// the variable message.
//
// This remembering ability is called
// CLOSURE.


// =====================================
// 3. Closure Remembers Variables
// =====================================

function createGreeting() {

    let name = "Najila";

    return function () {
        console.log("Hello " + name);
    };
}

let greet = createGreeting();

greet();


// Output:
// Hello Najila


// Even though createGreeting()
// has finished executing,
// the returned function still has
// access to name.


// =====================================
// 4. Closure with a Counter
// =====================================

function createCounter() {

    let count = 0;

    return function () {

        count++;

        console.log(count);
    };
}

let counter = createCounter();

counter();
counter();
counter();
counter();


// Output:
// 1
// 2
// 3
// 4


// =====================================
// 5. Why Does count Remember?
// =====================================

// Normally, we may think:
//
// createCounter()
// finishes
//       ↓
// its variables disappear
//
// But the returned inner function
// still uses count.
//
// Therefore, JavaScript keeps the
// required variable available.

// The inner function has a closure
// over count.


// =====================================
// 6. Multiple Closures
// =====================================

function createCounter() {

    let count = 0;

    return function () {
        count++;
        return count;
    };
}

let counterOne = createCounter();
let counterTwo = createCounter();

console.log(counterOne());
console.log(counterOne());

console.log(counterTwo());
console.log(counterTwo());


// Output:
// 1
// 2
// 1
// 2


// counterOne and counterTwo have
// separate closure environments.
//
// counterOne → count = 2
// counterTwo → count = 2


// =====================================
// 7. Closure and Lexical Scope
// =====================================

// Closures are closely related to
// lexical scope.
//
// An inner function can access variables
// from its outer scope.

function outer() {

    let x = 10;

    function inner() {
        console.log(x);
    }

    inner();
}

outer();


// Output:
// 10


// =====================================
// 8. Practical Use of Closures
// =====================================

// Closures can be used to create
// private data.

function createBankAccount() {

    let balance = 1000;

    return function () {

        balance += 500;

        console.log(balance);
    };
}

let account = createBankAccount();

account();
account();


// Output:
// 1500
// 2000


// balance cannot be directly accessed
// from outside the function.
//
// The returned function controls access
// to balance.


// =====================================
// Final Conclusion
// =====================================

// ✔ Closure allows an inner function to
//   remember variables from its outer scope.
//
// ✔ The outer function can finish executing,
//   but the required variables can remain
//   accessible to the inner function.
//
// ✔ Closures are based on lexical scope.
//
// ✔ Each call to the outer function can
//   create a separate closure.
//
// ✔ Closures are useful for:
//   - Data privacy
//   - Counters
//   - Maintaining state
//   - Factory functions


// =====================================
// Memory Trick
// =====================================

// CLOSURE = FUNCTION + REMEMBERED OUTER VARIABLES