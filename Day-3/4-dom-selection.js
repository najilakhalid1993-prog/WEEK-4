//       DAY-3   FILE 4  : DOM SELECTION
//       ---------------------------------

/*
     1. What is DOM selection ?
        DOM selection means finding HTML elements from a webpage using JavaScript.

    2.  getElementById()
        Selects an element using its unique ID. 
        Returns the elements or null if not found.

    3.  querySelector()
        Selects ALL elements matching a CSS selector.
        Returns the element or null if not found.

    4.  querySelectorAll()
        Selects ALL elements matching a CSS selector.
        Returns a static Nodelist, even when no elements match.

    5.  CSS selector reminders:
        "#title" -> ID
        ".item"  -> Class
        "p"      -> Tag name
        "div p"  -> p elements inside div

    6. IMPORTANT DIFFERENCE
       getElementById("title") -> ID name without #
       querySelector("#title") -> ID selector with #

    7. After selecting an element, you can:
       - Read or change textContent
       - Change styles
       - Change attributes
       - Add or remove elements.
*/

console.log("==== DOM SELECTION ====");

// PART 1 : getElementById()

   const heading = document.getElementById("main-title");

   console.log("Heading : " , heading);
   console.log("Heading text :" , heading.textContent);

// PART 2 : querySelector() with an ID
 
   const firstParagraph = document.querySelector("#intro");
   console.log("First paragraph:", firstParagraph);
   console.log("Paragraph text:", firstParagraph.textContent);

// PART 3 : querySelector() with a class

   const firstItem = document.querySelector(".item");
   console.log("First item:", firstItem);
   console.log("First item text: ", firstItem.textContent);

// PART 4 : querySelector() with a tag name

   const firstButton =  document.querySelector("button");
   console.log("First button:" , firstButton)


// PART 5 : querySelectorAll()

   const allItems = document.querySelectorAll (".item")
   console.log("All items :" , allItems);
   console.log("Number of items:" , allItems.length);

// PART 6 : Loop through selected elements

   allItems.forEach((item)=>{
    console.log(item.textContent)
   })

// PART 7 : Change selected element content
 
   heading.textContent = "DOM Selection Practice";

// PART 8 : Change selected element style

   heading.style.color= "blue";



   
