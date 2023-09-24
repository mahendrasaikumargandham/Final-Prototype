import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1om14EhNbvHeA6pgP-9c5ZsBrf6fEpVw",
  authDomain: "astraverseprototype.firebaseapp.com",
  projectId: "astraverseprototype",
  storageBucket: "astraverseprototype.appspot.com",
  messagingSenderId: "768303503386",
  appId: "1:768303503386:web:82276b8f5e98cf3f0dd9a3",
  measurementId: "G-F9C390VKGG",
};

const app = initializeApp(firebaseConfig);
export const db = getAuth(app);
