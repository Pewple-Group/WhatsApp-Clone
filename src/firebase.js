import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2iRXPQaRTj2JXY7rUW72spKv8R7DXHW4",
  authDomain: "whatsapp-clone-001.firebaseapp.com",
  projectId: "whatsapp-clone-001",
  storageBucket: "whatsapp-clone-001.appspot.com",
  messagingSenderId: "1006081392343",
  appId: "1:1006081392343:web:5630cb2d6b61ab0bbeba92",
  measurementId: "G-C1G4NK3S7M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, storage };
export default db;
