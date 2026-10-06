//-------------------- SHORT-CIRCUITING WITH LOGICAL OPERATORS------------------------------

//  1. OR (||)

//     OR returns the first truthy value. 
//     If the firt value is falsy, it checks and returns the second value.

     let name= "";
     let result = name || "Guest" ;
     console.log(result);
//   Guest

// Another example

    let username = "Najila";
    let displayName = username || "Guest"
    console.log(displayName);
//  Najila

//  2.  AND (&&)

//      AND returns the first falsy value.

//      If the first value is truthy , it checks and returns the second value.

        let isLoggedIn= true;
        let message= isLoggedIn && "Welcome!";
        console.log(message);
        // Welcome !

// If the first value is false, the second value is not evaluated.
      
        let loggedIn = false;
        let message2 = loggedIn && "Welcome!";
         console.log(message2)
         // false

//==============================================================================================================
 
//   3. SHORT-CIRCUIT WITH FUNCTIONS
       
       function showMessage() {
        console.log("Function executed");
       }
       let condition= true;
       condition && showMessage();
//=====================================================================================================

// 4. OR WITH DEFAULT VALUE

      let age;
      let userAge = age|| 18;
      console.log(userAge);
      //18
//=====================================================================================================

// 5. AND WITH CONDITIONS

      let userAge2 =20;
      userAge2 >= 18 &&
      console.log("You are an adult");

//=======================================================================================================

// 6. FALSY VALUES

//    These values are falsy in javaScript:

      console.log(false|| "Hello");
      console.log(0||"Hello");
      console.log(""||"Hello");
      console.log(null|| "Hello");
      console.log(undefined|| "Hello");

//====================================================================================================

// 7. TRUTHY VALUES
    
     console.log(true|| "Hello");
     console.log(10|| "Hello");
     console.log("Najila" || "Hello");
     console.log([]|| "Hello");
     console.log({}|| "Hello");

//=====================================================================================================

// 8. IMPORTANT DIFFERENCE

      let value1 = 0||100;
      let value2 = 10 && 20;

    console.log(value1);
    console.log(value2);