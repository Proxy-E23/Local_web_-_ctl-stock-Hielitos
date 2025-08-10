
// Menú hamburguesa
document.addEventListener('DOMContentLoaded', function() {
  const btnMenu = document.getElementById('btn-menu');
  const menuOpciones = document.getElementById('menu-opciones');

  if (btnMenu && menuOpciones) {
    btnMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      menuOpciones.classList.toggle('menu-oculto');
      menuOpciones.classList.toggle('menu-visible');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
      if (!menuOpciones.contains(e.target) && !btnMenu.contains(e.target)) {
        menuOpciones.classList.add('menu-oculto');
        menuOpciones.classList.remove('menu-visible');
      }
    });

    // Cerrar menú al hacer clic en una opción
    const enlaces = menuOpciones.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', function() {
        menuOpciones.classList.add('menu-oculto');
        menuOpciones.classList.remove('menu-visible');
      });
    });
  }
});