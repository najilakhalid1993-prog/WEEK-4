/*
=====================================================
DAY 5 - FILE 3: ASYNC / AWAIT
====================================================


// =====================================================
// 1. WHAT IS ASYNC?
// =====================================================

/*
async is a keyword used before a function.

An async function always returns a Promise.

Even if we return a normal value from an async
function, JavaScript automatically wraps it
inside a fulfilled Promise.

SYNTAX:

async function functionName() {
    // code
}
*/


// =====================================================
// 2. SIMPLE ASYNC FUNCTION
// =====================================================

async function greet() {

    return "Hello JavaScript";

}

greet().then((result) => {
    console.log(result);
});

/*
OUTPUT:

Hello JavaScript

EXPLANATION:

1. We create an async function.
2. It returns a normal string.
3. JavaScript automatically converts the
   returned value into a fulfilled Promise.
4. .then() receives the result.
*/


// =====================================================
// 3. ASYNC FUNCTION RETURNS A PROMISE
// =====================================================

async function getNumber() {

    return 100;

}

console.log(getNumber());

/*
OUTPUT (conceptually):

Promise { 100 }

IMPORTANT:

An async function always returns a Promise.
*/


// =====================================================
// 4. WHAT IS AWAIT?
// =====================================================

/*
await is a keyword used to wait for a Promise
to settle.

When await is used, the async function pauses
until the Promise settles.

If the Promise fulfils, await gives us its value.
If the Promise rejects, await throws the rejection
reason as an error.

SYNTAX:

const result = await promise;

IMPORTANT:

await is normally used inside an async function.
*/


// =====================================================
// 5. SIMPLE AWAIT EXAMPLE
// =====================================================

function getData() {

    return new Promise((resolve) => {

        resolve("Data received");

    });

}

async function displayData() {

    const result = await getData();

    console.log(result);

}

displayData();

/*
OUTPUT:

Data received

EXECUTION:

1. displayData() starts.
2. getData() returns a Promise.
3. await waits for the Promise.
4. Promise fulfils with "Data received".
5. The value is stored in result.
6. console.log() displays the result.
*/


// =====================================================
// 6. ASYNC / AWAIT WITH SETTIMEOUT()
// =====================================================

function fetchUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("User details received");

        }, 2000);

    });

}

async function showUser() {

    console.log("Fetching user...");

    const result = await fetchUser();

    console.log(result);

}

showUser();

/*
OUTPUT:

Fetching user...

After 2 seconds:

User details received

IMPORTANT:

await pauses only the execution of the
current async function.

It does NOT block the entire JavaScript program.
*/


// =====================================================
// 7. MULTIPLE AWAIT STATEMENTS
// =====================================================

function getName() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Amina");
        }, 1000);

    });

}

function getAge() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(22);
        }, 1000);

    });

}

async function getDetails() {

    const name = await getName();

    console.log("Name:", name);

    const age = await getAge();

    console.log("Age:", age);

}

getDetails();

/*
OUTPUT:

After 1 second:
Name: Amina

After another 1 second:
Age: 22

TOTAL TIME: Approximately 2 seconds.

WHY?

The second function is called only after
the first awaited Promise fulfils.
*/


// =====================================================
// 8. RETURNING VALUES FROM ASYNC FUNCTIONS
// =====================================================

async function calculateTotal() {

    const price = 500;
    const quantity = 3;

    return price * quantity;

}

calculateTotal().then((result) => {

    console.log("Total:", result);

});

/*
OUTPUT:

Total: 1500

IMPORTANT:

Even though calculateTotal() returns 1500,
the function itself returns a Promise.

We use .then() to access its fulfilled value.
*/


// =====================================================
// 9. ASYNC / AWAIT WITH ERROR HANDLING
// =====================================================

/*
try:
Contains code that may cause an error.

catch:
Handles the error if one occurs.

finally:
Executes whether an error occurs or not.
*/

function checkPayment() {

    return new Promise((resolve, reject) => {

        const paymentSuccessful = false;

        if (paymentSuccessful) {

            resolve("Payment successful");

        } else {

            reject(new Error("Payment failed"));

        }

    });

}

