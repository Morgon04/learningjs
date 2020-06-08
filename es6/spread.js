/**
 * Spread Syntax
 * ...
 * makes an argument or variable as itertable
 * myFunction(...iterableObj);
 * to split array or obj or strings into individual elts
 */

const name = "Jackie Chan";

// Old way
console.log(name);

// New Way
console.log({ name });

let movies = ['How it ends', '5th Wave', 'Beyond Skyline'];
// movies.push('Dark');

movies = ['Dark', ...movies, 'Solo'];
// How it works (10th line)
// ['Dark', 'How it ends', '5th Wave', 'Beyond Skyline', 'Solo'];
console.log(movies);


let numbers = [10, 14, 15];
function addNumber(x, y, z) {
    return x + y + z;
}

// old Way
console.log("Adding No's using Old Way", addNumber.apply(null, numbers));

// New Way
console.log("Adding No's using New Way", addNumber(...numbers));

/**
 * USAGE
 * Copy
 * Array
 * Objects
 */

let obj = {
    name: "Jackie Chan",
    age: 65
}
// Old Way
// let cloneObj = obj;
// cloneObj.gender = "Male"
// console.log("Cloned in Old Way", cloneObj);
// console.log("Original in Old Way", obj);

// New Way
cloneObj = { ...obj };
cloneObj.gender = "Male";
console.log("Cloned in New Way", cloneObj);
console.log("Original in New way", obj);

// Merge Objects
const obj1 = { name: "David Beckam" };
const obj2 = { profession: "Ex Football player" };

// Old Way
const assignMerge = Object.assign(obj1, obj2);
// console.log(assignMerge);

// Spread Way
const merged = { ...obj1, ...obj2 };

 
const array1 = ["Choco Chikku"];
const array2 = ["Sweet lime"];

// old way
const oldMerge = array1.concat(array2);

// New way
const newMerge = [...array1, ...array2, "pineapple juice"];
console.log("New Way", newMerge);

// Shifting
const shifting = [...array2, ...array1];
console.log("Shifting", shifting);







