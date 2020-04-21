
/**
 * Arrow Fn
 * you cannot pass this to arrowfn
 * the value of this inside arrow functions is not dependent on how they are invoked or how they are defined.
 * It depends only on its enclosing context.
 */
const functionExp = () => {
    console.log(this.name);
}

functionExp(); // undefined


const object = {
    scores: [10, 15, 17],
    name: "Advika",

    printScores: () => {
        this.scores.forEach(function (s) { // regular fn
            console.log(`Score of ${this.name} is ${s} inside Regular Fn`);
        }, object);

        this.scores.forEach((s) => { // Arrow fn
            console.log(`Score of ${this.name} is ${s} inside Arrow Fn`);
        });
    }
}

const object1 = {
    name: "Shruthi",
    scores: [10, 15, 17],
    scoresObject: [
        {
            name: "Advika"
        },
        {
            name: "Murugan"
        }
    ],
    printScores: function () {
        /**
         * Right Fn
         */
        this.scores.forEach(function (s) { // regular fn
            console.log(`Score of ${this.name} is ${s} inside Regular Fn`);
        }, object);

        this.scores.forEach((s) => { // Arrow fn
            console.log(`Score of ${this.name} is ${s} inside Arrow Fn`);
        });

        /**
         * Wrong Fn
         */
        // this.scores.forEach(function (s) { // regular fn
        //     console.log(`Score of ${this.name} is ${s} inside Regular Fn`);
        //     this.scores.forEach((s) => { // Arrow fn
        //     console.log(`Score of ${this.name} is ${s} inside Arrow Fn`);
        // });
        // });
    }
}

const scores = object.scores.reduce(function (acc, cur) {
    return acc + cur;
}, 0);

console.log(`Scores Using Regular Fn Exp ${scores}`);

/**
 * Shorthand syntax
 */
const scores1 = object.scores.reduce((acc, cur) => { return acc + cur },
    0);
// Equalivent
const scores2 = object1.scores.reduce((acc, cur) => acc + cur);

console.log(`Scores Using Arrow Fn ${scores2}`);