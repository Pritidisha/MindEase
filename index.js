/*

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const db = getDatabase(app);
const databaseRef = ref(db);
const firebaseConfig = {
  apiKey: "AIzaSyDXIBB0FioWYf96fdVBYib-jonroMzHveQ",
  authDomain: "mindease-2023.firebaseapp.com",
  projectId: "mindease-2023",
  storageBucket: "mindease-2023.appspot.com",
  messagingSenderId: "181696657987",
  appId: "1:181696657987:web:8ae8df1252a8f4bd8572f6",
  measurementId: "G-FECS1VXGX2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submitButton = document.getElementById("signIn");
const signupButton = document.getElementById("signUp");
const emailInput = document.getElementById("signInemail");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("signUpemail");
const signupPasswordIn = document.getElementById("password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

var email, password, signupEmail, signupPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  signupPassword = signupPasswordIn.value;

  if (signupEmail == null || signupPassword == null) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        window.alert("Success! Account created.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        window.alert("Error occurred. Try again.");
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success! Welcome back!");
      window.alert("Success! Welcome back!");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Error occurred. Try again.");
      window.alert("Error occurred. Try again.");
    });
});

signupButton.addEventListener("click", function () {
  main.style.display = "none";
  createacct.style.display = "block";
});

const dataToWrite = {
  signupEmail: signupEmailIn.value,
  signupPassword: signupPasswordIn.value,
};

set(databaseRef, dataToWrite)
  .then(() => {
    console.log("Data written to Realtime Database successfully!");
  })
  .catch((error) => {
    console.error("Error writing data to Realtime Database: ", error);
  });



  */
