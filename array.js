
// A Single variable which holds multiple values

// Types of array 1. string 2. Number 3. collection of object

const number = [10, 12, 13, 14, 15]; // Number Array
const string = ["Advika", "Shruthi", "Dhanush", "SK", "Vijay"]; // 
const person = [
    {
        firstName: "Advika",
        lastName: "Janardhan",
        middleName: "Gu",
        age: 25,
        gender: "Female",
        dob: "Sep 11, 1994",
        is_active: 1
    }, // 0
    {
        firstName: "Shruti",
        lastName: "Janardhan",
        middleName: "Gu",
        age: 19,
        gender: "Female",
        dob: "31 May, 2000",
        is_active: 0
    }, // 1

]; // Original Array

/**
 * Map, -> return new array and i/p adn o/p length will same  
 * Filter, -> returns new array with matching condition
 * find, -> return object
 * reduce, - returns cummaltive
 * forEach,
 * indexOf
 * includes,
 * every,
 * some,
 * splice,
 * slice,
 * pop
 */

// Map Fn
const names = person.map(function (per, idx) {
    return {
        name: `${per.firstName} ${per.lastName}`,
        age: per.age,
        active: per.is_active,
        id: idx + 1
    }
});

// Filter Fn
const filterValue = person.filter(function (per) {
    return per.age > 18;
});

// Find Fn
const foundValue = person.find(function (per) {
    return per.age > 18;
});

// Reduce Fn
const sumofAge = person.reduce((acc, cur) => {
    return acc + cur.age;
}, 0);

console.log(sumofAge / person.length);


