let array = [6, 6, 7];

function addOne(array) {
    let i = array.length - 1;
    while (i >= 0) {
        array[i] += 1;
        if (array[i] === 10) {
            array[i] = 0;
            i -= 1;
        } else {
            break;
        }
    }

    if (i === -1) {
        array.splice(0, 0, 1);
    }
    return array;
}

console.log(addOne(array));