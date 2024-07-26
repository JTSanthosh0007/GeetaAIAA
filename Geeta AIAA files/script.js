

import { initializeApp } from "firebase/app";
import { getDatabase,ref,set,get,child } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByPCgiT8N-T764jUDWUeVbCHa_KfMrEIs",
  authDomain: "geetaaiaa.firebaseapp.com",
  projectId: "geetaaiaa",
  storageBucket: "geetaaiaa.appspot.com",
  messagingSenderId: "391192058645",
  appId: "1:391192058645:web:43bf083883d2a9fcabe71c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
document.getElementById("submit").addEventListener('click',function(e){
set(ref(db,'Name/' + document.getElementById("Name").value),
)
})