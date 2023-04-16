import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeXPw2kHDCREdXZ6PcZQ5FxSo-kIWLlt4",
    authDomain: "valkovxyz.firebaseapp.com",
    projectId: "valkovxyz",
    storageBucket: "valkovxyz.appspot.com",
    messagingSenderId: "37053667697",
    appId: "1:37053667697:web:e4feb3d149fe191dc0bed0",
    measurementId: "G-JYFS7QH19E"
};


const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;