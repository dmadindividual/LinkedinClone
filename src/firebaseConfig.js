import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyA59fLqg0hqPuDgo-jfWw6w1stV_nzO0WY",
  authDomain: "linkedin-clone-8924c.firebaseapp.com",
  projectId: "linkedin-clone-8924c",
  storageBucket: "linkedin-clone-8924c.appspot.com",
  messagingSenderId: "1078876086597",
  appId: "1:1078876086597:web:2db2b02f2ecdfad5565e2c",
  measurementId: "G-58VNZY0TGW"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db }; 
export default firebaseApp