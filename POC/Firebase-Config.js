// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCn6ydSnULgSSPXeZ2qud1aZAxPggyMwU8",
    authDomain: "bank-fund-management-system.firebaseapp.com",
    projectId: "bank-fund-management-system",
    storageBucket: "bank-fund-management-system.appspot.com",
    messagingSenderId: "757838218833",
    appId: "1:757838218833:web:b1122ee5622d1e402b5a70",
    measurementId: "G-JG771BZ90Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
database.settings({
    timestampInSnapshots: true
});