function reverseString(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    return reverse;
}

// console.log(`Reversed String ${reverseString('advika')}`);


function findingDuplicateEl(arr) {
    const arrayMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (arrayMap && arrayMap[arr[i]] === arr[i]) {
            return `Duplicate Element is ${arr[i]}`;
        } else {
            arrayMap[arr[i]] = arr[i];
        }
    }

    return 'No Duplicate Element Found';
}
// console.log(`${findingDuplicateEl([10, 12, 14, 16])}`); // No Duplicate
// console.log(`${findingDuplicateEl([10, 10, 14, 12])}`); // Matching Element 


function generatePyramid(rows) {
    let output = '';
    for (let i = 1; i <= rows; i++) {
        output += i + '  ';
        console.log(output);
    }
}

function generateStar(rows) {
    const one = '1 ';
    const star = '* ';
    let output = '';
    for (let i = 1; i <= rows; i++) {
        output += i % 2 === 0 ? star : one;
        console.log(output);
    }
}


// generateStar(5);
// generatePyramid(10);


const isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(isPrime(12));





