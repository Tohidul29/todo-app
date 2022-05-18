// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkivtIy5y3fKIN3zuvADf1QR7Gk7zFuGE",
  authDomain: "todo-app-8af16.firebaseapp.com",
  projectId: "todo-app-8af16",
  storageBucket: "todo-app-8af16.appspot.com",
  messagingSenderId: "631372421325",
  appId: "1:631372421325:web:3908bf99feac06662b3184"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;