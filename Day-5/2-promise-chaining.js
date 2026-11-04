/*
=====================================================
DAY 5 - FILE 2: PROMISE CHAINING
=====================================================

TOPICS:
1. What is Promise Chaining?
2. Why do we use Promise Chaining?
3. How .then() works
4. Returning values from .then()
5. Chaining multiple .then()
6. Returning a Promise inside .then()
7. Error handling in Promise Chaining
8. How .catch() works in a chain
9. Common mistakes
10. Practical tasks
*/


// =====================================================
// 1. WHAT IS PROMISE CHAINING?
// =====================================================

/*
Promise Chaining means connecting multiple .then()
methods one after another.

The result returned from one .then() is passed
to the next .then().

It helps us execute asynchronous operations
in a particular sequence.

Example:

promise
    .then()
    .then()
    .then()
    .catch();

*/


// =====================================================
// 2. SIMPLE PROMISE CHAINING
// =====================================================

const myPromise = new Promise((resolve, reject) => {

    resolve(10);

});

myPromise
    .then((result) => {

        console.log("First result:", result);

        return result + 5;

    })
    .then((result) => {

        console.log("Second result:", result);

        return result * 2;

    })
    .then((result) => {

        console.log("Final result:", result);

    });

/*
OUTPUT:

First result: 10
Second result: 15
Final result: 30


EXECUTION:

1. Promise resolves with 10.
2. First .then() receives 10.
3. It returns 10 + 5 = 15.
4. Second .then() receives 15.
5. It returns 15 * 2 = 30.
6. Third .then() receives 30.

IMPORTANT:

The return value of one .then() becomes
the input value of the next .then().
*/


// =====================================================
// 3. CHAINING MULTIPLE THEN METHODS
// =====================================================

Promise.resolve(5)

    .then((number) => {

        console.log("Original number:", number);

        return number + 10;

    })

    .then((number) => {

        console.log("After addition:", number);

        return number * 3;

    })

    .then((number) => {

        console.log("After multiplication:", number);

        return number - 5;

    })

    .then((result) => {

        console.log("Final answer:", result);

    });

/*
OUTPUT:

Original number: 5
After addition: 15
After multiplication: 45
Final answer: 40


EXECUTION FLOW:

5
 |
 + 10
 |
15
 |
 * 3
 |
45
 |
 - 5
 |
40
*/


// =====================================================
// 4. IMPORTANCE OF RETURN
// =====================================================

/*
When chaining .then(), we should return a value
if we want to pass that value to the next .then().

EXAMPLE 1: WITH RETURN
*/

Promise.resolve(20)

    .then((number) => {

        return number + 10;

    })

    .then((result) => {

        console.log("With return:", result);

    });

/*
OUTPUT:

With return: 30
*/


/*
EXAMPLE 2: WITHOUT RETURN
*/

Promise.resolve(20)

    .then((number) => {

        number + 10;

    })

    .then((result) => {

        console.log("Without return:", result);

    });

/*
OUTPUT:

Without return: undefined


WHY?

Because the first .then() does not return anything.

When a function does not explicitly return
a value, JavaScript returns undefined.
*/


// =====================================================
// 5. RETURNING A PROMISE INSIDE THEN()
// =====================================================

/*
A .then() can return another Promise.

The next .then() waits until that Promise settles.

This is useful when one asynchronous task
depends on another asynchronous task.
*/

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User data received");

        }, 1000);

    });

}

function getOrders() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Orders received");

        }, 1000);

    });

}

getUser()

    .then((user) => {

        console.log(user);

        return getOrders();

    })

    .then((orders) => {

        console.log(orders);

    });

/*
OUTPUT:

After 1 second:
User data received

After another 1 second:
Orders received


EXECUTION:

1. getUser() returns a Promise.
2. First .then() waits for it.
3. User data is received.
4. getOrders() is returned.
5. Next .then() waits for getOrders().
6. Orders data is received.
*/


// =====================================================
// 6. PROMISE CHAINING WITH ERROR HANDLING
// =====================================================

/*
If a Promise rejects or an error is thrown
inside a .then(), the chain skips the remaining
success handlers and searches for a .catch().
*/

Promise.resolve(10)

    .then((number) => {

        console.log("First:", number);

        return number + 5;

    })

    .then((number) => {

        console.log("Second:", number);

        throw new Error("Something went wrong");

    })

    .then((number) => {

        console.log("Third:", number);

    })

    .catch((error) => {

        console.log("Error:", error.message);

    });

/*
OUTPUT:

First: 10
Second: 15
Error: Something went wrong


IMPORTANT:

The third .then() does not execute because
an error was thrown in the second .then().

The error is handled by .catch().
*/


// =====================================================
// 7. CATCH IN PROMISE CHAINING
// =====================================================

/*
.catch() handles errors from previous Promise
operations in the chain.

After .catch(), another .then() can execute
if the catch handler successfully returns a value.
*/

Promise.reject("Network error")

    .then((result) => {

        console.log(result);

    })

    .catch((error) => {

        console.log("Caught:", error);

        return "Fallback data";

    })

    .then((result) => {

        console.log("Next result:", result);

    });

/*
OUTPUT:

Caught: Network error
Next result: Fallback data


WHY DOES THE LAST THEN EXECUTE?

Because .catch() returns "Fallback data".

Returning a normal value from .catch()
makes the next Promise fulfilled.
*/


// =====================================================
// 8. PRACTICAL REAL-LIFE EXAMPLE
// =====================================================

/*
Imagine an online shopping application.

Steps:
1. Check whether the user is logged in.
2. Get the user's cart.
3. Calculate the total amount.
4. Display the final amount.
*/

