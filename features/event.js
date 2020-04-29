/**
 * Sync and Async othwersie 
 * blocking and non-blocking
 * In event loop there is two tasks are available
 * 1. Micro (high priority) and 2. Macro (low priority)
 * In Micro -> Sync and Async (Promises)
 * In Macro -> Timeout and interval
 */

// console.log("Synchronous 1");

// const amPromise = new Promise((res, rejc) => {
//     setTimeout(() => {
//         // console.log("Asynchronous")
//     }, 1000);
// });

// console.log("Synchronous 2");

// Interview Question
console.log("Synchronous 1");

const amPromise = new Promise((res, rejc) => {
    setTimeout(() => {
        console.log("Asynchronous")
    }, 0);
});

setTimeout(() => {
    console.log("Timeout")
}, 0);