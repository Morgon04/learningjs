
function functionThis() {
    console.log(this); // prints window object
} // Regular Function

// functionThis();

const object = {
    name: 'Murugan',
    greet: function () {
        console.log(this.name);

        let doSomeEffects = function () {
            console.log(this.name);
        }

        doSomeEffects();
    }
}

object.greet();

