import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCVQub-EtkEAcgn-l4-OA5tytDJT7N-yEg",
    authDomain: "expensify-5eb6a.firebaseapp.com",
    databaseURL: "https://expensify-5eb6a.firebaseio.com",
    projectId: "expensify-5eb6a",
    storageBucket: "expensify-5eb6a.appspot.com",
    messagingSenderId: "137166193005"
};



firebase.initializeApp(config);


const database = firebase.database();

export {firebase,database as default};