function checkLogin() {

    return Promise.resolve(true);

}

function getCart() {

    return Promise.resolve([100, 200, 300]);

}

function calculateTotal(cart) {

    const total = cart.reduce((sum, price) => {

        return sum + price;

    }, 0);

    return Promise.resolve(total);

}

checkLogin()

    .then((isLoggedIn) => {

        if (!isLoggedIn) {

            throw new Error("Please login first");

        }

        console.log("User logged in");

        return getCart();

    })

    .then((cart) => {

        console.log("Cart:", cart);

        return calculateTotal(cart);

    })

    .then((total) => {

        console.log("Total amount:", total);

    })

    .catch((error) => {

        console.log("Error:", error.message);

    });

/*
OUTPUT:

User logged in
Cart: [ 100, 200, 300 ]
Total amount: 600
*/


// =====================================================
// 9. IMPORTANT POINTS TO REMEMBER
// =====================================================

/*

1. Promise chaining means connecting multiple .then().

2. The value returned from one .then()
   is passed to the next .then().

3. Always use return when you need to pass
   a value to the next .then().

4. A .then() can return:
   - A normal value
   - Another Promise

5. If a Promise is returned, the next .then()
   waits for it to settle.

6. If an error occurs, the remaining success
   handlers are skipped until a .catch() handles it.

7. .catch() can also return a value.

8. Promise chaining avoids deeply nested callbacks.

*/


// =====================================================
// 10. COMMON MISTAKES
// =====================================================

/*
MISTAKE 1: Forgetting return

.then((number) => {
    number + 10;
})

CORRECT:

.then((number) => {
    return number + 10;
})


MISTAKE 2: Not returning the next Promise

.then((user) => {
    getOrders();
})

CORRECT:

.then((user) => {
    return getOrders();
})


MISTAKE 3: Thinking every .then() runs after an error.

If an error is thrown, the next success handlers
are skipped until the error is handled.
*/


// =====================================================
// 11. PRACTICAL TASKS
// =====================================================

/*

TASK 1: BASIC CHAINING

Start with Promise.resolve(10).

1. Add 5 in the first .then().
2. Multiply the result by 2 in the second .then().
3. Subtract 5 in the third .then().
4. Display the final result.


TASK 2: RETURN PRACTICE

Create a Promise that resolves with 50.

1. First .then(): Add 20.
2. Second .then(): Multiply by 2.
3. Third .then(): Display the result.

Try it once with return and once without return.


TASK 3: ASYNCHRONOUS CHAINING

Create two functions:

getStudent()
getMarks()

Requirements:

1. getStudent() should return a Promise.
2. Resolve it after 1 second with "Amina".
3. getMarks() should return a Promise.
4. Resolve it after 2 seconds with 85.
5. Chain both functions using .then().
6. Display the student name and marks.


TASK 4: ERROR HANDLING

Create a Promise that resolves with 100.

1. First .then(): Display the value.
2. Second .then(): Throw a new Error
   with the message "Invalid calculation".
3. Third .then(): Display "Success".
4. Use .catch() to handle the error.

Observe which statements execute.


TASK 5: REAL-LIFE TASK

Create an online shopping Promise chain.

Steps:

1. checkLogin()
   - Resolve with true.

2. getCart()
   - Resolve with [200, 300, 500].

3. calculateTotal()
   - Calculate the total using reduce().

4. Display the final amount.

5. Handle errors using .catch().


TASK 6: OUTPUT-BASED QUESTION

Predict the output without running the code.

Promise.resolve(5)

    .then((value) => {
        console.log(value);
        return value * 2;
    })

    .then((value) => {
        console.log(value);
        return value + 10;
    })

    .then((value) => {
        console.log(value);
    });



*/


/// TASK-1 ANSWER

Promise.resolve(10)
.then((number)=>{
    return number +5;
})
.then((number)=>{
    return number*2
})
.then((number)=>{
    return number-5
})
.then((result)=>{
    console.log(result)
})

// TASK-2 ANSWER

Promise.resolve(50)
.then((number)=>{
    return number + 20
})
.then((number)=>{
    return number*2
})
.then((result)=>{
    console.log(result)
})
    
// TASK-3 ANSWER

function getStudent(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve ("Amina")
        },1000)
    })
}
function getMarks(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("85")
        },2000)
    })
}
getStudent()
.then((student)=>{
    console.log(student);
    return getMarks()
})
.then((marks)=>{
    console.log(marks)
})

// TASK-4 ANSWER
Promise.resolve(100)
.then((value)=>{
    console.log(value)
    return value
})
.then((value)=>{
    throw new Error("Invalid calculation")
})
.then((value)=>{
    console.log("Success")
})
.catch((error)=>{
    console.log("Error:", error.message )
})

// TASK-5 ANSWER

 function checkLogin(){
    return Promise.resolve(true)
 }
 function getCart(){
    return Promise.resolve([200,300,400])
 }
function calculateTotal(cart){
    const total = cart.reduce((sum, price)=>{
        return sum+price;
    },0)
    return  Promise.resolve(total)

}
checkLogin()
.then((isLoggedIn)=>{
    if (!isLoggedIn){
        throw new Error ("Please login first")
    }
    console.log("Login successful")
    return getCart();
})
.then((cart)=>{
    console.log("Cart items:" , cart)
    return calculateTotal(cart)
})
.then((total)=>{
    console.log("Total amount:", total)
})
.catch((error)=>{
    console.log("Error:" , error.message)
})

// TASK-6 ANSWER 

// 5
// 10 
// 20