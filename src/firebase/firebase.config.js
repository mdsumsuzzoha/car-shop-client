// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_APIKEY,
//     authDomain:import.meta.env.VITE_AUTHDOMAIN,
//     projectId:import.meta.env.VITE_PROJECTID,
//     storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID,
//   };

const firebaseConfig = {
  apiKey: "AIzaSyC6HFBy573PP1YoPr14Rj5CJRAYP_OOKQI",
  authDomain: "car-shop-auth-b14c6.firebaseapp.com",
  projectId: "car-shop-auth-b14c6",
  storageBucket: "car-shop-auth-b14c6.appspot.com",
  messagingSenderId: "520232406560",
  appId: "1:520232406560:web:6bfa0bc42b299215153645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
