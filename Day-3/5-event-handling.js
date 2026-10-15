
/*
     DAY 3 - FILE 5 : EVENT HANDLING
     --------------------------------

     1.  What is an event ?
         An event is an action or occurence in the browser , such as click , typing or submit.

     2.  What is event handling ?
         Event handling means responding to events using JavaScript.

    3.  addEventListener()
        Used to attach an event listener to an element.
        Syntax:
                element.addEventListener("click", callback);

    4. removeEventListener()
       Used to remove a previously registered listener.

    5. event.target
       The element where the event originally occured.

    6. event.currentTarget
       The element whose listener is currently running.

    7. IMPORTANT DIFFERENCE
       
       target -> Origin of the event.
       currentTarget -> Element handling the event.

    8. Common Events :
                      click, input , change , submit , mouseover , keydown
                
*/

console.log("==== EVENT HANDLING ====")
 
//=====================================================================================================

 //                PART 1 : addEventListener()
 //              ----------------------------------

         const button = document.getElementById ("myButton");
         button.addEventListener("click", function(){
            console.log("Button clicked!")
         });
//=====================================================================================================

//              PART 2 : Named callback function
//            ---------------------------------------
         const messageButton = document.getElementById ("messageButton")
         function showMessage(){
            console.log("Hello! You clicked the message button.");
         }
         messageButton.addEventListener("click", showMessage);
//=======================================================================================================

//            PART 3 : removeEventListener()
//         ------------------------------------

           const removeButton = document.getElementById("removeButton")
           function sayHello(){
            console.log("Hello!")
           }
           removeButton.addEventListener("click", sayHello);
           const stopButton = document.getElementById("stopButton");
           stopButton.addEventListener("click", function(){
            removeButton.removeEventListener("click",sayHello);
            console.log("Hello listener removed!")
           });

//=============================================================================================================

//           PART 4 : event.target
//     -------------------------------- 

          const parent = document.getElementById("parent");
          const child = document.getElementById("child");
          parent.addEventListener("click", function(event){
            console.log("Target:", event.target);
            console.log("Current target", event.currenttarget);
          })
//======================================================================================================

//        PART 5 : Input event
//      --------------------------

        const  nameInput = document.getElementById("nameInput");
        nameInput.addEventListener("input", function(event){
         console.log("Input value :", event.target.value);
        });

