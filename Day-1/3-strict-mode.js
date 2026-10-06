// =====================================
// Strict Mode — "use strict"
// =====================================

// Definition:
// Strict Mode is a special mode in JavaScript
// that makes the code follow stricter rules.
//
// It helps us find common mistakes and
// prevents some unsafe JavaScript behaviour.


// =====================================
// 1. How to Enable Strict Mode
// =====================================

// Write "use strict" at the beginning of
// the JavaScript file.

"use strict";


// =====================================
// 2. Undeclared Variables
// =====================================

// Without Strict Mode:

// score = 100;
// console.log(score);

// JavaScript may create a global variable
// accidentally.
//
// This can cause problems in large programs.


// With Strict Mode:

// score = 100;

// This gives:
// ReferenceError: score is not defined


// Correct way:

let score = 100;

console.log(score);


// Output:
// 100


// =====================================
// 3. Silent Errors Become Errors
// =====================================

// Strict Mode prevents some operations
// that JavaScript might otherwise allow
// without clearly reporting the problem.


// Example:

let studentName = "Najila";

// studentName = "Aisha";   // This is allowed.
// console.log(studentName);


// =====================================
// 4. Duplicate Parameter Names
// =====================================

// Strict Mode does not allow duplicate
// parameter names.

// Example:

// function add(a, a) {
//     return a + a;
// }

// This causes a SyntaxError in Strict Mode.


// Correct:

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Output:
// 30


// =====================================
// 5. Strict Mode in a Function
// =====================================

// We can also enable Strict Mode
// inside a function.

function test() {
    "use strict";

    let message = "Strict Mode is active";

    console.log(message);
}

test();


// Output:
// Strict Mode is active


// =====================================
// 6. Why Use Strict Mode?
// =====================================

// Strict Mode helps:
// ✔ Catch common coding mistakes.
// ✔ Prevent accidental global variables.
// ✔ Make some silent errors throw errors.
// ✔ Encourage safer and cleaner JavaScript code.


// =====================================
// Final Conclusion
// =====================================

// ✔ "use strict" enables Strict Mode.
// ✔ It can be used for an entire script
//   or inside a function.
// ✔ Undeclared variables cause an error.
// ✔ Some normally silent mistakes become errors.
// ✔ Strict Mode helps us write safer JavaScript.