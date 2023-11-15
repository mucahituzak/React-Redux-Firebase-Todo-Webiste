import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAZNunrilnLMnOKF1tEfE85JUMF1a84sZk",
    authDomain: "react-redux-toolkit-fire-931c4.firebaseapp.com",
    projectId: "react-redux-toolkit-fire-931c4",
    storageBucket: "react-redux-toolkit-fire-931c4.appspot.com",
    messagingSenderId: "1052484048849",
    appId: "1:1052484048849:web:3ccb88336b4f89f31b32f0"
  };

  const app=initializeApp(firebaseConfig)

  const auth=getAuth(app);
  const db=getFirestore(app)

  export {auth,db}