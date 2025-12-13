import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../src/firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUserWithEmailAndPasswordFun = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFun = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithPopupFun = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutFun = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authInfo = {
    user,
    setUser,
    createUserWithEmailAndPasswordFun,
    signInWithEmailAndPasswordFun,
    signInWithPopupFun,
    signOutFun,
    updateUserProfile,
    loading,
    setLoading,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      // console.log(currUser);
      setUser(currUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
