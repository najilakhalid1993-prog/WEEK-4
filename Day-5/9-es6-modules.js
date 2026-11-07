/*
ES6 MODULES

export  = Share code
import  = Use shared code

Note:
In a real project, export and import are
written in separate files.

This single file demonstrates the syntax.
*/

// 1. Named export
export function add(a, b) {
    return a + b;
}

export const pi = 3.14;


// 2. Default export
export default function greet() {
    console.log("Hello!");
}


// 3. Import syntax (for revision)

// import { add, pi } from "./math.js";
// import greet from "./math.js";

// 4. Example outputs
console.log(add(10, 20)); // 30
console.log(pi);          // 3.14
greet();                  // Hello!