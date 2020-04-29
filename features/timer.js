/**
 * Macro Task
 * interval and timeout
 * Interval run every time when it meets the ms
 * timeout runs only once
 */

/**
 * Interval
 * setInterval(callback, ms, arguments)
 * you can cancel interval
 */
let counter = 0;
const interval = setInterval((name) => {
    // 1000 0
    // 2000 1
    // 3000 2
    // 4000 3
    // 5000 4
    if (counter === 1) {
        clearInterval(interval);
        console.log("Interval Cleared", name);
    } else {
        console.log("Am Interval", counter);
        counter++;
    }
}, 1000, "Jackie Chan");

/**
 * settimeout
 * setTimeout(callback, ms, arguments)
 */

setTimeout((name) => {
    console.log("Am Settimeout", name);
}, 6000, "Jackie Chan");


// Example Program
// const object = {
//     scores: [10, 15, 17],
//     name: "Advika",

//     printScores: () => {
//         setTimeout((self) => { // Arrow Fn
//             console.log("Arrow Fn", self.name);
//         }, 1000, this);
//         setTimeout(function (self) { // Regular Fn
//             console.log("Regular Fn", self.name);
//         }, 1000, this);
//     }
// }

// object.printScores();