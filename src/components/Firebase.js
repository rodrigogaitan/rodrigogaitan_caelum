import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyA0LuiiVpkY_NnKfOPK6P3x-M2xv2WfYPA",
    authDomain: "caelum-fb948.firebaseapp.com",
    projectId: "caelum-fb948",
    storageBucket: "caelum-fb948.appspot.com",
    messagingSenderId: "933482642459",
    appId: "1:933482642459:web:0f95ccef5af4349ee2ccbe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)