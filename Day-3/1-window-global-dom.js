//============================================================================================================
//                                      DAY-3 FILE 1

//           Relationship between Window, Global Object and DOM
//=========================================================================================================

// 1. Window Object
      
    console.log(window);

// 2. Window is the global object in browser
    
    console.log(window=== globalThis);

// 3.  Document object 

    console.log(document);

// 4. Check the relationship

      console.log(window.document === document);
//===========================================================================================================

/* 
    1. GLOBAL OBJECT
  -------------------

  The global object provides access to global features available in a JavaScript environment.
  In browsers , the global object is window.
  In modern JavaScript , globalThis provides a standard way to access the global object.

  2. WINDOW OBJECT
  -------------------
  The window object represents the browser's window and provides access to browser features.
  Examples: 
           window.alert()
           window.location
           window.navigator
           window.innerWidth

  3. DOCUMENT OBJECT
  ----------------------
  The document object represents the webpage loaded in the browser.
  We use document to access and manipulate HTML elements.
  Examples:
           document.title
           document.body
           document.QuerySelector()

   4. DOM
   -----------
   DOM stands for Document Object Model.
   The browser represents an HTML documents as a tree of objects called DOM nodes.
   JavaScript can use the DOM to read or change HTML elements, content, attributes and styles.

   5. RELATIONSHIP
   -----------------
   Browser window -> window object
   window document -> document object
   document -> webpage's DOM

   6. IMPPORTANT DIFFERENCE
   ---------------------------
   window: browser window and browser features
   globalThis: standard access to global objecr
   document: webpage content represented by the DOM

   Note:  window and document are available in browsers , but not directly in Node.js
   





*/
    

