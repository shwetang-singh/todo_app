
import firebase from 'firebase';
const firebaseapp= firebase.initializeApp({

    apiKey: "AIzaSyCrlSnCj_iDNURR4LSpsJcCFD7cRrHrx_w",
    authDomain: "todo-shwet-app-cp.firebaseapp.com",
    databaseURL: "https://todo-shwet-app-cp.firebaseio.com",
    projectId: "todo-shwet-app-cp",
    storageBucket: "todo-shwet-app-cp.appspot.com",
    messagingSenderId: "1082341606984",
    appId: "1:1082341606984:web:799ff1eec0f9ce9ab5ba7d",
    measurementId: "G-RWPLX8F642"
})

const db= firebaseapp.firestore();
export default db;