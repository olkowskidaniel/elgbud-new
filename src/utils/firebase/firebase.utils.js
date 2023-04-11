import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD9otktWTAPGr9aewKQxldObCa-pZlZAMk",
    authDomain: "elgbud-ed636.firebaseapp.com",
    projectId: "elgbud-ed636",
    storageBucket: "elgbud-ed636.appspot.com",
    messagingSenderId: "1007165984035",
    appId: "1:1007165984035:web:e3590454bee7e7bfd85096",
    measurementId: "G-R90N2DFVPF"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);