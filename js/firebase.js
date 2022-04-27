// https://firebase.google.com/docs/firestore/quickstart#web-version-9

// https://firebase.google.com/docs/web/setup

// https://firebase.google.com/docs/web/learn-more#available-libraries

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// import {} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";

import firebaseConfig from "./env.js";


  // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyC8TvEes54NhWZz-ad0DDwx_tNO7L5_5y0",
//     authDomain: "fir-crud-8a4c1.firebaseapp.com",
//     projectId: "fir-crud-8a4c1",
//     storageBucket: "fir-crud-8a4c1.appspot.com",
//     messagingSenderId: "986100314323",
//     appId: "1:986100314323:web:a21cf086d3248f0b1ba426"
//   };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

console.log(firebaseConfig);