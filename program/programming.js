


const _fibonacciSeries = no => {
    no = Number(no);
    let prevPrevNum = 0, prevNum = 1, curNum = 1;
    if (no <= 1) {
        console.log(no);
    } else {
        console.log(prevPrevNum);
        console.log(prevNum);
        for (let i = 0; i <= no; i++) {
            curNum = prevPrevNum + prevNum;
            prevPrevNum = prevNum;
            prevNum = curNum;
            console.log(curNum);
        }
    }
}

const _findUniqueElementsInSortedArray = arr => {
    const uniqueArray = arr.filter((a, idx) => {
        return (arr[idx] !== arr[idx - 1]) &&
            (arr[idx] !== arr[idx + 1]);
    });
    console.log(uniqueArray);

}

_findUniqueElementsInSortedArray([1, 1, 2, 3, 3, 3, 4, 5, 5]);

function printOneAndAst(no) {
    let one = 1;
    let ast = "*";
    let oneAndAst = '';
    if (no === 1) {
        console.log(one);
    }
    for (let i = 2; i <= no; i++) {
        oneAndAst = `${oneAndAst} ${i % 2 === 0 ? one : ast}`;
        console.log(oneAndAst);
    }
}

printOneAndAst(5)


module.exports = {
    fibonacciSeries: _fibonacciSeries,
    findUniqueElementsInSortedArray: _findUniqueElementsInSortedArray
}



