/*
PROMISE.ALL()

- Runs multiple Promises together.
- Waits for all Promises to complete.
- If one Promise fails, Promise.all() rejects.
*/

const promise1 = Promise.resolve("Apple");
const promise2 = Promise.resolve("Mango");
const promise3 = Promise.resolve("Orange");

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:
[ 'Apple', 'Mango', 'Orange' ]
*/


// Example with one rejected Promise

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failed");
const p3 = Promise.resolve("Completed");

Promise.all([p1, p2, p3])
    .then((results) => console.log(results))
    .catch((error) => console.log(error));

/*
OUTPUT:
Failed
*/