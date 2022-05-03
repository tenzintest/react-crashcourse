// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"

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
export const auth = getAuth(app);


// to connect db to react
export const db = getFirestore(app);
export const storage = getStorage(app);
const provider = new GoogleAuthProvider()


export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName
      const email = result.user.email
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("profilePic", profilePic)
  }).catch((error) => {
    console.log(error);
  })
};


// export const signOutNow = () => {
//   signOut(auth).then(() => {
//     alert("Sign out !!")
//   }).catch((error) => {

//   })
// }