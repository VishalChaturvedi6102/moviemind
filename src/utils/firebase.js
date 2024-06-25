// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChgwxRr-fpXeGCmUm2naGZqVHSS5BFoQI",
  authDomain: "moviemind-eec96.firebaseapp.com",
  projectId: "moviemind-eec96",
  storageBucket: "moviemind-eec96.appspot.com",
  messagingSenderId: "187339206109",
  appId: "1:187339206109:web:1155065ebf09a493791a34",
  measurementId: "G-1YCL5N3RQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
