const admin = require('firebase-admin');


const firebaseConfig = {
    "type": "service_account",
    "project_id": "autenticacaoprogwebsrag",
    "private_key_id": "8e4a123f5874d81393dc988824e9604f1b839fde",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9ISQBfxmH4FF+\n0BiXZdfFN6evPAzi7spDddgMwSI642knM+7hXhGg9Hd9uzZqHppXeeW53XMCu1lN\nfuJhOTcgRiZXW7Z2uVJ9pj7+yijxZEjscjku439GflVubxuRW1NLzDDcAS9Yq2Z+\nnGRKfUbWm52SBvfkjrWDpS0vh7pzc9NIOqcMzAXAIxfVee//x2R8CcuinwR9gOYJ\nt3VGpvwroBqDi0hmNl/0chJLEsULKjHJZ+GJTeXbALeEsp/DUenhGsJR9Tt2S7Rx\nXXPdiC/tNZatxmBCAyTUMYuXh0UIdpKDoc3i05MdsqLMFFkj1PXs2Sfkyb6w2PUD\nq0bUOdmnAgMBAAECggEAAhAZ+fAzzEEcnR2nnwMhMt6pXrvGHOA45uUiqaTzpXZ0\nilUX2RpzERve2nQPzbbZZ8nbFnISvpK3kHpT/XZ9IkYm8JNTWVZ/zqy2Xttqoz4S\nSONID2ReL4Z857r2Ly7dU47TG5s3CShkHPkXY56b3AcPgBfBCBusYYFhjZ//3yF9\nUAucw4BIlsrzWlHWEwF2Tyz4sQo5yRIhRvelb5vR5oMqWxmNSDGvpDZrBMDFZDJj\nyPRUALVIKjaktMHJWrgEYdb798CRXlSUbvL3M+yZm17zl1k26lO572jJ/3u5f8cd\nio/TAAFUWlSTXFg6QjZC+CfNGRCHU6jU647i3kg2gQKBgQDrSvy7i/JqjEe/lxYe\nvYWLjQfkGkvmibp09fNEMGas/K9zue+L445cvg535Xu39g8wxBWJvcKxSCrBxV+6\ntuocffwSchc9HmuDzMAZWJlSULBV25bUwUQK6EAMMvjRJvLeEHfWwQRuTMp1Lk5o\ne11ztjpuCTL57rMsk4ERCAx0JwKBgQDNxh4OM2sXn7K0e8zn0VC3VwCE+/gYpznu\nkLhJ8e3gpHD3oP6AfveTRl0xhjHyxY+FSNj0Kd4Y4VV7PpSSI/fpX0m7IWQwCi5Y\nkEwfxDZ6x3mCIZSAYtobAdP8R/IyZx0qr+oT19uMy1Jpz1eKb1as3Cf581vlVxIt\nSjaXgWtegQKBgD6HBvKwFhPKg6aed/pjUwHq0JYFhvYU08ARPDx6wE5oOBgA6W+7\nYTG0MBQcn+wbL549/ZtFGmASVYp48R+lTEGWGU6tkw9i7h9wYfxaVyRQ3Qtz93lC\ngtqDLcIQKZ8rQo9QwQgI8yx8q7DIRX3uir8dRhnHyAwzKtpFuJ7WDLkxAoGAWwa7\n/u4x/pZPmFV3lEjc2u2qtik8W7OGBgmQ7G0QHKLBsllOnAsOe+DRkvnZGJraXUyX\nZJMsw3bSuJ07XdZ5cYwMcrJXvoSSce0LL7Y9n1ykXLN8HLsd3nqVivFMq40/ssV0\n1+hSH9tFjrcA86VDA160dHZ5/V7iFJTSx3yhwYECgYEAtbYrozGRjDX5XKkDw6bK\nxeU9Ub7aPVxeKHjj4z5/bzEMiMXob59tZJWRq+/rJazArbU1zdAMJiXUyDJ8We12\nebHofJnQ/4dTQvKrrgivgZGktlERWzoCvulxpBrRY5Z4qUhVZveJZEmD2qHjk4kT\nYrVRE21ASLZtQbVn/XVRINk=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-zpkkg@autenticacaoprogwebsrag.iam.gserviceaccount.com",
    "client_id": "117102154230098722411",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zpkkg%40autenticacaoprogwebsrag.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
  });

const auth = admin.auth();

async function login(email, password){
    try {
        const userRecord = await auth.getUserByEmail(email);

        try {
            const authResult = await auth.signInWithEmailAndPassword(email, password);

            const resObject = {
                name: "OK",
                code: 200,
                message: "Usuário autenticado com sucesso!",
                token: authResult.user
            }

            return resObject
        }
        catch (error){

            const errorObject = {
                name: "Error",
                code: 401,
                message: "Credenciais inválidas. Senha ou email incorretos."
            }
            return errorObject
        }
    } 
    catch (error){
        const errorObject = {
            name: "Error",
            code: 404,
            message: "Credenciais inválidas. Senha ou email incorretos."
        }

        return errorObject
    }
}

async function register(email, password){

    try {
        await auth.getUserByEmail(email)

        const errorObject = {
            name: "Error",
            code: 400,
            message: "Email já vinculado a um usuário"
        }
        return errorObject
        
    } 
    catch (error) {
        try {
            const newUserRecord = await auth.createUser({
            email,
            password,
            })

            const sucessObject = {
            name: "OK",
            code: 201,
            message: "Usuário Criado com sucesso!"
            }
            return sucessObject
        } catch (error) {
            const errorObject = {
                name: "Error",
                code: 400,
                message: "Erro inesperado ao criar usuário, por favor tente novamente."
            }
            return errorObject
        }
    }
}

async function logout(token){
    try {

        await auth.revokeRefreshTokens(token);
        
        const sucessObject = {
            name: "OK",
            code: 200,
            message: "Logout com sucesso!"
        }
        return sucessObject
    } catch (error) {

        const errorObject = {
            name: "Error",
            code: 400,
            message: "Erro inesperado ao dar logout, por favor tente novamente."
        }
        return errorObject
    }
}

module.exports = {
    login, register, logout
}