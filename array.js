
// A Single variable which holds multiple values

// Types of array 1. string 2. Number 3. collection of object

const number = [10, 12, 13, 14, 15]; // Number Array

const string = ["Advika", "Shruthi", "Dhanush", "SK", "Vijay"]; // 
const gmail = ["advika@gmail.com", "shruthi@gmail.com"];
const person = [
    {
        firstName: "Advika",
        lastName: "Janardhan",
        middleName: "Gu",
        age: 25,
        gender: "Female",
        dob: "Sep 11, 1994",
        is_active: 1,
        option: [{
            name: "300mg"
        }]
    }, // 0
    {
        firstName: "Shruti",
        lastName: "Janardhan",
        middleName: "Gu",
        age: 19,
        gender: "Female",
        dob: "31 May, 2000",
        is_active: 0,
        option: [{
            name: "500mg"
        }]
    }, // 1

]; // Original Array

/**
 * Map, -> return new array and i/p adn o/p length will same  
 * Filter, -> returns new array with matching condition
 * find, -> return object
 * reduce, - returns cummaltive
 * forEach - 
 * indexOf - return index of the given element
 * includes, ->return true/false
 * every, -> return true/false 
 * some, -> return true/false
 * splice, -> return remove
 * slice, -> return copy
 * pop -> to remove last element
 * Fill -> Fill all the array elements with a static value
 * join -> returns string with separated
 * toString -> returns string with comma separated
 */

/**
 * Map
 * array.map(function(currentValue, index, arr), thisValue)
 * method creates a new array with the results of calling a function for every array element.
 * must have a return statement
 */
const names = person.map(function (per, idx) {
    return {
        name: `${per.firstName} ${per.lastName}`,
        age: per.age,
        active: per.is_active,
        id: idx + 1
    }
});

/** Filter 
 * array.filter(function(currentValue, index, arr), thisValue)
 * method creates an array filled with all array elements that pass a test
 * must have a return statement
 * */
const filterValue = person.filter(function (per) {
    return per.age > 18;
});

/**
 * Find
 * array.find(function(currentValue, index, arr),thisValue)
 * method returns the value of the first element in an array that pass a test
 * must have a return statement
 */
const foundValue = person.find(function (per) {
    return per.age > 18;
});


/**
 * Reduce
 * array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
 * this method reduces the array into single value
 * must have a return statement
 * NOTE: This won't change the original Arr
 */
const sumofAge = person.reduce((acc, cur) => {
    return acc + cur.age;
}, 0);

console.log(`Using Reduce method ${sumofAge / person.length}`);


/**
 * For Each
 * array.forEach(function(currentValue, index, arr), thisValue)
 * method calls a function once for each element in an array, in order.
 * Anonymous Arrow Function
 */
let option = [];
person.forEach((per) => {
    // delete per.is_active;
    option = [...option, ...per.option.map((o) => o.name)];
});
console.log(option);

/**
 * indexOf
 * array.indexOf(item, start)
 * method searches the array for the specified item, and returns its position
 */
console.log(`Using Indexof method in array ${number.indexOf(10)}`);

/**
 * includes
 * array.includes(element, start)
 * method determines whether an array contains a specified element
 */
console.log(`Using includes method in array ${number.includes(10)}`);

/**
 * every
 * array.every(function(currentValue, index, arr), thisValue)
 * method checks if all elements in an array pass a test
 * checking all numbers in the array are even
 */
console.log(`Using every ${number.every((n) => n % 2 === 0)}`);

/**
 * some
 * array.some(function(currentValue, index, arr), thisValue)
 * method checks if any of the elements in an array pass a test
 * checking any no's is even
 */
console.log(`Using some ${number.some((n) => n % 2 === 0)}`);

/**
 * splice
 * array.splice(start, howmany, item1, ....., itemX)
 * method adds/removes items to/from an array, and returns the removed item(s).
 */
console.log(`Using splice ${number.splice(0, 2)}`);

/**
 * pop
 * array.splice(index, howmany, item1, ....., itemX)
 * method returns the selected elements in an array, as a new array object
 */
console.log(`Using slice ${number.slice(0, 3)}`);

/**
 * array.pop()
 * method removes the last element of an array, and returns that element
 */
console.log(`Using Pop ${number.pop()}`);

/**
 * fill
 * array.fill(value, start, end)
 * method fills the specified elements in an array with a static value
 * use when an array is either string or number array and not on object array
 */
console.log(`Using Fill ${number.fill(10)}`);

/**
 * join
 * array.join(separator)
 * method returns the array as a string.
 * use when an array is either string or number array and not on object array
 */
console.log(`Using Join in GMAIL Array ${gmail.join("/")}`);

/**
 * array.toString()
 *  method returns a string with all the array values, separated by commas.
 * use when an array is either string or number array and not on object array
 */
console.log(`Using Join in GMAIL Array ${gmail.toString()}`);
