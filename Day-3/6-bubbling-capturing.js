/*
        DAY- 3 FILE 6 : EVENT BUBBLING AND CAPTURING
        =============================================

        1. EVENT PROPOGATION
           Event propogation describes how an event travels through elements in the DOM.

        2. EVENT BUBBLING
           The event travels from the target element upward through its ancestors.
           Direction : 
           Child -> Parent -> Grandparent
           Bubbling is the default for most common events, including click events.
        
        3. EVENT CAPTURING
           The event travels from outer ancestors toward the target element.
           Direction:
           Grandparent -> Parent -> Child
            
           Capturing must be enabled by passing true or {capture : true} to addEventListener().

        4. addEventListener() SYNTAX
           element.addEventListener("click", callback,true);
           true means capturing.
           false(the default) means bubbling.

        5. event.target
           The element where the event originated.

        6. event.currentTarget
           The element whose listener is running.

        7. stopPropogation()
           Stops the event from continuing to propogate through the DOM.

           IMPORTANT :
           Capturing listeners run on the way down.
           Bubbling listeners on the way up.
            
 */ 
