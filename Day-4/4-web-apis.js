/*
================================================
DAY 4 - FILE 4
TOPIC: WEB APIs IN JAVASCRIPT
================================================

THEORY:

Web APIs are features provided by the browser
that JavaScript can use to perform different tasks.

Examples:
1. setTimeout()
2. setInterval()
3. DOM manipulation
4. Browser events

Web APIs are provided by the browser, not by
the JavaScript language itself.

================================================
1. PRACTICAL EXAMPLE - setTimeout()
================================================
*/

console.log("Program started");

setTimeout(() => {
    console.log("Timer callback executed");
}, 2000);

console.log("Program continues");

/*
OUTPUT:

Program started
Program continues
Timer callback executed

EXPLANATION:

1. JavaScript prints "Program started".
2. The browser handles the timer.
3. JavaScript continues executing other code.
4. When the timer is ready, its callback can run
   when the JavaScript execution thread is available.

================================================
2. WEB APIs AND THE DOM
================================================

The DOM is a browser-provided API that allows
JavaScript to access and change HTML elements.

Example for a browser HTML file:

document.getElementById("message").textContent =
    "Hello from JavaScript!";

HTML REQUIRED FOR THIS EXAMPLE:

<p id="message">Original message</p>

RESULT:

The paragraph changes to:
Hello from JavaScript!

NOTE:

The DOM example works in a browser environment.
It will not work directly in Node.js because
Node.js does not provide the browser's document
object by default.

================================================
IMPORTANT POINTS
================================================

1. Web APIs provide browser features to JavaScript.
2. Timers are examples of browser APIs.
3. The DOM lets JavaScript interact with HTML.
4. Browser events allow JavaScript to respond
   to actions such as clicks.
5. Web APIs and JavaScript itself are not the same.

*/