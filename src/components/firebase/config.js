
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

export const firebaseConfig = {
  apiKey: "AIzaSyDztjR6nUeOA0Zi8HNCgBnZRw70A0knrmw",
  authDomain: "imdb-auth.firebaseapp.com",
  projectId: "imdb-auth",
  storageBucket: "imdb-auth.appspot.com",
  messagingSenderId: "160959905664",
  appId: "1:160959905664:web:1f52eb221d0495506d8b65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app)
export default app