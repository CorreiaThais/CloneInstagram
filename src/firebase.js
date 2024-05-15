import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBWLPf5hAOSFUdeOoW6OsLYP_Km5D2oi7k",
    authDomain: "cloneinstagram-10143.firebaseapp.com",
    projectId: "cloneinstagram-10143",
    storageBucket: "cloneinstagram-10143.appspot.com",
    messagingSenderId: "63638554787",
    appId: "1:63638554787:web:eef1753989b0c197be5716",
    measurementId: "G-KSD8ZZWH25"
});

const db = firebase.firestore(); //data base SQL em tempo real
const auth = firebase.auth(); //sistema de login e autenticação de usuários
const storage = firebase.storage(); //armazenamento em nuvem e upload de arquivos
const functions = firebase.functions(); // código back-end (executar, responder eventos, integrar recursos do firebase)

export {db, auth, storage, functions};