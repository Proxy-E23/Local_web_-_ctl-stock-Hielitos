/*
  auth-guard.js
  -------------
  Se carga en cada página que requiere sesión activa (todas menos
  login.html). Si no hay nadie logueado, redirige a login.html antes
  de que la página termine de cargar.

  Requiere que firebase-config.js y el SDK de Firebase Auth ya estén
  cargados ANTES que este archivo.
*/

(function () {
  const auth = firebase.auth();

  auth.onAuthStateChanged((usuario) => {
    if (!usuario) {
      // Guardamos a dónde intentaba ir, para regresarlo ahí tras el login
      sessionStorage.setItem("destinoTrasLogin", window.location.pathname.split("/").pop());
      window.location.href = "login.html";
    }
  });

  // Función compartida para el botón de "Cerrar sesión" en cada página
  window.cerrarSesion = async function () {
    await auth.signOut();
    window.location.href = "login.html";
  };
})();
