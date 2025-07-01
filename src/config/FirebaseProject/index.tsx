// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3DGnKMHQi5FEL2NPHJ3cmFrVkkbcviKg",
  authDomain: "final-project-mad-5e048.firebaseapp.com",
  projectId: "final-project-mad-5e048",
  storageBucket: "final-project-mad-5e048.firebasestorage.app",
  messagingSenderId: "325444328912",
  appId: "1:325444328912:web:5edd5b07cb4644fce9edd5",
  measurementId: "G-RM4RF0D2FJ",
  databaseURL: 'https://final-project-mad-5e048-default-rtdb.firebaseio.com/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});