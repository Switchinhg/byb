// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGhWwzjDoIdj9bjXnMzkxmoWLYAVK6trI",
  authDomain: "bigandbonnie.firebaseapp.com",
  projectId: "bigandbonnie",
  storageBucket: "bigandbonnie.appspot.com",
  messagingSenderId: "972051568033",
  appId: "1:972051568033:web:22447bfddb16f497a4e7e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* funcion para que devuelva la app */
export const getFirestoreApp = () => {
    return app
}

/* inicializar firebase auth */

const auth = getAuth(app)

export const getFirestoreAuth = () =>{
  return auth
}