/*
========================================================
DAY 4 - FILE 1
TOPIC: SYNCHRONOUS VS ASYNCHRONOUS JAVASCRIPT
========================================================

CONTENTS:
1. Introduction
2. Synchronous JavaScript
3. Asynchronous JavaScript
4. Practical examples
5. setTimeout()
6. Blocking vs non-blocking execution
7. Real-life examples
8. Comparison table
9. Important points
10. Practice questions

========================================================
1. INTRODUCTION
========================================================

JavaScript executes code using a single main thread
for ordinary synchronous JavaScript execution.

It executes statements in a particular order.

There are two important concepts:

1. Synchronous JavaScript
2. Asynchronous JavaScript

These concepts help us understand how JavaScript
handles immediate tasks and operations that finish later.


========================================================
2. SYNCHRONOUS JAVASCRIPT
========================================================

DEFINITION:

Synchronous JavaScript executes statements one after
another, in order.

The next statement waits until the current statement
has finished executing.

SYNTAX:

statement1;
statement2;
statement3;

EXAMPLE 1: BASIC SYNCHRONOUS EXECUTION

console.log("First");
console.log("Second");
console.log("Third");

EXPECTED OUTPUT:

First
Second
Third

EXPLANATION:

1. First statement prints "First".
2. Second statement prints "Second".
3. Third statement prints "Third".

Each statement executes in order.


========================================================
3. SYNCHRONOUS FUNCTION EXECUTION
========================================================

EXAMPLE 2:

console.log("Before function");

function greet() {
    console.log("Hello from the function");
}

greet();

console.log("After function");

EXPECTED OUTPUT:

Before function
Hello from the function
After function

EXPLANATION:

When JavaScript reaches greet(), it calls the function.

The function executes before JavaScript moves to the
next statement after the function call.

Therefore, the function message appears in the middle.


========================================================
4. ASYNCHRONOUS JAVASCRIPT
========================================================

DEFINITION:

Asynchronous JavaScript allows certain operations to
finish later without blocking the main thread while
they are waiting.

Examples include:

1. Timers
2. Network requests
3. Some file operations in Node.js
4. User-interface events

EXAMPLE 3: USING setTimeout()

console.log("Start");

setTimeout(function () {
    console.log("Timer finished");
}, 2000);

console.log("End");

EXPECTED OUTPUT:

Start
End
Timer finished

EXPLANATION:

1. "Start" prints immediately.
2. setTimeout() schedules a callback.
3. JavaScript continues executing the next statement.
4. "End" prints immediately.
5. After approximately 2 seconds, the callback runs.

IMPORTANT:

setTimeout() schedules a callback after a minimum delay.
It does not guarantee that the callback runs at the
exact millisecond specified.

It also does not pause the entire program.


========================================================
5. WHAT IS setTimeout()?
========================================================

DEFINITION:

setTimeout() is a JavaScript function that schedules
a callback to execute after a specified delay.

SYNTAX:

setTimeout(callback, delay);

PARAMETERS:

callback:
The function that will execute later.

delay:
The requested delay in milliseconds.

CONVERSION:

1000 milliseconds = 1 second
2000 milliseconds = 2 seconds
3000 milliseconds = 3 seconds

EXAMPLE 4:

setTimeout(() => {
    console.log("Hello after 3 seconds");
}, 3000);

EXPECTED OUTPUT:

Hello after approximately 3 seconds

NOTE:

The actual execution may happen later if the main
thread is busy or the environment delays the callback.


========================================================
6. BLOCKING VS NON-BLOCKING EXECUTION
========================================================

BLOCKING:

A blocking operation prevents further code on the
same thread from running until that operation finishes.

Example:

console.log("Task 1");

// A large synchronous calculation could delay
// all the code that follows it.

console.log("Task 2");

NON-BLOCKING WAIT:

A timer can be scheduled while the program continues
executing other statements.

Example:

console.log("Task 1");

setTimeout(() => {
    console.log("Delayed task");
}, 1000);

console.log("Task 2");

EXPECTED OUTPUT:

Task 1
Task 2
Delayed task

EXPLANATION:

The timer callback is scheduled to run later.
The program does not wait for the timer before
printing "Task 2".


========================================================
7. REAL-LIFE EXAMPLES
========================================================

SYNCHRONOUS EXAMPLE:

Imagine you are completing a form.

You enter your name first.
Then you enter your email.
Then you enter your phone number.

You complete each step in order.

ASYNCHRONOUS EXAMPLE:

Imagine you request information from a server.

While the request is waiting for a response,
the application may continue handling other tasks.

When the response arrives, the application can process it.

REAL-WORLD JAVASCRIPT EXAMPLES:

1. Fetching data from an API
2. Waiting for a timer
3. Handling button clicks
4. Loading information from a server

Note: The exact way these operations are handled depends
on the browser or Node.js environment and the API used.


========================================================
8. SYNCHRONOUS VS ASYNCHRONOUS
========================================================

SYNCHRONOUS:

- Executes statements in order.
- A statement must finish before the next begins.
- A long-running synchronous task can block execution.
- Example: an ordinary function call.

ASYNCHRONOUS:

- Certain operations can complete later.
- Other code can run while those operations are waiting.
- Callbacks can execute when their scheduled work is ready.
- Examples: timers and network requests.

IMPORTANT DIFFERENCE:

Asynchronous does not mean that JavaScript executes
all code simultaneously.

Ordinary JavaScript callbacks generally run one at a
time on the main thread, although some underlying work
may happen outside that thread.


========================================================
9. IMPORTANT POINTS TO REMEMBER
========================================================

1. JavaScript executes ordinary synchronous statements
   in order.

2. A function call normally executes the function before
   continuing to the next statement.

3. setTimeout() schedules a callback for later execution.

4. The delay in setTimeout() is measured in milliseconds.

5. setTimeout() does not block the entire program.

6. A long-running synchronous task can delay timers.

7. Asynchronous programming is useful when working with
   timers, network requests, and other delayed operations.

8. The event loop helps coordinate when queued callbacks
   can execute. We will learn it in a separate file.


*/


// ======================================================
// PRACTICAL EXECUTION SECTION
// Uncomment the examples one at a time to test them.
// ======================================================


// EXAMPLE 1: SYNCHRONOUS EXECUTION

console.log("----- SYNCHRONOUS EXAMPLE -----");

console.log("First");
console.log("Second");
console.log("Third");


// EXAMPLE 2: SYNCHRONOUS FUNCTION

console.log("----- FUNCTION EXAMPLE -----");

function greet() {
    console.log("Hello from the function");
}

console.log("Before function");
greet();
console.log("After function");


// EXAMPLE 3: ASYNCHRONOUS EXECUTION

console.log("----- ASYNCHRONOUS EXAMPLE -----");

console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");


// EXAMPLE 4: ANOTHER TIMER

setTimeout(() => {
    console.log("This message appears after about 1 second");
}, 1000);


// EXAMPLE 5: OBSERVE EXECUTION ORDER

console.log("----- EXECUTION ORDER -----");

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");