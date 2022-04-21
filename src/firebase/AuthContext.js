import React, { useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password) {
        getAuth.createUserWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        const unsubscribe =  getAuth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

   

    const value = {
       currentUser, 
       signup
    }

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}