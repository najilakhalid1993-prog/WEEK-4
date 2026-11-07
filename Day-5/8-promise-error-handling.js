/*
PROMISE ERROR HANDLING

- resolve() = Success
- reject() = Failure
- then() = Handles success
- catch() = Handles errors
- finally() = Runs in both cases
*/

const myPromise = new Promise((resolve, reject) => {
    let age = 16;

    if (age >= 18) {
        resolve("You are eligible");
    } else {
        reject("You are not eligible");
    }
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Process completed");
    });

/*
OUTPUT:
You are not eligible
Process completed
*/