import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBIlr1FjdjL2AITZTydCKVJs4YSJbRr0sI",
    authDomain: "ucaronurblog.firebaseapp.com",
    projectId: "ucaronurblog",
    storageBucket: "ucaronurblog.appspot.com",
    messagingSenderId: "731221212940",
    appId: "1:731221212940:web:28d73bfa3b5721b2f4d329"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    timestamp
};
export default firebaseApp.firestore();