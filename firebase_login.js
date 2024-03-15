// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe8SOO2eBfq_mmvHl-wahQQMqJuYfYlTk",
    authDomain: "inrems-9e134.firebaseapp.com",
    databaseURL: "https://inrems-9e134-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "inrems-9e134",
    storageBucket: "inrems-9e134.appspot.com",
    messagingSenderId: "452363299801",
    appId: "1:452363299801:web:183434ff7af2982d7a87c8",
    measurementId: "G-GRP1YDCH11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);



//----- Login code start	  
document.getElementById("loginpage-login-button").addEventListener("click", function(e) {
    e.preventDefault();
    var email =  document.getElementById("loginpage_email_input").value;
    var password = document.getElementById("loginpage_password_input").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log("hello1");
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.href = 'Homepage.html';
      console.log("hello2");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		  		  
});
//----- End

//----- Logout code start	  
// document.getElementById("loginpage-login-button").addEventListener("submit", function() {
//     signOut(auth).then(() => {
//         // Sign-out successful.
//         console.log('Sign-out successful.');
//         alert('Sign-out successful.');
//         document.getElementById('logout').style.display = 'none';
//       }).catch((error) => {
//         // An error happened.
//         console.log('An error happened.');
//       });		  		  
// });
//----- End