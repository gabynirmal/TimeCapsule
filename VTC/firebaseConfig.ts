// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMiRAdn6F3ZCLHD2c7YD6G5Qw7VmfNlUg",
  authDomain: "virtual-time-capsule-c74f2.firebaseapp.com",
  projectId: "virtual-time-capsule-c74f2",
  storageBucket: "virtual-time-capsule-c74f2.firebasestorage.app",
  messagingSenderId: "936049785007",
  appId: "1:936049785007:web:c6751c04c7b2098fb57c5a",
  measurementId: "G-48YN5JB0CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
