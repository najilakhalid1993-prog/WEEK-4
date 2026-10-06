//  ------------- SET AND MAP--------------

// 1. SET

//    Set stores unique values

      let numbers= new Set([10,20,30,10,20]);
      console.log(numbers)
//    Set(3) {10,20,30}
      console.log(numbers.size);


//    Adding a value
      numbers.add(40);
      console.log(numbers);
//    Set(4) {10,20,30,40}

//    Checking a value
      console.log(numbers.has(20));
//    true

//    Deleting a value
      numbers.delete(30);
      console.log(numbers)
//    Set(30) {10,20,40}

//=============================================================

// 2. SET vs ARRAY

      let array = [10,20,20,30,30];
      let set = new Set ([10,20,20,30,30]);

      console.log(array);
      console.log(set);

//  Array allows duplicate values.
//  Set stores only unique values.

     console.log(array.length);
     console.log(set.size);

//  Array uses index
    console.log(array[0]);

//  Set does not use Index 
    console.log(set[0])
//  undefined

//===========================================================================

// 3. MAP

//    Map stores data in key-value pairs.

      let student= new Map()

      student.set("name","Najila");
      student.set("age",33);
      student.set("course","JavaScript")

      console.log(student);
       
//   Getting a value
     console.log(student.get("name"));

//  Checking a value
     console.log(student.has("age"));

//  Deleting a key
     student.delete("age")
    console.log(student);

//  Number of entries
    console.log(student.size);

//=================================================================

// 4. MAP vs OBJECT

      let personObject= {
        name:"Najila",
        age:33
      }

      console.log(personObject);
// Object
      console.log(personObject.name);

//  Map
    let personMap = new Map();
    personMap.set("name", "Najila");
    personMap.set("age",33);

    console.log(personMap.get("name"));

// Map has built-in size
    console.log(personMap.size);

// Object does not have a direct size property
    console.log(Object.keys(personObject).length)

//==============================================================================

// 5. WEAKSET

//    WeakSet stores only objects

     let weakSet = new WeakSet();

     let user1= {name: "Najila"};
     let user2= {name:"Rahul"}

     weakSet.add(user1);
     weakSet.add(user2);
      console.log(weakSet);

// checks whether an object exists
    console.log(weakSet.has(user1))

// Remove an object
     weakSet.delete(user2);
     console.log(weakSet);

//=============================================================================

//  6. WEAKMAP

// WeakMap stores datas in key-value pairs . Keys must be objects.

   let weakMap = new WeakMap();
   let user={
    name:"Najila"
   };
   weakMap.set(user, "Javascript Student")
   console.log(weakMap);

 //  Getting the value
      console.log(weakMap.get(user));

//   Deleting the key
     weakMap.delete(user);
     console.log(weakMap);
     
   
     
