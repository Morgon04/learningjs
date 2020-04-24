
/**
 * callback
 * To handle async code
 * jumping one fn to another
 * A callback function is a function passed into another function as an argument
 */


/**
 * 
 * @param {*} cb it's a function
 */
const checkAuth = (req, cb, errorCb) => {
    console.log(req);
    console.log("Checking Auth...");
    const auth = true;
    setTimeout(() => {
        auth ? cb(true) : errorCb("Auth Failed"); // true means argument for the fn
    }, 2000);
}

const fetchUser = (user, error) => {
    console.log("Fetching User...");
    const fetchUser = true;
    setTimeout(() => {
        fetchUser ? user({ name: "Jackie Chan" }) : error("No User Found");
    }, 2000);
}

const userProductDetails = (success, error) => {
    console.log("Fetching Product...");
    const fetchProduct = true;
    setTimeout(() => {
        fetchProduct ? success({ name: "Headet" }) : error("No Product Found");
    }, 2000);
}

/**
 * Call back Hell or pyramid of doom
 */
checkAuth('req',
    function (userDefinedValue) { // Success block
        if (userDefinedValue) {
            fetchUser(
                ({ name }) => {
                    console.log(name);
                    fetchProduct(
                        function (product) { // Success Block
                            console.log(product);
                        },
                        function (error) { // Error
                            console.log(error);
                        }
                    );
                },
                (fetchUserError) => {
                    console.log(fetchUserError);
                }
            );
        }
    },
    function (error) { // Error Block
        console.log(error);
    });

