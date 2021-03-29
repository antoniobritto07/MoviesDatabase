const firebase = require('firebase/app');
require('firebase/auth');

firebaseConfig = {
    apiKey: process.env.API_KEY,
    authdomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.PROJECT_ID,
    projectID: process.env.STORAGE_BUCKET,
    storageBucket: process.env.MESSAGING_SENDER_ID,
    messagingSenderID: process.env.APP_ID
}

firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, password) {
        const result = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)

        return result.user.uid
    },

    async login(email, password) {
        const result = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);

        return result.user.uid;
    }
}