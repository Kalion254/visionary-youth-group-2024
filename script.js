<!-- Firebase App (the core Firebase SDK) -->
<script type="module">
  // Import the functions you need from the SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore, setDoc, doc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA_OCu7HQ5HCH2OYx5dQ2Z1r7YPwQJave4",
    authDomain: "visionary-youth-grou-2024.firebaseapp.com",
    projectId: "visionary-youth-grou-2024",
    storageBucket: "visionary-youth-grou-2024.firebasestorage.app",
    messagingSenderId: "372978592717",
    appId: "1:372978592717:web:1c15aec728ee5f854f3284",
    measurementId: "G-QP1RBT2ZCP"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);

  // Signup function after successful M-Pesa payment
  window.registerFirebaseUser = async (signupInfo) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signupInfo.email, signupInfo.password);
      const user = userCredential.user;

      // Store additional info in Firestore
      await setDoc(doc(db, "members", user.uid), {
        name: signupInfo.name,
        phone: signupInfo.phone,
        idNumber: signupInfo.id,
        origin: signupInfo.origin,
        email: signupInfo.email,
        createdAt: serverTimestamp()
      });

      alert(`Welcome ${signupInfo.name}, your account has been created!`);
    } catch (err) {
      console.error(err);
      alert("Firebase signup error: " + err.message);
    }
  };

  // Login function
  window.loginFirebaseUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      alert(`Welcome back, ${userCredential.user.email}`);
    } catch (err) {
      console.error(err);
      alert("Login error: " + err.message);
    }
  };
</script>
