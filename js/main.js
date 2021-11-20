import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhdF6xcIZKROi23uJjuKzht3sReSKD0K0",
    authDomain: "checkinsystem-6df61.firebaseapp.com",
    databaseURL: "https://checkinsystem-6df61-default-rtdb.firebaseio.com",
    projectId: "checkinsystem-6df61",
    storageBucket: "checkinsystem-6df61.appspot.com",
    messagingSenderId: "991651325747",
    appId: "1:991651325747:web:a5efe0896d8c27baf68046",
    measurementId: "G-S59YBM9G38"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

auth.onAuthStateChanged(user => {

});

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in !");
    } else {
        console.log("No User");
    }
});

function alert1() {
    alert(123);
}
