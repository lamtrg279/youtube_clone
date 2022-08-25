import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA100W16tya1DUe3Sxk4IyGV5btgH2Wms",
  authDomain: "clone-c7fdd.firebaseapp.com",
  projectId: "clone-c7fdd",
  storageBucket: "clone-c7fdd.appspot.com",
  messagingSenderId: "677588997802",
  appId: "1:677588997802:web:76d5fe8673d356093522d3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
