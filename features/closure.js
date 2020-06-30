// Closure - lexical Scoping
// a closure gives you access to an outer function’s scope from an inner function
// to avoid global pollution
// Securing and having updated value of variables
// return function only (do not return variable else updated value we wont get)
// let count = 0;

// Example 1
const Count = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
};

console.log('Count is ', Count());

// Example 2    
function makeFunc() {
    let name = 'Mozilla';
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

