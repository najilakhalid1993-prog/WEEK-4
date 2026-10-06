
//------------------------SYMBOL AND BIGINT-----------------------------------

// 1. SYMBOL

//    Symbol creates a unique value.

     let id1= Symbol("id");
     let id2= Symbol("id");

     console.log(id1);
     console.log(id2);

// Even if the description is the same, two Symbols are still different.
     
    console.log(id1===id2);

// Check the type
      console.log( typeof id1);
//    symbol

//=====================================================================================================

// 2. SYMBOL AS AN OBJECT PROPERTY

      let user= {
        name: "Najila",
        age:33
      };
      let userId= Symbol ("userId");
      user [userId]= 101;

      console.log(user);
      console.log(user[userId]);

//  Symbol property does not conflict with normal string properties

    let anotherId = Symbol("userId");
    user[anotherId]=202;
    console.log(user[userId])
//  101
    console.log(user[anotherId]);
//  202
    console.log(userId === anotherId);
//  false

//=========================================================================================================

// 3. BIGINT

//    Bigint is used for very large integers.

       let bigNumber = 123456789012345678901234567890n;
       console.log(bigNumber);
       console.log(typeof bigNumber);
//     bigint

//    The 'n' at the end creates a Bigint

//=============================================================================================

//  4. BIGINT OPERATIONS

       let a = 100n;
       let b = 50n;
       
       console.log(a+b);
       console.log(a-b);
       console.log(a*b);
       console.log(a/b)

//==============================================================================================================

//  5. BIGINT AND NUMBER

   let number=100;
   let bigintNumber = 100n;
   console.log( typeof number);
// number
   console.log(typeof bigintNumber);
// bigint

// Bigint and Number cannot normally be mixed in arithmetic

//  console.log(number + bigintNumber);
//  This gives a typeError

// Convert Number to Bigint
   console.log(BigInt(number));

// Convert Bigint to Number
   console.log(Number(bigintNumber))

      