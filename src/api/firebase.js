import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDg5jlk1l2U9oalbiOk2AiJWX3TOp9ZWRY",
  authDomain: "chat-react-82c50.firebaseapp.com",
  databaseURL:
    "https://chat-react-82c50-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-react-82c50",
  storageBucket: "chat-react-82c50.appspot.com",
  messagingSenderId: "877369598666",
  appId: "1:877369598666:web:9c403a0f22b54db59d4a33",
  measurementId: "G-3LJXYDLHFN",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();
