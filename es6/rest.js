
/**
 * 
 * @param  {...any} args Rest Parameter in Es6
 * passing a single parameter to fn which is aggregated
 */
const addNumbers = (...args) => {
    return args.reduce((acc, cur) => acc + cur);
}

const sumOfNumbers = addNumbers(4, 6, 7, 8, 9, 10);
console.log({sumOfNumbers});
