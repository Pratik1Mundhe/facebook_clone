import firebase from 'firebase'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAJFyDL__ZVg9zrCLf1JnQYO_BB-5v0n_k",
  authDomain: "fookbase-a5d61.firebaseapp.com",
  projectId: "fookbase-a5d61",
  storageBucket: "fookbase-a5d61.appspot.com",
  messagingSenderId: "1037949663549",
  appId: "1:1037949663549:web:9ce0988d86f93ae86a6d54",
  measurementId: "G-MV6C3YG15M"
};
  const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
   const db= app.firestore();
   const storage= firebase.storage();


   export {db, storage};
