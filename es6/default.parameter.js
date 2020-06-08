// Old Way
const oldDefault = (a) => {
    return a ? a : 0;
}
const oldDefaultRes = oldDefault(10);
console.log({ oldDefaultRes });


// New Way 
const newDefaultWay = (a = 10) => {
    return a * 10;
}
const newDefaultRes = newDefaultWay(300);
console.log({ newDefaultRes });
