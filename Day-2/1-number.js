//      Javascript Numbers 

//-----------------NUMBERS------------------
 
// 1. Number as a Primitive Value

let age=33;
console.log(age);
console.log(typeof age);

// 2. Number as an Object

let numberObject = new Number(33);
console.log(numberObject);
console.log(typeof numberObject)

// 3. Difference between Primitive Number and Number Object

let num1= 10;
let num2= new Number(10);
console.log(typeof num1);
// number
console.log(typeof num2);
// object

// Compairing Primitive Number and Number Object
console.log(num1 == num2);
// true
console.log(num1=== num2);
// false









