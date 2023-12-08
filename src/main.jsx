import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyB-6YoBuj_Iej2JpICWTyPkG3xa14Bmej0",
  authDomain: "entrega-final-100ec.firebaseapp.com",
  projectId: "entrega-final-100ec",
  storageBucket: "entrega-final-100ec.appspot.com",
  messagingSenderId: "484958787147",
  appId: "1:484958787147:web:89dfea849b2674e161dfce"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
