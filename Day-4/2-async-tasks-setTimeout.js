/*
================================================
DAY 4 - FILE 2
TOPIC: COMMON ASYNCHRONOUS TASKS IN JAVASCRIPT
================================================

THEORY:

Asynchronous JavaScript allows certain operations to
finish later while other code continues executing.

In this file, we learn:
1. setTimeout()
2. setInterval()
3. clearInterval()


================================================
1. setTimeout()
================================================

MEANING:
Executes a callback after a specified delay.

SYNTAX:
setTimeout(callback, delay);

EXAMPLE:
*/

console.log("Start");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

/*
OUTPUT:
Start
End
Hello after 2 seconds

EXPLANATION:
1. Start prints first.
2. setTimeout schedules the callback.
3. End prints without waiting for the timer.
4. The message appears after approximately 2 seconds.


================================================
2. setInterval()
================================================

MEANING:
Repeats a callback at approximately regular intervals
until the interval is stopped.

SYNTAX:
setInterval(callback, interval);


================================================
3. clearInterval()
================================================

MEANING:
Stops a repeating interval using its interval ID.

EXAMPLE:
*/

let count = 1;

const timer = setInterval(() => {
    console.log("Count:", count);

    count++;

    if (count > 3) {
        clearInterval(timer);
        console.log("Timer stopped");
    }
}, 1000);

/*
OUTPUT:
Count: 1
Count: 2
Count: 3
Timer stopped

EXPLANATION:
1. The count starts at 1.
2. The callback runs approximately every second.
3. The count increases each time.
4. When the count reaches 3, the interval is stopped.


================================================
IMPORTANT POINTS
================================================

1. setTimeout() executes a callback after a delay.
2. setInterval() repeats a callback.
3. clearInterval() stops a repeating interval.
4. 1000 milliseconds = 1 second.
5. Timer delays are not guaranteed to be exact.
6. JavaScript can continue executing other code
   while waiting for a timer callback.

*/