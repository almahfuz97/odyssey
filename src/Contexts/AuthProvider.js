import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // create user with email and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in with google
    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sign in with facebook
    const signInWithFacebook = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // sing in with email and password
    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log out
    const logOut = () => {
        return signOut(auth);
    }

    // use effect for onAuthStateChange from firebase
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser) {
                setUser(currentUser);
                setLoading(false);
            } else {
                setLoading(false);
            }
        });

        return () => unsubscribe();

    }, [])

    const authInfo = { loading, user, createUser, signInWithGoogle, signInWithFacebook, signInWithEmail, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
