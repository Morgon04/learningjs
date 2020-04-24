/**
 * Destructing in Variable
 */

const response = { status: 200, message: "Success", data: [] };

// old way
const status = response.status;
const message = response.message;

// new way
// const { status, message } = response;

console.log(status);
console.log(message);

/**
 * Destructing in Function
 */
const object = { name: "Jackie Chan", age: "25", gender: "Male" };

// old
function printNameOld(object) {
    console.log("Old Method ", object.name);
    console.log("Old Method ", object.age);
}
printNameOld(object);

// new way
function printNameNew({ name, age }) {
    console.log("New Method ", name);
    console.log("New Method ", age);
}

printNameNew(object);

/**
 * array destructing
 */

// Object Array
const array = [
    { name: "Arnold", designation: "actor" },
    { name: "James Bond", designation: "actor" }
];

// old way
console.log("******** Old Way Objects Array **********");
array.forEach((a) => {
    console.log("Old Way ", a.name)
});

// New Way
console.log("******** New Way Objects Array **********");
array.forEach(({ name }) => {
    console.log("New Way ", name)
});

// Array of Array

const arrayOfArray = [
    [
        "name", "Aronld"
    ],
    [
        "name", "Jamies Bond"
    ]
];

// old way
console.log("******** Old Way Array of Array **********");

arrayOfArray.forEach((a, idx, originalArr) => {
    console.log(originalArr[idx], idx)
    console.log("Old Way ", a[0]);
    console.log("Old Way ", a[a.length - 1]);
});



// New Way
console.log("******** New Way Array of Array **********");
arrayOfArray.forEach(([key, value]) => {
    console.log("New Way ", key);
    console.log("New Way ", value);
});

/**
 * Condition Destructuring 
 */
const requestObj = { method: "get" };
const reqBody = { firstname: "Tom Post" };
const reqQuery = { firstname: "Tom get" };

let firstname;

if (requestObj.method === "post") {
    ({ firstname } = reqBody);
} else if (requestObj.method === "get") {
    ({ firstname } = reqQuery);
}

console.log("******** Condition Destructure *********");
console.log(firstname);

