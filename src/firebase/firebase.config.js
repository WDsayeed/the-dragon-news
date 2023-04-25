// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwpAvl8J2bSokSu-TL-mRgO8TgLtb7smA",
  authDomain: "the-news-dragon-bb75e.firebaseapp.com",
  projectId: "the-news-dragon-bb75e",
  storageBucket: "the-news-dragon-bb75e.appspot.com",
  messagingSenderId: "72643519041",
  appId: "1:72643519041:web:3653ea5d863885e9e75cc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app