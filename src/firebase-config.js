// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDVRmwWhK9inxdO1bjrmh_uHT8KKE2tYLc",
//   authDomain: "demotest-a616d.firebaseapp.com",
//   projectId: "demotest-a616d",
//   storageBucket: "demotest-a616d.appspot.com",
//   messagingSenderId: "269426678206",
//   appId: "1:269426678206:web:f7f481e525628ee62941ef",
//   measurementId: "G-43KKLCM4JC"
// };


const firebaseConfig = {
  apiKey: "AIzaSyBeoQRRi6M4njl6LSPu5xUiADzuyYTKuOk",
  authDomain: "test123-7a953.firebaseapp.com",
  projectId: "test123-7a953",
  storageBucket: "test123-7a953.appspot.com",
  messagingSenderId: "797942512827",
  appId: "1:797942512827:web:073a293721d8c2825e7d9e",
  measurementId: "G-KW4XDG9DJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// to connect db to react
export const db = getFirestore(app);