import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const clientCredentials = {
    apiKey: process.env.Next_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.Next_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.Next_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.Next_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.Next_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.Next_PUBLIC_FIREBASE_APP_ID

}

if (!firebase.getApps.length) {
    firebase.initializeApp(clientCredentials);
    console.log("connection established to db")
}

export default firebase;