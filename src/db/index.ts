import 'firebase/auth';

import firebase from 'firebase';
import React from 'react';

const firebaseConfig = {
    apiKey: 'AIzaSyAJVfOd4rXlAQ_VlsY8TAGVAwJDCru4ZTI',
    authDomain: 'jitt-c21e3.firebaseapp.com',
    projectId: 'jitt-c21e3',
    storageBucket: 'jitt-c21e3.appspot.com',
    messagingSenderId: '856418460503',
    appId: '1:856418460503:web:7de3f83ee518be4df25412',
    measurementId: 'G-7R1H0E925E',
};

let app: firebase.app.App;
let FirebaseContext: React.Context<{ app: firebase.app.App }>

try {
    firebase.initializeApp(firebaseConfig);   
} catch (error) {
    console.error(error.message);
    alert(error.message);
}
export default FirebaseContext = React.createContext({ app: firebase.app() })