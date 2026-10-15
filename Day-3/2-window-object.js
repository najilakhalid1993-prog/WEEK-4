/*
============================================================================================================
                       DAY-3   FILE 2 : WINDOW OBJECT
==========================================================================================================
  
1. What is the window object ?
   The window object represents the browser window and provides access to browser APIs.

2. Important window properties:
   
    window.innerWidth -> Inner width of viewport.
    window.innerHeight -> Inner height of viewport.
    window.location -> Information aboit the URL
    window.navigator -> Browser information
    window.document -> Current webpage

3. Important window methods:

    window.alert() -> Displays an alert
    window.confirm() -> Displays OK/Cancel
    window.prompt() -> asks the user for input.
    window.setTimeout() -> Runs a callback after a delay.
    window.setInterval() -> Repeats a callback.
    window.open() -> Opens a URL/ window (may be blocked)

4. Important:

   window is available in browsers, not directly in Node.js
   */

// ==================================================================================================

//    PART:1 WINDOW OBJECT
//     ----------------------------
      
     console.log("PART 1 : WINDOW OBJECT")
     console.log(window)
     console.log(window===globalThis)
//  Expeced : true in a normal browser page.

//=====================================================================================================
//            PART 2 : WINDOW DIMENTIONS
//         ----------------------------------

    console.log("PART 2: WINDOW DIMENSIONS")
    console.log("Width: ", window.innerWidth);
    console.log("Height" , window.innerHeight)

//=====================================================================================================
//         PART 3 : LOCATION
//       -------------------------

     console.log("PART 3 : LOCATION");
     console.log(window.location);
     console.log("Current URL : " , window.location.href);

//====================================================================================================

//     PART 4 : NAVIGATOR
//   ------------------------------

   console.log("PART : NAVIGATOR");
   console.log("Browser information : " , window.navigator.userAgent);

//=======================================================================================================

//     PART 5 : ALERT , CONFIRM AND PROMPT
//    -----------------------------------------

// Uncomment one at a time to practise.

     // window.alert("Welcome to Day-3");

    // const answer = window.confirm ("Do you want to continue?")
    //console.log( "Confirmation:" , answer);

   // const userName= window.prompt ("Enter your name:");
    //console.log("Your name: " , userName)

//=========================================================================================================

//        PART 6 : SETTIMEOUT
//       ---------------------------

      console.log("PART: SETTIMEOUT" )
      window.setTimeout(()=>{
        console.log("This message appears after 2 seconds")
      },2000)

//========================================================================================================

//      PART 7 : SETINTERVAL
//     ------------------------

//  Uncomment to practise.
//  Stop it after a few repetitions using clearInterval.

   /* let count =0
    const timerId = window.setInterval(()=>{
        count++ ;
        console.log("Count : " , count);
        if(count === 5){
            window.clearInterval(timerId);
            console.log("Interval stopped.")
        }
    },1000)
    */


//===================================================================================================

//      PART 8 : CLEAR TIMEOUT
//     ------------------------------

     const timeoutId = window.setTimeout = window.setTimeout(() => {
         console.log("This message will not appear.")
     },3000)

      window.clearTimeout(timeoutId)


     
