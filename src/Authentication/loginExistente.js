import { initializeApp } from "firebase/app";
import { getAnalytics, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaBcVujVjdJ5GlbJ4pG-sIVPh0S1z_N8Q",
  authDomain: "autenticacaoprogwebsrag.firebaseapp.com",
  projectId: "autenticacaoprogwebsrag",
  storageBucket: "autenticacaoprogwebsrag.appspot.com",
  messagingSenderId: "185469722146",
  appId: "1:185469722146:web:8022b2f3722f1c6ce6747b",
  measurementId: "G-L42Y9F6J4N"
};

const auth = firebase.auth();

function login(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailandPassord(email, password).then((userCredial) => {
        const user = userCredintial.user;
        console.log("Usuário logado:", user.email);
    })
    .catch((error) => {
        console.log("Erro de login:");
    });
}

function loginExist(){
    const email = "novousuario@emial.com";
    const password = "senha123";

    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
       const user = userCredential.user;
       console.log("Usuário registrado:", user.email); 
    })
    .catch((error) => {
        console.log("Ero ao registrar:")
    });
}

function logout(){
    auth.singOut().then(() => {
        console.log("Usuário deslogado.");
        document.getElementById("user-email").textContent = "";
    })
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);