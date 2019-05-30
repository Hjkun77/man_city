import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCsxkAwxsfylmYdUfXV0eaVzmoVGsew2oE",
    authDomain: "man-city-fafe3.firebaseapp.com",
    databaseURL: "https://man-city-fafe3.firebaseio.com",
    projectId: "man-city-fafe3",
    storageBucket: "man-city-fafe3.appspot.com",
    messagingSenderId: "683504258691",
    appId: "1:683504258691:web:3cf0aa264dd942b7"
}

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}