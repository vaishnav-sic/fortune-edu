// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_Ds78b8zxgraxJ1J4Fb2rHV6wjUbFxTc",
//   authDomain: "fortune-edu-80801.firebaseapp.com",
//   projectId: "fortune-edu-80801",
//   storageBucket: "fortune-edu-80801.appspot.com",
//   messagingSenderId: "1062651314170",
//   appId: "1:1062651314170:web:73afdd18262467347a2e43",
//   measurementId: "G-8WPPX6NSJ1",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBcNXQ2Xngbuznpr3UYCcD2dppD76KcW4U",
  authDomain: "fortune-edu-c873a.firebaseapp.com",
  projectId: "fortune-edu-c873a",
  storageBucket: "fortune-edu-c873a.appspot.com",
  messagingSenderId: "364256898111",
  appId: "1:364256898111:web:b450a5dde5be4dd7061c8a",
  measurementId: "G-0EQV2KQHFB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
export default auth;
