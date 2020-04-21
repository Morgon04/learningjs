/**
 * What is this
 * this refers to object, the object which is executing the current bit of js code
 * in other words, every js fn while executing has a reference to its
 * current execution context, called this
 * this works differently in fn and objects
 */

/**
 * Regular Fn
 * in regular fn, this works as global Object 
 * global object means `window`
 */
var name = "Murugan";
function regular(param1, param2) {
    console.log("Inside Function ", this.name + " " + param1 + " " + param2);
}

// regular();

/**
 * Object
 * in object, it refers to the own context
 * i.e this refers to object
 */
const person = {
    name: "Roobini",
    printName() { // Outer Fn

        console.log("Inside Object ", this.name);
        insidefunction = function () { // Inner Fn
            console.log("Inside Inside  Object 34 ", this.name);
        }
        insidefunction.call(person);
    }
};

person.printName();


/**
 * call
 * method calls a function with a given this
 * and additionally params one by one
 * call(this, param1, param2, ..., paramN)
 */
console.log("Using Call");
regular.call(person, "Hello", "CALL");

/**
 * bind
 * method retuns a function with a given this
 * and additionally params one by one
 * bind(this, param1, param2, ..., paramN)
 */
const bound = regular.bind(person, "Hello", "BIND");
console.log("Using Bind");
bound();

/**
 * apply
 * method calls a function with a given this
 * and additionally params in array
 * apply(this, [param1, param2, ..., paramN])
 */
console.log("Using Apply");
regular.apply(person, ["Hello", "APPLY"]);
