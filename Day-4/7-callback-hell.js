/*
================================================
DAY 4 - FILE 7
TOPIC: CALLBACK HELL
================================================

THEORY:

A callback is a function passed as an argument
to another function to be executed later or
when a particular operation is completed.

Callback hell happens when multiple callbacks are
nested inside one another, making code difficult
to read and maintain.

It is also called the "Pyramid of Doom" because
the code can grow towards the right.

================================================
1. PRACTICAL EXAMPLE
================================================
*/

setTimeout(() => {
    console.log("Step 1: Wake up");

    setTimeout(() => {
        console.log("Step 2: Brush teeth");

        setTimeout(() => {
            console.log("Step 3: Have breakfast");

            setTimeout(() => {
                console.log("Step 4: Go to class");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

/*
OUTPUT:

Step 1: Wake up
Step 2: Brush teeth
Step 3: Have breakfast
Step 4: Go to class

Each step appears after approximately one second
because each timer is scheduled inside the previous
callback.

================================================
2. WHY IS CALLBACK HELL A PROBLEM?
================================================

1. Code becomes difficult to read.
2. Deep nesting makes maintenance harder.
3. Error handling can become complicated.
4. Changing the sequence can be difficult.

================================================
3. HOW CAN WE IMPROVE IT?
================================================

For this simple example, separate named functions
can make the steps easier to read.

Example:

function wakeUp() {
    console.log("Wake up");
}

function brushTeeth() {
    console.log("Brush teeth");
}

function haveBreakfast() {
    console.log("Have breakfast");
}

wakeUp();
brushTeeth();
haveBreakfast();

OUTPUT:

Wake up
Brush teeth
Have breakfast

NOTE:

This example improves readability but does not
replace the delayed sequence in the first example.
Promises and async/await are other ways to manage
asynchronous sequences, if your teacher covers them.

================================================
IMPORTANT POINTS
================================================

1. Callback hell means deeply nested callbacks.
2. It makes code harder to read and maintain.
3. It is often associated with multiple dependent
   asynchronous operations.
4. Better structure can make callbacks easier to manage.


*/