import React, { useEffect } from 'react';
import { auth } from '../services/authService';

const SignInWithGoogle: React.FC = () => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log('User is signed in:', user);
            } else {
                console.log('No user is signed in.');
            }
        });

        return () => unsubscribe();
    }, []);

    const handleSignIn = async () => {
        try {
            await auth.signInWithGoogle();
            console.log('Sign-in successful');
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    );
};

export default SignInWithGoogle;