
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCwP4OeL87Wxa2V0X0WOt6IaMLE7P2WrFs",
    authDomain: "ai--image.firebaseapp.com",
    projectId: "ai--image",
    storageBucket: "ai--image.firebasestorage.app",
    messagingSenderId: "724193479642",
    appId: "1:724193479642:web:7a0e5f1086d011b12e4ee3",
    measurementId: "G-WRF2E5QN3D"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



// Login
const submit1 = document.getElementById("submit1"); // Corrected ID
submit1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // Redirect to landing page
      window.location.href = "landingpage.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// Forgot Password
const forget1 = document.getElementById("forget1");
forget1.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;

  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent!");
    })
    .catch((error) => {
      alert(error.message);
    });
});
