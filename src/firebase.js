import firebase  from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAK6Pi6-hnNUdpRRf9YvdSgm59Iezty5e0",
    authDomain: "clone-9626f.firebaseapp.com",
    databaseURL: "https://clone-9626f.firebaseio.com",
    projectId: "clone-9626f",
    storageBucket: "clone-9626f.appspot.com",
    messagingSenderId: "229302110307",
    appId: "1:229302110307:web:a7e784642eba0903e65056",
    measurementId: "G-CVWT8R94SC"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth };