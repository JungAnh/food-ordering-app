import { initializeApp } from "firebase/app" 

const firebaseConfig = {
  apiKey: "AIzaSyBjnJth8smhbW6z5fpJGDbveJ2RF1WOROw",
  authDomain: "food-order-77d7b.firebaseapp.com",
  projectId: "food-order-77d7b",
  storageBucket: "food-order-77d7b.appspot.com",
  messagingSenderId: "835437803815",
  appId: "1:835437803815:web:2ae3bc7119117580b8d102",
  measurementId: "G-CJKNGSPMDW"
};

export const app = initializeApp(firebaseConfig);