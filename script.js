// Replace these dummy values with your actual Firebase config
const firebaseConfig = {
    apiKey: "DUMMY-API-KEY",
    authDomain: "dummy-project.firebaseapp.com",
    projectId: "dummy-project",
    storageBucket: "dummy-project.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

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