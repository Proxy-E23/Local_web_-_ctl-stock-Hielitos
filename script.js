
function obtenerFechaLocal() {
  // Crear fecha en zona horaria de México (GMT-6)
  const ahora = new Date();
  const offsetMexico = -6; // GMT-6 para México
  const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  const fechaMexico = new Date(utc + (offsetMexico * 3600000));
  
  const año = fechaMexico.getFullYear();
  const mes = (fechaMexico.getMonth() + 1).toString().padStart(2, '0');
  const dia = fechaMexico.getDate().toString().padStart(2, '0');
  
  return `${año}-${mes}-${dia}`;
}

/**
 * Obtiene la hora actual en zona horaria de México (GMT-6)
 * @returns {string} Hora en formato HH:MM
 */
function obtenerHoraLocal() {
  // Crear hora en zona horaria de México (GMT-6)
  const ahora = new Date();
  const offsetMexico = -6; // GMT-6 para México
  const utc = ahora.getTime() + (ahora.getTimezoneOffset() * 60000);
  const fechaMexico = new Date(utc + (offsetMexico * 3600000));
  
  const horas = fechaMexico.getHours().toString().padStart(2, '0');
  const minutos = fechaMexico.getMinutes().toString().padStart(2, '0');
  
  return `${horas}:${minutos}`;
}

/**
 * Obtiene la fecha y hora actual en zona horaria de México
 * @returns {object} {fecha: 'YYYY-MM-DD', hora: 'HH:MM'}
 */
function obtenerFechaHoraLocal() {
  return {
    fecha: obtenerFechaLocal(),
    hora: obtenerHoraLocal()
  };
}

// ========================================
// FUNCIONALIDAD DEL MENÚ HAMBURGUESA
// ========================================

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