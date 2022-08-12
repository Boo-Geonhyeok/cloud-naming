// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6xQPs2cYZJiLDX68FKMkkvQiJzqnDHn0",
  authDomain: "cloudnaming.firebaseapp.com",
  projectId: "cloudnaming",
  storageBucket: "cloudnaming.appspot.com",
  messagingSenderId: "715109841779",
  appId: "1:715109841779:web:e3400c78af8f2744afa306"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

export default app