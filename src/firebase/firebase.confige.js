// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRoQzx2Uacim3jP1fL-Vp7PWPYpl_yAaw",
  authDomain: "ema-jhon-simple-2aa0b.firebaseapp.com",
  projectId: "ema-jhon-simple-2aa0b",
  storageBucket: "ema-jhon-simple-2aa0b.appspot.com",
  messagingSenderId: "439158777535",
  appId: "1:439158777535:web:e41a398d37b5bab06f080a",
  measurementId: "G-QV8JQR41FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;