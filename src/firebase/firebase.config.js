import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
}

export const app = initializeApp(firebaseConfig)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAbHN-lWX4NsGpdqrBrRnJooJuNb9nDNHs",
//   authDomain: "tourist-guide-6180c.firebaseapp.com",
//   projectId: "tourist-guide-6180c",
//   storageBucket: "tourist-guide-6180c.appspot.com",
//   messagingSenderId: "1011732507762",
//   appId: "1:1011732507762:web:282b6ae9aebc92ea2ea6eb"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);