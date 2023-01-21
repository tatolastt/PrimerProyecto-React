import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBoS9kxCELwaAKq6b3ofVlU-F7BwI4Lu1c",
  authDomain: "coderhouse-paginacelus.firebaseapp.com",
  projectId: "coderhouse-paginacelus",
  storageBucket: "coderhouse-paginacelus.appspot.com",
  messagingSenderId: "324206392422",
  appId: "1:324206392422:web:2222dad6e66eb2994fa9a7",
  measurementId: "G-D4KRRGX33J"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);