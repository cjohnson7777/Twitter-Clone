// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYOcgiDL0uXR8KUiqLtbA4W5Xg3FM-lPI",
  authDomain: "twitter-clone-dd7f8.firebaseapp.com",
  projectId: "twitter-clone-dd7f8",
  storageBucket: "twitter-clone-dd7f8.appspot.com",
  messagingSenderId: "510280511065",
  appId: "1:510280511065:web:ad893c7762874173bfcb48",
  measurementId: "G-8EHEEV51VJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)



export default { db };





// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();