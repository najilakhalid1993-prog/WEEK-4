/*
PROMISE.RACE()

- Runs multiple Promises together.
- Returns the first settled Promise.
*/

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First promise");
    }, 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second promise");
    }, 2000);
});

Promise.race([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:
First promise
*/

// Remember:
// Promise.race() = First settled Promise.
// It can be either resolved or rejected.