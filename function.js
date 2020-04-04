// What is Js Function
// Function is a set statements that can be used again and again based on the scenario

/**
 * Void and Return 
 * Types of functions are 1. Normal and  2. `Arrow Function`
 *  
 * */


// Normal or Regular Functions

// 1. Void Function
function voidExample(arg1) {

    const a = 10;

    if (a === 10) {
        console.log("Function Scope inside Block", a);
        let b = 20;

        console.log("Block Scope inside Block", b);
    }
    console.log("Function Scope ", a);
}

voidExample();

// 2.Return Function
function returnExample(a, b) {
    return a + b;
}

const c = returnExample(10, 30);
console.log("Return Example", c);

// Normal Function Ends Here...

// what is FE?
// Declaring a function and assigning it to variable

// Types of Function Expression

// 1. Anonymous Function Expression
const sumAn = function (a, b) {
    return a + b;
}

// Arrow Functions
const sumAnArrow = (a, b) => {
    return a + b;
};


console.log("Arrow Anonymous Exp O/P ", sumAnArrow(10, 20));

console.log("Anonymous Exp O/P ", sumAn(10, 20));

// 2. Named Function Expression
const sumNamed = function recursion(a) {
    if (a === 0 || a === 1) {
        return a;
    } else {
        return recursion(a - 1) + recursion(a - 2);
    }
}

console.log("Named Function Exp ", sumNamed(10));

// IIFE - Immediately Invoked Function Expression
(function printName(name) {
    console.log("IIFE TRIGERED ", name);
})("Advika");



