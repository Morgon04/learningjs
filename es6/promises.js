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
        console.log("Checking Auth");
        const isAuth = true;
        setTimeout(() => {
            isAuth ? resolve(isAuth) : reject("Auth failed");
        }, 2000);
    });
}

// Variable declaratio  and Ini
const fetchUser = new Promise((resolve, reject) => {
    console.log("Fetching User");
    const fetchUser = false;
    setTimeout(() => {
        fetchUser ? resolve({ name: "Jackie Chan" }) : reject("No User Found");
    }, 2000);
});

// Pyramid Doom
checkAuth()
    .then(function (auth) {
        console.log("Is Authenticated User ", auth)
        fetchUser
            .then((success) => {
                console.log("Fetched User ", success.name)
            })
            .catch((error) => {
                console.log(error);
            });
    }).catch((error) => {
        console.log(error);
    });

// New Way
checkAuth()
    .then((auth) => {
        console.log("Is Authenticated User ", auth);
        return fetchUser
    })
    .then((success) => console.log("Fetched User ", success.name))
    .catch((error) => console.log(error));


