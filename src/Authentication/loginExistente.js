const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: "AIzaSyDaBcVujVjdJ5GlbJ4pG-sIVPh0S1z_N8Q",
  authDomain: "autenticacaoprogwebsrag.firebaseapp.com",
  projectId: "autenticacaoprogwebsrag",
  storageBucket: "autenticacaoprogwebsrag.appspot.com",
  messagingSenderId: "185469722146",
  appId: "1:185469722146:web:8022b2f3722f1c6ce6747b",
  measurementId: "G-L42Y9F6J4N"
};

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });

const auth = admin.auth();

async function login(email, password){
    try {
        const userRecord = await auth.getUserByEmail(email);
    
        const authResult = await auth.signInWithEmailAndPassword(email, password);
        
        return 200
    } catch (error) {
        return 401
    }
}

async function register(email, password){

    try {
        await admin.auth().getUserByEmail(email)

        return 400
    } catch (error) {
        try {
          const newUserRecord = await admin.auth().createUser({
            email,
            password,
          })
    
          return 201
        } catch (error) {

          return 400
        }
    }
}

async function logout(token){
    try {

        await admin.auth().revokeRefreshTokens(token);
        
        return 200
    } catch (error) {

        return 400
    }
}
