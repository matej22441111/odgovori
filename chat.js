// Funkcija za nalaganje sporočil iz LocalStorage
function loadMessages() {
    const chatBox = document.getElementById('chat-box');
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Za vsako sporočilo iz LocalStorage ga dodamo v chat
    storedMessages.forEach(messageText => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;
        chatBox.appendChild(messageElement);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}

// Funkcija za shranjevanje sporočil v LocalStorage
function saveMessage(messageText) {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    storedMessages.push(messageText);
    localStorage.setItem('chatMessages', JSON.stringify(storedMessages));
}

// Funkcija za pošiljanje sporočila
function sendMessage() {
    const messageInput = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');
    const messageText = messageInput.value.trim();

    if (messageText !== '') {
        // Ustvari element za sporočilo
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');
        messageElement.textContent = messageText;

        // Dodaj sporočilo v chat
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;

        // Shrani sporočilo v LocalStorage
        saveMessage(messageText);

        // Pošlji sporočilo in počisti vnosno polje
        messageInput.value = '';
    }
}

// Ob nalaganju strani naloži vsa shranjena sporočila
window.onload = function() {
    loadMessages();
};

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD8aDQFp0_1vhuYMJDMqq-fb6sDXQRHp1A",
    authDomain: "spetna-stran.firebaseapp.com",
    projectId: "spetna-stran",
    storageBucket: "spetna-stran.appspot.com",
    messagingSenderId: "948134059163",
    appId: "1:948134059163:web:42903499730f77dfbbfa3e",
    measurementId: "G-Y62C3RBP89"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

