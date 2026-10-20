/*
================================================
DAY 4 - FILE 5
TOPIC: CALLBACK QUEUE IN JAVASCRIPT
================================================

THEORY:

The callback queue is a queue where certain callbacks
wait until the JavaScript call stack is available.

It follows FIFO:

FIFO = First In, First Out.

The first callback added to the queue is generally
the first one processed from that queue.

The event loop helps coordinate when queued callbacks
can run.

================================================
1. PRACTICAL EXAMPLE
================================================
*/

console.log("Start");

setTimeout(() => {
    console.log("Timer callback");
}, 0);

console.log("End");

/*
OUTPUT:

Start
End
Timer callback

EXPLANATION:

1. "Start" prints first.
2. The timer callback is scheduled.
3. "End" prints before the timer callback.
4. The callback runs when the call stack is available
   and the runtime processes the scheduled task.

IMPORTANT:
A delay of 0 milliseconds does not mean the callback
runs immediately.
*/


// ================================================
// 2. ANOTHER EXAMPLE
// ================================================

console.log("A");

setTimeout(() => {
    console.log("B");
}, 1000);

setTimeout(() => {
    console.log("C");
}, 1000);

console.log("D");

/*
EXPECTED OUTPUT:

A
D
B
C

EXPLANATION:

1. A prints first.
2. Both timer callbacks are scheduled.
3. D prints immediately.
4. The timer callbacks become eligible to run after
   approximately one second.
5. In this example, B is scheduled before C, so B
   normally prints before C.

================================================
IMPORTANT POINTS
================================================

1. A queue stores callbacks waiting to be processed.
2. FIFO means First In, First Out.
3. A queued callback cannot interrupt currently
   executing synchronous JavaScript.
4. The event loop coordinates callback execution.
5. setTimeout(callback, 0) does not mean immediate
   execution.


*/