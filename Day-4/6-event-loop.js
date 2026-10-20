/*
================================================
DAY 4 - FILE 6
TOPIC: EVENT LOOP IN JAVASCRIPT
================================================

THEORY:

The event loop coordinates when scheduled callbacks
can execute after the call stack becomes available.

It works with:
1. Call stack
2. Browser APIs or runtime APIs
3. Callback queue

The event loop helps JavaScript handle asynchronous
operations without blocking while they wait.

================================================
1. PRACTICAL EXAMPLE
================================================
*/

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

console.log("End");

/*
OUTPUT:

Start
End
Inside setTimeout

EXPLANATION:

1. "Start" executes first.
2. The timer callback is scheduled.
3. "End" executes next.
4. After the current synchronous code finishes,
   the timer callback can execute.

Even a delay of 0 milliseconds does not make the
callback execute immediately.
*/


// ================================================
// 2. EVENT LOOP WITH A DELAY
// ================================================

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

console.log("C");

/*
OUTPUT:

A
C
B

EXPLANATION:

1. A prints first.
2. The timer is scheduled.
3. C prints without waiting for the timer.
4. B prints after the timer becomes eligible to run
   and the call stack is available.
*/


// ================================================
// 3. SYNCHRONOUS CODE AND TIMER
// ================================================

console.log("First");

setTimeout(() => {
    console.log("Third");
}, 0);

console.log("Second");

/*
OUTPUT:

First
Second
Third

================================================
IMPORTANT POINTS
================================================

1. The event loop coordinates callback execution.
2. Synchronous code runs before queued timer callbacks.
3. Timer callbacks do not interrupt running code.
4. A timer delay is a minimum waiting time, not an
   exact promise of when the callback will run.
5. The event loop works with the call stack and
   the runtime's scheduling mechanisms.

*/