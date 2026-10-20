/*
================================================
DAY 4 - FILE 3
TOPIC: CALL STACK IN JAVASCRIPT
================================================

THEORY:

The call stack is a mechanism JavaScript uses to keep
track of function calls.

It follows the LIFO principle.

LIFO = Last In, First Out.

The last function added to the stack is the first
function to finish and be removed.

================================================
1. HOW THE CALL STACK WORKS
================================================

When a function is called:
1. It is added to the call stack.
2. Its code executes.
3. It is removed when execution finishes.

================================================
2. PRACTICAL EXAMPLE
================================================
*/

function first() {
    console.log("First function");
}

function second() {
    console.log("Second function");
}

console.log("Start");

first();
second();

console.log("End");

/*
OUTPUT:

Start
First function
Second function
End

EXPLANATION:

1. Start prints.
2. first() is called and executes.
3. second() is called and executes.
4. End prints.

Each function finishes before the next statement runs.

================================================
3. NESTED FUNCTION CALLS
================================================
*/

function one() {
    console.log("Inside one");

    two();
}

function two() {
    console.log("Inside two");

    three();
}

function three() {
    console.log("Inside three");
}

one();

/*
OUTPUT:

Inside one
Inside two
Inside three

EXPLANATION:

one() calls two().
two() calls three().

The call stack looks like this while three() executes:

    three()  <- Top
    two()
    one()    <- Bottom

After three() finishes, it is removed first.
Then two() finishes, followed by one().

This demonstrates LIFO:
Last In, First Out.

================================================
IMPORTANT POINTS
================================================

1. The call stack tracks function execution.
2. It follows LIFO: Last In, First Out.
3. A function is added when called.
4. A function is removed when it finishes.
5. Too many recursive calls can cause a
   "Maximum call stack size exceeded" error.

*/