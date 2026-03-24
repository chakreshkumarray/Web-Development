
// Immediately Invoked Function Expressions (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern which produces a lexical scope using JavaScript's function scoping. This helps to avoid polluting the global namespace and can be used to create private variables and functions.

(function DbConnect(){      // This is two IIFE, one is named and another is anonymous.
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Chakresh')