// let timer;
// clearTimeout(timer);

// timer = setTimeout(() => {
//     console.log(timer);
// }, 1000);

const array = [10, 12];
function removeDuplicate() {

    let arrayMap = {};
    array.forEach((a) => {
        arrayMap[a] = a;
    });
    const newElement = 12;
    if (arrayMap[newElement] === newElement) {
        return 'No Already Exists';
    } else {
        array.push(newElement);
        return array;
    }
}

function missingNo(no) {
    if (Array.isArray(no) && no.length === 0) {
        return `Send a proper Array No's`;
    } else {
        const length = no.length;
        const sumOfElements = no.reduce((acc, cur) => {
            return acc + cur;
        });
        const sumOfLength = length * (length + 1) / 2;

        return sumOfLength - sumOfElements;

    }
}

console.log(missingNo([0, 1, 3, 4, 5, 6, 7, 8, 9]));

// console.log(removeDuplicate());

