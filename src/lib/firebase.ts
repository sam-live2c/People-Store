import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBMd7NHm6kd4YLwkJm6u2RCFyMjqqbOKg8",
  authDomain: "brick-4ef76.firebaseapp.com",
  projectId: "brick-4ef76",
  storageBucket: "brick-4ef76.firebasestorage.app",
  messagingSenderId: "166523463774",
  appId: "1:166523463774:web:817c57f65b9aaa1471accf",
  measurementId: "G-BT7VR3H64Z"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// Helper for Google Popup Auth with fallback
export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Save/update user profile in Firestore
    if (user) {
      const userRef = doc(db, 'users', user.uid);
      await setDoc(userRef, {
        uid: user.uid,
        displayName: user.displayName || 'User',
        email: user.email || '',
        photoURL: user.photoURL || '',
        lastLogin: serverTimestamp(),
      }, { merge: true });
    }
    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
}

export async function logUserDownload(user: User) {
  try {
    const downloadsRef = collection(db, 'downloads');
    await addDoc(downloadsRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      downloadedAt: serverTimestamp(),
      platform: 'android_apk'
    });
  } catch (err) {
    console.error("Failed to log download to Firestore:", err);
  }
}

export async function signOutUser() {
  return firebaseSignOut(auth);
}
