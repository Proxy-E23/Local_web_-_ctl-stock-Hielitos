/*
  firebase-config.js
  -------------------
  Configuración del proyecto de Firebase (ctrl-ventas).
  Este archivo va antes que data.js en cada página HTML, para que
  data.js pueda usar "firebase" ya inicializado.

  La apiKey aquí NO es secreta -- Firebase está diseñado para que
  esta configuración viaje en el navegador. La seguridad real vive
  en las reglas de la base de datos (Realtime Database > Rules),
  no en esconder este archivo.
*/

const firebaseConfig = {
  apiKey: "AIzaSyBYvEsPTGeq1-vPvcQ584nDE2pF9_RxbYE",
  authDomain: "ctrl-ventas.firebaseapp.com",
  databaseURL: "https://ctrl-ventas-default-rtdb.firebaseio.com",
  projectId: "ctrl-ventas",
  storageBucket: "ctrl-ventas.firebasestorage.app",
  messagingSenderId: "999322878189",
  appId: "1:999322878189:web:c0c02a6abd50bd221d0ce4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();