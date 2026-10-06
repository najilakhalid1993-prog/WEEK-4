// =====================================
// JavaScript is a Single-Threaded Language
// =====================================

// Definition:
// JavaScript is a single-threaded language,
// which means it can execute one piece of
// JavaScript code at a time.

// It has only one main Call Stack.


// =====================================
// 1. One Task at a Time
// =====================================

console.log("First");
console.log("Second");
console.log("Third");


// Output:
// First
// Second
// Third


// JavaScript executes them one after another:
//
// First
//   ↓
// Second
//   ↓
// Third


// =====================================
// 2. Function Execution
// =====================================

function firstTask() {
    console.log("First task");
}

function secondTask() {
    console.log("Second task");
}

firstTask();
secondTask();


// Output:
// First task
// Second task


// The Call Stack handles one execution at a time.
//
// firstTask()
//     ↓
// completes
//     ↓
// removed from Call Stack
//     ↓
// secondTask()
//     ↓
// completes
//     ↓
// removed from Call Stack


// =====================================
// 3. Single Thread
// =====================================

// A thread is a path of execution.
//
// Single-threaded means JavaScript has
// one main thread for executing JavaScript code.
//
// Therefore, two JavaScript statements
// cannot execute at exactly the same time
// on the main thread.


// Example:

console.log("A");

console.log("B");

console.log("C");


// Output:
// A
// B
// C


// =====================================
// 4. Does Single-Threaded Mean JavaScript
//    Cannot Handle Multiple Tasks?
// =====================================

// No.
//
// JavaScript can handle tasks such as:
// ✔ Timers
// ✔ API requests
// ✔ User events
// ✔ Other asynchronous operations
//
// JavaScript uses the browser's Web APIs,
// Callback Queue, and Event Loop to manage
// asynchronous tasks.


// Example:

console.log("Start");

setTimeout(function () {
    console.log("Timer finished");
}, 2000);

console.log("End");


// Output:
//
// Start
// End
// Timer finished


// Why?
//
// JavaScript first executes:
//
// console.log("Start")
//        ↓
// setTimeout()
//        ↓
// console.log("End")
//
// The timer is handled outside the main
// JavaScript execution by the environment.
//
// After the timer finishes, its callback
// can be moved toward the Call Stack
// through the Event Loop.


// =====================================
// 5. Important Concept
// =====================================

// JavaScript:
// ✔ Is single-threaded.
// ✔ Has one main Call Stack.
// ✔ Executes synchronous code one at a time.
// ✔ Can handle asynchronous operations
//   using the JavaScript runtime environment,
//   Web APIs, Callback Queue, and Event Loop.


// =====================================
// Final Conclusion
// =====================================

// ✔ Single-threaded = one main execution thread.
// ✔ JavaScript executes one piece of code at a time.
// ✔ The Call Stack manages JavaScript execution.
// ✔ Asynchronous operations allow JavaScript
//   to handle tasks without blocking the main thread.
// ✔ The Event Loop helps coordinate asynchronous callbacks.