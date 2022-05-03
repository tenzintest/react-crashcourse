import { useContext } from "react";
import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase-config"
import { useEffect } from "react";
import { useState } from "react";

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState({});

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    } 

    function LogIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    } 

    function LogOut() {
        return signOut(auth)
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe  = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);
    return <userAuthContext.Provider value={{user, signUp, LogIn, LogOut, googleSignIn}}>{children}</userAuthContext.Provider>
}


export function useUserAuth() {
    return useContext(userAuthContext);
}