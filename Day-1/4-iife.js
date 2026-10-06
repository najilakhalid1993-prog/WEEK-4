// =====================================
// IIFE — Immediately Invoked Function Expression
// =====================================

// Definition:
// IIFE is a function that is created and
// executed immediately.
//
// IIFE = Immediately Invoked Function Expression


// =====================================
// 1. Basic IIFE
// =====================================

(function () {
    console.log("Hello from IIFE");
})();


// Output:
// Hello from IIFE


// The important part is:
//
// function is created
//       ↓
// function is immediately called
//       ↓
// "Hello from IIFE"


// =====================================
// 2. Why is it called IIFE?
// =====================================

// IIFE has two main parts:
//
// 1. Function Expression
// 2. Immediate Invocation


// Function Expression:
//
// (function () {
//     console.log("Hello");
// })


// Immediate Invocation:
//
// ()
//


// Together:

(function () {
    console.log("Hello");
})();


// =====================================
// 3. IIFE with Variables
// =====================================

(function () {

    let message = "This is private";

    console.log(message);

})();


// Output:
// This is private


// The variable message exists inside
// the IIFE's scope.


// =====================================
// 4. IIFE Creates Its Own Scope
// =====================================

(function () {

    let secret = "Hidden value";

    console.log(secret);

})();


// console.log(secret);

// ❌ Error
// secret is not accessible outside
// the IIFE.


// This helps prevent variables from
// accidentally affecting other code.


// =====================================
// 5. IIFE with Arguments
// =====================================

// We can also pass values to an IIFE.

(function (name) {

    console.log("Hello " + name);

})("Najila");


// Output:
// Hello Najila


// =====================================
// 6. IIFE with Return Value
// =====================================

let result = (function () {

    let a = 10;
    let b = 20;

    return a + b;

})();

console.log(result);


// Output:
// 30


// =====================================
// 7. Why Use IIFE?
// =====================================

// IIFE can be used to:
// ✔ Execute code immediately.
// ✔ Create a private scope.
// ✔ Prevent variables from polluting
//   the outer/global scope.
// ✔ Keep temporary variables private.


// =====================================
// Final Conclusion
// =====================================

// ✔ IIFE means Immediately Invoked Function Expression.
// ✔ The function is executed immediately after creation.
// ✔ IIFE can create its own scope.
// ✔ Variables inside an IIFE can remain private.
// ✔ IIFE can accept arguments and return values.


// Memory Trick:
//
// IIFE = CREATE + CALL IMMEDIATELY