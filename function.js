// What is Js Function
// Function is a set statements that can be used again and again based on the scenario
// Function consist of re-usable statements
/**
 * Void and Return 
 * Types of functions are 1. Normal and  2. Function Expression
 *  
 * */


// Normal or Regular Functions
// Regular Fn's Can be Hoisted

// 1. Void Function

let counter = 10;
function voidExample(arg1) {

    const a = 10;

    if (a === 10) {
        console.log("Function Scope inside Block", a);
        let b = 20;

        // console.log("Block Scope inside Block", b);
    }
    // console.log("Function Scope ", a);
}

voidExample();
function sum(...args) {
    return args.reduce((a, c) => a + c);
}

console.log("Sum of 10, 20 and 30 is ", sum(10, 20, 30, 40, 50));
// 2. A RegularFn with return statement
function returnExample(a, b) {
    return a + b;
}

const returnedPromise = promise("");
returnedPromise
    .then()
    .catch();


function promise(url) {
    return fetch(url);
}
// const c = returnExample(10, 30);
// console.log("Return Example", c);

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


// console.log("Arrow Anonymous Exp O/P ", sumAnArrow(10, 20));

// console.log("Anonymous Exp O/P ", sumAn(10, 20));

// 2. Named Function Expression
// const sumNamed = function recursion(a) {
//     if (a === 0 || a === 1) {
//         return a;
//     } else {
//         return recursion(a - 1) + recursion(a - 2);
//     }
// }

// console.log("Named Function Exp ", sumNamed(10));

// IIFE - Immediately Invoked Function Expression // Self Invoking Function
(function printName(name) {
    counter = counter + 1;
    console.log(counter);

    console.log("IIFE TRIGERED ", name);
})("Advika");

function increaseCounter() {
    counter = counter + 1;
}
increaseCounter(); // 11 + 1 = 12
increaseCounter(); // 12 + 1 = 13

console.log("Counter Value", counter);



