import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgRXGCBU4YQrw-5xSOlz_nrQciVdtfuqo",
  authDomain: "swapreads-a4d37.firebaseapp.com",
  projectId: "swapreads-a4d37",
  storageBucket: "swapreads-a4d37.appspot.com",
  messagingSenderId: "590866834834",
  appId: "1:590866834834:web:9b23abc278fe7130604d4b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
