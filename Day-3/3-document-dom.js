/*
           DAY-3  FILE 3: DOCUMENT OBJECT ANF DOM STRUCTURE
           ------------------------------------------------

    1.  What is the document object ?
        The document object represents the webpage loaded in the browser.

    2.  What is DOM ?
        DOM stands for Document Object Model. 
        The browser represents HTML as a tree of nodes.

    3. What can we do using the DOM ?
       - Select HTML elaments.
       - Read or change text.
       - Change HTML content.
       - Change CSS styles.
       - Add or remove elements.
       - Handle user events.

    4. Important document properties:
    document.title -> Gets the page title.
    documengt.body -> Accesses the body element.
    document.head  -> Accesses the head element.
    document.URL   -> Returns the page URL

    5. Important DOM methods:
       document.getElemntById()
       document.querySelector()
       document.createElement()
       document.querySelectorAll()


    
*/
//======================================================================================================

//       PART:1    DOCUMENT OBJECT
//      ----------------------------

       console.log("PART 1 : DOCUMENT OBJECT") 
       console.log(document);
       console.log(window.document=== document);
       // Output : true

//=====================================================================================================

//      PART 2 : DOCUMENT  PROPERTIES
//     --------------------------------

      console.log("PART 2 : DOCUMENT PROPERTIES");
      console.log("Page title:" , document.title);
      console.log("Page URL :" , document.URL);
      console.log("Head element : " ,document.head);
      console.log("Body element : " , document.body);
//=======================================================================================================

//      PART 3 : DOM STRUCTURE
//     ---------------------------

      console.log("PART 3 : DOM STRUCTURE");
      console.log("HTML element :" , document.documentElement);
      console.log("Body children:" , document.body.children);
      console.log("Body first child :" , document.body.firstElementChild);
//=====================================================================================================

//     PART 4 : CHANGE PAGE TITLE
//    ------------------------------

     document.title= "Day 3 - Document and DOM";
     console.log("Updated title :" , document.title);
//======================================================================================================

//     PART 5: CREATE A NEW ELEMENT
//     ------------------------------

     const heading = document.createElement("h2");
     heading.textContent= "Learning JavaScript DOM";
     document.body.appendChild(heading);
     console.log("New heading :" , heading);
//=======================================================================================================

//      PART 6 : CHANGE AN ELEMENT'S STYLE
//     ---------------------------------------

      heading.style.color = "blue";
      heading.style.fontSize = "28px";

//=======================================================================================================

//      PART 7 : ADD A PARAGRAPH
//    ----------------------------

      const paragraph = document.createElement ("p");
      paragraph.textContent =  "The DOM allows JavaScript to interact with HTML.";
      document.body.appendChild (paragraph)
      console.log("New paragraph:" , paragraph);

//========================================================================================================

//      PART 8 : REMOVE AN ALERT
//    -------------------------------

       paragraph.remove();


       