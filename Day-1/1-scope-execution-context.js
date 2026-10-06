
// JavaScript Scope & Execution Context

// Definition:
// Execution Context is the environment created by JavaScript
// to execute a piece of code.

// JavaScript mainly has:
// 1. Global Execution Context
// 2. Function Execution Context


// =====================================
// 1. Global Execution Context
// =====================================

// The Global Execution Context is created when JavaScript
// starts executing the program.

let name = "Najila";

function greet() {
    console.log("Hello");
}

console.log(name);


// Output:
// Najila


// =====================================
// 2. Function Execution Context
// =====================================

// A Function Execution Context is created whenever
// a function is called.

function addNumbers() {
    let a = 10;
    let b = 20;

    console.log(a + b);
}

addNumbers();


// Output:
// 30


// =====================================
// 3. Two Phases of Execution
// =====================================

// JavaScript executes code mainly in two phases:
//
// 1. Creation Phase
// 2. Execution Phase


// Creation Phase:
// JavaScript prepares variables and functions.
//
// var → initialized with undefined
// let/const → created but remain uninitialized
// Function declarations → stored completely


// Execution Phase:
// JavaScript executes the code line by line
// and assigns actual values to variables.


// Example:

var age = 33;

console.log(age);


// During Creation Phase:
// age → undefined
//
// During Execution Phase:
// age → 33


// Output:
// 33


// =====================================
// 4. Hoisting
// =====================================

// Hoisting means JavaScript prepares declarations
// during the creation phase before executing the code.

// Example with var:

console.log(number);

var number = 10;


// Output:
// undefined


// Why?
// During Creation Phase:
// number → undefined
//
// During Execution Phase:
// console.log(number) → undefined
// number = 10


// Function declarations are also hoisted.

sayHello();

function sayHello() {
    console.log("Hello!");
}


// Output:
// Hello!


// =====================================
// 5. Temporal Dead Zone (TDZ)
// =====================================

// let and const are hoisted,
// but they are not initialized immediately.
//
// The time between entering the scope and
// reaching the declaration is called
// the Temporal Dead Zone (TDZ).


// Example:

// console.log(city);

let city = "Kochi";

console.log(city);


// The first console.log is commented out
// because accessing city before its declaration
// causes a ReferenceError.


// Output:
// Kochi


// =====================================
// 6. Call Stack Behaviour
// =====================================

// The Call Stack keeps track of function execution.

// When JavaScript calls a function:
// 1. A Function Execution Context is created.
// 2. It is pushed onto the Call Stack.
// 3. The function executes.
// 4. After completion, it is removed from the stack.

function first() {
    second();
}

function second() {
    console.log("Inside second function");
}

first();


// Call Stack flow:
//
// Global Execution Context
//        ↓
// first()
//        ↓
// second()
//        ↓
// second() completes
//        ↓
// second() removed
//        ↓
// first() completes
//        ↓
// first() removed


// Output:
// Inside second function


// =====================================
// Final Conclusion
// =====================================

// ✔ JavaScript creates an Execution Context to run code.
// ✔ Global Execution Context is created first.
// ✔ Function Execution Context is created when a function is called.
// ✔ JavaScript executes code in Creation and Execution phases.
// ✔ var is initialized with undefined during creation.
// ✔ let and const remain uninitialized and have a TDZ.
// ✔ Hoisting happens during the creation phase.
// ✔ The Call Stack manages execution contexts.
// ✔ The last function added to the Call Stack is completed first.