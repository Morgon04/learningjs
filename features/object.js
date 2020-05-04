let object = {
    name: "Jackie Chan",
    height: "1.74m",
    dob: "7th April 1954",
    gender: "Male",
    age: 66
};

const secondObject = {
    spouseName: "Joan Lin"
};

/**
 * assign
 * entries
 * keys
 * values
 * seal
 * freeze
 */

/**
 * assign
 * Object.assign(target, ...sources)
 * method copies all enumerable own properties from one or more source objects to a target object
 * returns the target object (output object)
 */
console.log("Copying one obj to another using assing from Object");
object = Object.assign(object, secondObject);
console.log(object);

/**
 * entries
 * Object.entries(obj)
 * returns an array of a given object's own enumerable string-keyed property [key, value] pairs
 */
/**
 * Object.entries(object).forEach(([key, value]) =>{
 *  console.log(`${key} ${value}`)
 * })
 */

/**
 * keys
 * Object.keys(obj)
 * method returns an array of a given object's own enumerable property names
 */
console.log(Object.keys(object));

/**
 * values
 * Object.values(obj)
 * method returns an array of a given object's own enumerable property values
 */
// console.log(Object.values(object));

/**
 * seal
 * Object.seal(obj)
 * preventing new properties from being added to the object
 * Values of present properties can still be changed
 */
Object.seal(object);
/**
 * object.newValue = "new value"; // not possible
 * delete object.gender // not possible
 * object.gender = "male" // possible
 */

/**
 * freeze
 * Object.freeze(obj)
 * A frozen object can no longer be changed
 * new properties from being added to it
 * values of existing properties from being changed
 */
// Object.freeze(object);
/**
 * object.newValue = "new value"; // not possible
 * delete object.gender // not possible
 * object.gender = "male" // not possible
 */



