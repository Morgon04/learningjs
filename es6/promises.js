/**
 * Promise is a something that'll happen not now but in
 * near future, means it will happen
 * In Js Promise means, it's way to handle async code
 * three states in promise "pending", "fulfilled" and "failed"
 * var promiseObj = new Promise(executor);

 */

// Function
const checkAuth = () => {
    return new Promise((resolve, reject) => {
        // console.log("Checking Auth");
        const isAuth = true;
        setTimeout(() => {
            isAuth ? resolve(isAuth) : reject("Auth failed");
        }, 2000);
    });
}

// Variable declaratio  and Ini
const fetchUser = new Promise((resolve, reject) => {
    // console.log("Fetching User");
    const fetchUser = true;
    setTimeout(() => {
        fetchUser ? resolve({ name: "Jackie Chan" }) : reject("No User Found");
    }, 2000);
});

// Pyramid Doom
checkAuth()
    .then(function (auth) {
        // console.log("Is Authenticated User ", auth)
        fetchUser
            .then((success) => {
                // console.log("Fetched User ", success.name)
            })
            .catch((error) => {
                // console.log(error);
            });
    }).catch((error) => {
        // console.log(error);
    });

/**
 * Chanining of then means
 * then also returns promise
 * which allows us to return promise inside then
 * @param {*} Note : Chain "then" only when one promise is 
 * depend on another and attach only one catch,
 * which will take care when ever is a failed sceanrio's 
 * in the chained promises 
 * Sequential 
 */
// New Way   (Dependent API)
checkAuth()
    .then((_auth) => {
        // console.log("Is Authenticated User ", auth);
        return fetchUser
    })
    .then((success) => {
        //  console.log("Fetched User ", success.name)
    })
    .catch((error) => console.log(error));



const fetchUserdetails = new Promise((resolve, reject) => {
    console.log("******* Fetching User Details ********");
    const isFetch = true;
    setTimeout(() => {
        isFetch ? resolve({ name: 'Jackie Chan', gender: 'Male' }) : reject('No User Found');
    }, 3000);
});

const movieDetails = new Promise((resolve, reject) => {
    console.log("Fetching Moving Details");
    const isProduct = true;
    setTimeout(() => {
        isProduct ? resolve(['Enter the dragon', 'Medaillion']) : reject('No Movies Found');
    }, 2000);
});

const fetchNativeDetails = new Promise((res, rej) => {
    console.log("Fetching Native Details");
    const isNative = true;
    setTimeout(() => {
        isNative ? res('China') : rej('No Natives Found');
    }, 2000);
});


/**
 * Promise all
 * Use when it there's no dependent btw the api's
 * Promise.all works parallel 
 */

// One Way
console.log("********** One Way *************");
// const promises = [fetchUserdetails, movieDetails];
// Promise.all(promises)
//     .then()
//     .catch();

// Another way
console.log("********** New Way *************");
Promise.all([fetchUserdetails, movieDetails, fetchNativeDetails])
    .then((responses) => {
        responses.forEach((r) => {
            console.log(r);
        })
    })
    .catch((error) => console.log(error));

console.log("********** Racing *************");
Promise.race([fetchUserdetails, movieDetails, fetchNativeDetails])
    .then((responses) => console.log(responses))
    .catch((error) => console.log(error));


