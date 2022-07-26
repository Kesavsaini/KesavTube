import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey:"AIzaSyBzhQyYwBdIElJYZ4rNywSIKy56TJ4hATI",
  authDomain: "kesavtube.firebaseapp.com",
  projectId: "kesavtube",
  storageBucket: "kesavtube.appspot.com",
  messagingSenderId: "180203502801",
  appId: "1:180203502801:web:a32818b31ea9df37ff19f0"
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();