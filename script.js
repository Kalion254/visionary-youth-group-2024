
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Signup
const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;

        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                alert("Account created successfully!");
                window.location.href = "dashboard.html";
            })
            .catch(err => alert(err.message));
    });
}

// Login
const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("login-email").value;
        const password = document.getElementById("login-password").value;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            })
            .catch(err => alert(err.message));
    });
}

// Logout
function logout() {
    auth.signOut().then(() => {
        alert("Logged out!");
        window.location.href = "login.html";
    });
}