async function processPayment() {

    try {

        const result = await checkPayment();

        console.log(result);

    } catch (error) {

        console.log("Error:", error.message);

    } finally {

        console.log("Payment process completed");

    }

}

processPayment();

/*
OUTPUT:

Error: Payment failed
Payment process completed

EXECUTION:

1. processPayment() starts.
2. try block executes.
3. await waits for checkPayment().
4. The Promise rejects.
5. Control moves to catch.
6. Error message is displayed.
7. finally executes.
*/


// =====================================================
// 10. ASYNC / AWAIT WITH MULTIPLE FUNCTIONS
// =====================================================

function getStudent() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 101,
                name: "Amina"
            });

        }, 1000);

    });

}

function getMarks() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(90);

        }, 1000);

    });

}

async function displayStudentDetails() {

    const student = await getStudent();

    console.log("Student:", student.name);

    const marks = await getMarks();

    console.log("Marks:", marks);

}

displayStudentDetails();

/*
OUTPUT:

After 1 second:
Student: Amina

After another 1 second:
Marks: 90
*/


// =====================================================
// 11. REAL-LIFE EXAMPLE: ONLINE SHOPPING
// =====================================================

function checkUserLogin() {

    return Promise.resolve(true);

}

function fetchCartItems() {

    return Promise.resolve([200, 300, 500]);

}

async function shoppingProcess() {

    try {

        const isLoggedIn = await checkUserLogin();

        if (!isLoggedIn) {

            throw new Error("Please login first");

        }

        console.log("Login successful");

        const cart = await fetchCartItems();

        console.log("Cart items:", cart);

        const total = cart.reduce((sum, price) => {

            return sum + price;

        }, 0);

        console.log("Total amount:", total);

    } catch (error) {

        console.log("Error:", error.message);

    }

}

shoppingProcess();

/*
OUTPUT:

Login successful
Cart items: [ 200, 300, 500 ]
Total amount: 1000
*/


// =====================================================
// 12. DIFFERENCE BETWEEN PROMISE CHAINING
//     AND ASYNC / AWAIT
// =====================================================

/*
PROMISE CHAINING:

getData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


ASYNC / AWAIT:

async function display() {

    try {

        const result = await getData();

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

display();


IMPORTANT DIFFERENCES:

1. Promise chaining uses .then() and .catch().

2. Async/await uses async and await keywords.

3. Both work with Promises.

4. Async/await makes asynchronous code
   easier to read.

5. Both support error handling.

6. Async/await does NOT replace Promises.
   It provides another way to work with them.
*/


// =====================================================
// 13. IMPORTANT POINTS TO REMEMBER
// =====================================================

/*
1. async is written before a function.
2. An async function always returns a Promise.
3. await waits for a Promise to settle.
4. await gives the fulfilled value.
5. A rejected Promise can be handled using try/catch.
6. await pauses the current async function,
   not the entire JavaScript program.
7. Multiple await statements normally execute
   one after another.
8. Promise.all() can be used when independent
   asynchronous operations should run together.
*/


// =====================================================
// 14. PRACTICAL TASKS
// =====================================================

/*

TASK 1: BASIC ASYNC

Create an async function called greetUser().

Requirements:
- Return "Welcome to JavaScript".
- Call the function.
- Display the result using .then().
*/
    async function greetUser(){
        return "Welcome to javascript"
    }
    greetUser()
    .then((result)=>{
        console.log(result)
    })


/*
TASK 2: AWAIT PRACTICE

Create a function getMessage().

Requirements:
- Return a Promise.
- Resolve after 2 seconds.
- Resolve with "Hello, welcome back".

Create an async function displayMessage().
Use await to receive and display the message.
*/

   function getMessage(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hello , welcome back");
        },2000)
    })
   }
   async function displayMessage(){
    const result = await getMessage();
    console.log(result);
   }
   displayMessage();

