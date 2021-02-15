import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyA7zcvn7Efpl9kHd_0Vz3VPYepqcfHAk24",
    authDomain: "conrad-app.firebaseapp.com",
    databaseURL: "https://conrad-app.firebaseio.com",
    projectId: "conrad-app",
    storageBucket: "conrad-app.appspot.com",
    messagingSenderId: "377184844575",
    appId: "1:377184844575:web:cc467db6f1675a93400e2a",
    measurementId: "G-HW6FXQMS1W"
};

const initializeApp = () => {
    if(firebase.apps.length <= 0) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const InstanceFirebase = () => {
    initializeApp();
    return firebase;
};

export const InstanceDb = () => {
    initializeApp();
    const db = firebase.firestore();
    return db;
};