import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js'
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js'
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";

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
const db = getDatabase(app);

auth.onAuthStateChanged(user => {

});

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log("logged in !");
    } else {
        console.log("No User");
    }
});

$('#insertData').click(function () {
    set(ref(db), "123");
});