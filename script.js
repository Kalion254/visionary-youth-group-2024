

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_OCu7HQ5HCH2OYx5dQ2Z1r7YPwQJave4",
  authDomain: "visionary-youth-grou-2024.firebaseapp.com",
  projectId: "visionary-youth-grou-2024",
  storageBucket: "visionary-youth-grou-2024.firebasestorage.app",
  messagingSenderId: "372978592717",
  appId: "1:372978592717:web:624596619d41aab84f3284",
  measurementId: "G-FEHC1GM3B7"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ===== SIGN UP =====
document.getElementById("signupBtn").addEventListener("click", () => {
  const name = document.getElementById("signupName").value;
  const phone = document.getElementById("signupPhone").value;
  const idNumber = document.getElementById("signupId").value;
  const origin = document.getElementById("signupOrigin").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  // Validation (all fields required)
  if (!name || !phone || !idNumber || !origin || !email || !password) {
    alert("⚠️ All fields are required!");
    return;
  }

  auth.createUserWithEmailAndPassword(email, password)
    .then(cred => {
      // Save extra details in Firestore
      return db.collection("members").doc(cred.user.uid).set({
        name: name,
        phone: phone,
        idNumber: idNumber,
        origin: origin,
        email: email,
        joinedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    })
    .then(() => {
      alert("✅ Signup successful! You can now login.");
      document.getElementById("signupForm").reset();
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
});

// ===== LOGIN =====
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (!email || !password) {
    alert("⚠️ Enter both email and password!");
    return;
  }

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("🎉 Login successful! Welcome back.");
      document.getElementById("loginForm").reset();
      // 👉 Redirect to dashboard.html (create this later)
      window.location.href = "dashboard.html";
    })
    .catch(error => {
      alert("❌ " + error.message);
    });
});
