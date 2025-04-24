
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
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

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("✅ User created:", userCredential.user);
      window.location.href = "landingpage.html";
    })
    .catch((error) => {
      console.error("❌ Error creating user:", error);

      if (error.code === 'auth/email-already-in-use') {
        alert("This email is already registered. Please try logging in instead.");
      } else if (error.code === 'auth/invalid-email') {
        alert("Invalid email format.");
      } else if (error.code === 'auth/weak-password') {
        alert("Password should be at least 6 characters.");
      } else {
        alert(error.message);
      }
    });
});
