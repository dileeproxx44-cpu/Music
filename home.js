import { initializeApp, getApps, getApp } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getAuth, onAuthStateChanged, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔥 Your Firebase Config (same as login page)
const firebaseConfig = {
    apiKey: "AIzaSyAyoJLg5gJnGStzuZXDLYyk8zNLd0DzFII",
  authDomain: "audio-auro-pro.firebaseapp.com",
  projectId: "audio-auro-pro",
  appId: "1:480222649355:web:3308d7303a2e8021e57b0e"
};

// ✅ Prevent multiple initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Show Logged-in User Name
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById("profileName").innerText =
            user.email.split("@")[0];
    } else {
        window.location.href = "login.html";
    }
});

// ✅ Logout Function
window.logout = function () {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    });
};

// 🎵 Make functions global
window.playMusic = function(id) {
    var selectedAudio = document.getElementById(id);
    var allAudios = document.querySelectorAll("audio");

    allAudios.forEach(function(audio) {
        if (audio.id !== id) {
            audio.pause();
            audio.currentTime = 0;
        }
    });

    selectedAudio.play();
};

window.pauseMusic = function(id) {
    var selectedAudio = document.getElementById(id);
    selectedAudio.pause();
};