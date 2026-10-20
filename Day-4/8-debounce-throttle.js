/*
================================================
DAY 4 - FILE 8
TOPIC: DEBOUNCING AND THROTTLING
================================================

THEORY:

Debouncing and throttling are techniques used to
control how frequently a function executes.

They are useful when handling events such as:
- Typing in a search box
- Scrolling a webpage
- Resizing a browser window

================================================
1. DEBOUNCING
================================================

MEANING:

Debouncing delays function execution until a specified
period has passed without another call.

If another call happens before the delay ends,
the previous timer is cancelled and restarted.

PRACTICAL EXAMPLE:
*/

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

function searchMessage() {
    console.log("Searching...");
}

const debouncedSearch = debounce(searchMessage, 1000);

// Simulate repeated typing:
debouncedSearch();
debouncedSearch();
debouncedSearch();

/*
OUTPUT:

Searching...

The message prints once, approximately one second
after the last call.

REAL-LIFE EXAMPLE:

A search box waits until the user stops typing
before starting a search.


================================================
2. THROTTLING
================================================

MEANING:

Throttling limits how frequently a function can run.

Even if the function is called repeatedly, it runs
at most once during each specified time interval.

PRACTICAL EXAMPLE:
*/

function throttle(callback, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            callback(...args);
        }
    };
}

function scrollMessage() {
    console.log("Scroll event handled");
}

const throttledScroll = throttle(scrollMessage, 1000);

// Simulate repeated events:
throttledScroll();
throttledScroll();
throttledScroll();

/*
OUTPUT:

Scroll event handled

The first call runs immediately.
The next calls happen too soon, so they are ignored.

REAL-LIFE EXAMPLE:

While scrolling, a function can be limited to running
at most once per specified interval.


================================================
3. DIFFERENCE BETWEEN DEBOUNCING AND THROTTLING
================================================

DEBOUNCING:
Runs after repeated calls stop for a specified delay.

Example: Search after the user stops typing.

THROTTLING:
Limits how frequently a function can run.

Example: Handle frequent scroll events periodically.


================================================
IMPORTANT POINTS
================================================

1. Debouncing waits for a pause between calls.
2. Throttling limits the frequency of calls.
3. Both techniques help control frequent events.
4. The delay is measured in milliseconds.


*/