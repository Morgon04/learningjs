/**
 * async and await
 * declare it before async funtion keyword
 * declre await before promise keyword
 * use it try catch
 */

const checkAuth = () => {
    return new Promise((resolve, reject) => {
        console.log("Checking Auth");
        const isAuth = true;
        setTimeout(() => {
            isAuth ? resolve(isAuth) : reject("Auth failed");
        }, 5000);
    });
}

// Variable declaratio  and Ini
const fetchUser = (auth) => {
    return new Promise((resolve, reject) => {
        console.log("Fetching User");
        setTimeout(() => {
            auth ? resolve({ name: "Jackie Chan" }) : reject("No User Found");
        }, 2000);
    });
}

const userDetails = (auth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            auth ? resolve({ name: 'Jackie Chan', gender: 'Male' }) : reject('No User Details Found');
        }, 3000);
    });
}

const movieDetails = (auth) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            auth ? resolve(['Enter the dragon', 'Medaillion']) : reject('No Movies Found');
        }, 5000);
    });
}

const fetch = async () => {
    try {
        const auth = await checkAuth();
        const user = await fetchUser(auth);
        return user;
    } catch (ex) {
        throw ex;
    }
}

const fetchUserDetails = async () => {
    try {
        const auth = await checkAuth();
        const promises = [
            userDetails(auth),
            movieDetails(auth)
        ]
        const userDetail = await Promise.all(promises);
        return userDetail;
    } catch (ex) {
        throw ex;
    }
}

// fetch()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

fetchUserDetails()
    .then(res => console.log(res))
    .catch(err => console.log(err));

