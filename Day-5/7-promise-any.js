/*
PROMISE.ANY()

- Returns the first successful Promise.
- Ignores rejected Promises.
- If all Promises fail, it throws AggregateError.
*/

const promise1 = Promise.reject("Failed 1");
const promise2 = Promise.resolve("Success 2");
const promise3 = Promise.resolve("Success 3");

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

/*
OUTPUT:
Success 2
*/

// Remember:
// Promise.any() = First successful Promise.
// Promise.race() = First settled Promise.