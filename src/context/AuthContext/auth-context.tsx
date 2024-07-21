// // src/contexts/AuthContext.tsx
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { auth, googleProvider } from '../../configs/firebase';
// import firebase from 'firebase/app';

// interface AuthContextProps {
//   currentUser: firebase.User | null;
//   loginWithGoogle: () => Promise<void>;
//   loginWithEmail: (email: string, password: string) => Promise<void>;
//   registerWithEmail: (email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider: React.FC = ({ children }: {childer: React.node}) => {
//   const [currentUser, setCurrentUser] = useState< | null>(null);

//   const loginWithGoogle = async () => {
//     await auth.signInWithPopup(googleProvider);
//   };

//   const loginWithEmail = async (email: string, password: string) => {
//     await auth.signInWithEmailAndPassword(email, password);
//   };

//   const registerWithEmail = async (email: string, password: string) => {
//     await auth.createUserWithEmailAndPassword(email, password);
//   };

//   const logout = async () => {
//     await auth.signOut();
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user:) => {
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser, loginWithGoogle, loginWithEmail, registerWithEmail, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