/*
TASK 3: STUDENT DETAILS

Create two functions:

getStudentName()
getStudentMarks()

Requirements:
- getStudentName() resolves with "Abdullah"
  after 1 second.
- getStudentMarks() resolves with 85
  after 2 seconds.
- Create an async function.
- Use await to receive both values.
- Display the student name and marks.
*/

 function getStudentName(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Abdullah")
        },1000)
    })
 }
 function getStudentMarks(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(83)
        },2000)
    })
 }
 async function  displayStudent(){
    const name = await getStudentName();
    const marks = await getStudentMarks();
    console.log("Student name:", name);
    console.log("Student marks:" , marks);
 }
 displayStudent();

/*
TASK 4: CALCULATION

Create an async function calculatePrice().

Requirements:
- Create price = 500.
- Create quantity = 4.
- Return the total price.
- Call the function and display the result.
*/
 async function calculatePrice(){
    let price = 500;
    let quantity = 4 ;
    return price* quantity

 }
 calculatePrice()
 .then((result)=>{
    console.log("Total price :" , result)
 })



/*
TASK 5: ERROR HANDLING

Create a function loginUser().

Requirements:
- Return a Promise.
- Create isLoggedIn = false.
- If true, resolve with "Login successful".
- Otherwise, reject with "Login failed".
- Use async/await.
- Handle the error using try/catch.
*/

function loginUser(){
    return new Promise((resolve,reject)=>{
        let isLoggedIn = false;
        if(isLoggedIn){
            resolve("Login successful")
        } else {
            reject (new Error ("Login failed"))
        }
    })
}
async function displayLogin(){
    try{
        const result= await loginUser();
        console.log(result)
    } catch (error){
        console.log("Error:", error.message)
    }
}
displayLogin();


/*
TASK 6: SETTIMEOUT

Create a function fetchData().

Requirements:
- Return a Promise.
- Resolve after 3 seconds.
- Resolve with "Data fetched successfully".
- Use async/await to display the result.
*/
    function fetchData(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("Data fetched successfully")
            },3000)
        })
    }
    async function displayresult(){
        const result = await fetchData()
        console.log(result)
    }
    displayresult();

/*
TASK 7: REAL-LIFE TASK

Create an online shopping process.

Requirements:

1. checkLogin()
   - Return a Promise.
   - Resolve with true.

2. getProducts()
   - Return a Promise.
   - Resolve with [100, 200, 500].

3. Create an async function shopping().
4. Use await to get the login status.
5. Check whether the user is logged in.
6. Use await to get the products.
7. Calculate the total using reduce().
8. Display the total.
9. Handle errors using try/catch.
*/

function CheckLogin() {
    return  Promise.resolve(true);
}
function getProducts() {
    return Promise.resolve([100,200,500])
}
async function shopping(){
    try{
        const isloggedIn = await CheckLogin()
        if(! isloggedIn){
            throw new Error("Please Login first")
        }
        console.log("Login successfull")
        const products = await getProducts();
        console.log("Products:" , products);
        const total = products.reduce((sum,price)=>{
            return sum + price 
        },0)
        console.log("Total amount :" , total)

    } catch (error) {
        console.log("Error:" , error.message)
    }
}
shopping();

/*
TASK 8: OUTPUT-BASED QUESTION

async function test() {

    console.log("A");

    await Promise.resolve();

    console.log("B");

}

console.log("C");

test();

console.log("D");


Predict the exact output.

OUTPUT : C
         A
         D
         B
*/

   

/*
TASK 9: FIND THE MISTAKE

function getData() {

    return Promise.resolve("Hello");

}

function display() {

    const result = await getData();

    console.log(result);

}

display();


Questions:

1. What is the mistake? - The await keyword is used inside a normal function.
2. Why does it happen? - await must be inside a async function . The display() function 
                        is missing the async keyword.
 
 


TASK 10: OUTPUT-BASED QUESTION

async function calculate() {

    return 50;

}

calculate().then((result) => {

    console.log(result);

});

What is the output?
Why does .then() work here?
output is 50.
Because an async function always returns a promise.
Eventhough we return the normal vaalue 50, Javascript automatically wraps it in a 
fulfilled Promise.
Therefore, .then() recieves 50.


*/


// =====================================================
// END OF FILE 3
// NEXT FILE: 04_callback_to_promise.js
// =====================================================