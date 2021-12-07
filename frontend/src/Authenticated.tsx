import React, { useState, useEffect } from "react";
import "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  User,
  GoogleAuthProvider,
  onAuthStateChanged,
  getAuth,
  signOut,
} from "firebase/auth";
import FirebaseAuth from "react-firebaseui/FirebaseAuth";

const firebaseConfig = {
  // put firebase config in here.
  // You can find the config in Project Settings > General
  // and choose the Config option in Firebase SDK snippet
  apiKey: "AIzaSyDGMyX6xBynEG7S_NRj1ylUmIM3hBSIM5w",
  authDomain: "trends-finalproj.firebaseapp.com",
  projectId: "trends-finalproj",
  storageBucket: "trends-finalproj.appspot.com",
  messagingSenderId: "797065344080",
  appId: "1:797065344080:web:4551819463f67793c64d55",
};

const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);

type Props = {
  readonly children: React.ReactNode;
};

const Authenticated = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [GoogleAuthProvider.PROVIDER_ID],
  };

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  return (
    <>
      {user ? (
        <>
          <h2>Hi, {user.displayName}!</h2>
          <button onClick={() => signOut(auth)}>Sign Out</button>
          {children}
        </>
      ) : (
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      )}
    </>
  );
};

export default Authenticated;