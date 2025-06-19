import { auth } from 'firebase/app';
import 'firebase/auth';

export const signInWithGoogle = async () => {
    const provider = new auth.GoogleAuthProvider();
    try {
        const result = await auth().signInWithPopup(provider);
        return result.user;
    } catch (error) {
        console.error("Error during sign in:", error);
        throw error;
    }
};

export const signOut = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        console.error("Error during sign out:", error);
        throw error;
    }
};

export const checkUserSession = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
};