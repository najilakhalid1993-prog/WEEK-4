
/*
=================================================
DAY 5 - FILE 1: JAVASCRIPT PROMISES
=================================================

TOPICS:
1. What is a Promise?
2. Why do we use Promises?
3. Three states of a Promise
4. Creating a Promise
5. resolve() and reject()
6. then() and catch()
7. Promise execution
8. Promise with setTimeout()
9. Promise examples
10. Practical tasks
*/


// =================================================
// 1. WHAT IS A PROMISE?
// =================================================

/*
A Promise is a JavaScript object that represents
the eventual completion or failure of an
asynchronous operation.

Examples:
- Fetching API data
- Loading data from a server
- Uploading files
- Processing payments

A Promise can be in three states:

1. Pending   - Operation is still running.
2. Fulfilled - Operation completed successfully.
3. Rejected  - Operation failed.
*/


// =================================================
// 2. CREATING A PROMISE
// =================================================

/*
Syntax:

const myPromise = new Promise((resolve, reject) => {

    // asynchronous operation

});

resolve() - Used when the operation succeeds.
reject()  - Used when the operation fails.
*/


// =================================================
// 3. SIMPLE PROMISE EXAMPLE
// =================================================

const myPromise = new Promise((resolve, reject) => {

    let orderPlaced = true;

    if (orderPlaced) {
        resolve("Order placed successfully");
    } else {
        reject("Order failed");
    }

});

console.log(myPromise);

/*
Output:
Promise { 'Order placed successfully' }

Note:
The exact display of a Promise may differ
between browser consoles and Node.js.
*/


// =================================================
// 4. USING THEN()
// =================================================

/*
then() handles the fulfilled state of a Promise.

Syntax:

promise.then((result) => {
    // success code
});
*/

const promiseOne = new Promise((resolve, reject) => {

    let isAvailable = true;

    if (isAvailable) {
        resolve("Product is available");
    } else {
        reject("Product is unavailable");
    }

});

promiseOne.then((result) => {
    console.log(result);
});

/*
Output:
Product is available
*/


// =================================================
// 5. USING CATCH()
// =================================================

/*
catch() handles a rejected Promise.

Syntax:

promise.catch((error) => {
    // error handling code
});
*/

const promiseTwo = new Promise((resolve, reject) => {

    let paymentSuccessful = false;

    if (paymentSuccessful) {
        resolve("Payment successful");
    } else {
        reject("Payment failed");
    }

});

promiseTwo.catch((error) => {
    console.log(error);
});

/*
Output:
Payment failed
*/


// =================================================
// 6. USING THEN() AND CATCH() TOGETHER
// =================================================

const promiseThree = new Promise((resolve, reject) => {

    let loginSuccessful = false;

    if (loginSuccessful) {
        resolve("Login successful");
    } else {
        reject("Invalid username or password");
    }

});

promiseThree
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
Output:
Invalid username or password
*/


// =================================================
// 7. PROMISE WITH SETTIMEOUT()
// =================================================

/*
setTimeout() helps us simulate an asynchronous task.

Here, the Promise resolves after 2 seconds.
*/

const dataPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received successfully");
    }, 2000);

});

dataPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
Output after 2 seconds:

Data received successfully
*/


// =================================================
// 8. PROMISE REJECTION WITH SETTIMEOUT()
// =================================================

const serverPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        let serverStatus = false;

        if (serverStatus) {
            resolve("Server connected");
        } else {
            reject("Server connection failed");
        }

    }, 2000);

});

serverPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
Output after 2 seconds:

Server connection failed
*/


// =================================================
// 9. IMPORTANT PROMISE POINTS
// =================================================

/*
1. A Promise is an object.
2. A Promise has three states:
   Pending, Fulfilled and Rejected.

3. resolve() indicates successful completion.
4. reject() indicates failure.

5. then() handles fulfillment.
6. catch() handles rejection.

7. A settled Promise cannot change its state.
8. A Promise executor function runs immediately.
9. Promise handlers such as then() run asynchronously
   through the microtask queue.
10. Promises are commonly used for asynchronous tasks.
*/


// =================================================
// 10. PRACTICAL TASKS
// =================================================

/*
TASK 1:
Create a Promise called loginPromise.

Requirements:
- Create a variable isLoggedIn = true.
- If true, resolve with "Login successful".
- Otherwise, reject with "Invalid login".
- Handle both using then() and catch().


TASK 2:
Create a Promise called examPromise.

Requirements:
- Create a variable marks = 75.
- If marks >= 50, resolve with "You passed".
- Otherwise, reject with "You failed".
- Display the result.


TASK 3:
Create a Promise called fetchPromise.

Requirements:
- Use setTimeout().
- Resolve after 3 seconds.
- Display "Data fetched successfully".


TASK 4:
Create a Promise called registrationPromise.

Requirements:
- Create a variable emailProvided = false.
- If true, resolve with "Registration successful".
- Otherwise, reject with "Please provide an email".
- Handle both success and failure.


TASK 5:
Create a Promise called deliveryPromise.

Requirements:
- Create a variable orderDelivered = true.
- If true, resolve with "Order delivered".
- Otherwise, reject with "Delivery failed".
- Use then() and catch().
*/


// TASK 1 ANSWER

    
const loginPromise = new Promise ((resolve, reject)=>{
        let isLoggedIn = true;
        if(isLoggedIn){
            resolve("Login succesful")
        } else {
            reject ("Invalid login")
        }
    });
    loginPromise
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

    // TASK -2 ANSWER

    const examPromise = new Promise ((resolve,reject)=>{
        let marks=75;
        if(marks>=50){
            resolve("You Passed")
        } else {
            reject ("You Failed")
        }
    })
    examPromise 
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

    // TASK - 3 ANSWER

    const fetchPromise = new Promise((resolve,reject)=>{
        setTimeout (()=>{
            resolve("Data fetched successfully")
        },2000)
    })
    fetchPromise
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })

    // TASK-4 ANSWER

    const registrationPromise = new Promise ((resolve,reject)=>{
        let emailProvided= false;
        if(emailProvided){
            resolve("Registration successful");
        } else {
            reject("Please provide an email")
        }
    })
    registrationPromise
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error)
    })
        
    // TASK -5 ANSWER

    const deliveryPromise = new Promise ((resolve,reject)=>{
        let orderDelivered = true;
        if (orderDelivered){
            resolve("Order Delivered")
        } else {
            reject("Delivery failed")
        }
    })
    deliveryPromise.then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })





