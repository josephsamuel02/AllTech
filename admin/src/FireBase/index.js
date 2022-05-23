import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_5vbtoR88VYykeZ1gPTzfsXOL76zahAI",
    authDomain: "amrok-7d35a.firebaseapp.com",
    projectId: "amrok-7d35a",
    storageBucket: "amrok-7d35a.appspot.com",
    messagingSenderId: "527987132095",
    appId: "1:527987132095:web:161c8dfb260fd22f89680a",
    measurementId: "G-QXJG0T9QQR",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
