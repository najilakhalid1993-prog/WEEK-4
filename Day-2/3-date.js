//----------------- JavaScript Date -------------------

// Current date and time

 let currentDate = new Date();
 console.log(currentDate);

//  Date using a string

    let date1 =new Date ("2026-09-25")
    console.log(date1)

// Date using components
// Year, Month, date
// Month starts from 0

let date2 = new Date (2026,3,15)
console.log(date2)

// Get methods

console.log(currentDate.getDate());
console.log(currentDate.getDay());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());
console.log(currentDate.getTime());

// Date.now()

console.log(Date.now());

// Date formatting

console.log(currentDate.toDateString());
console.log(currentDate.toTimeString());
console.log(currentDate.toISOString());



