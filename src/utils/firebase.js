// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCwWXSszzmfJzg1zGSm2fEc79GtQOX22E",
  authDomain: "netflix-clone-app-fcffe.firebaseapp.com",
  projectId: "netflix-clone-app-fcffe",
  storageBucket: "netflix-clone-app-fcffe.appspot.com",
  messagingSenderId: "356472892220",
  appId: "1:356472892220:web:6509902ad3ed37f3c98c39",
  measurementId: "G-NGWEF8WHXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
