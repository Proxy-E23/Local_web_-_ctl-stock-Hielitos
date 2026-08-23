/*
  service-worker.js
  ------------------
  Requisito técnico para que la web sea instalable como PWA, y
  necesario para mostrar notificaciones locales (ver revisarAlertas()
  en data.js) de forma más confiable en Android.

  No usa Firebase Cloud Messaging (eso requiere el plan de pago
  Blaze). Las alertas de este proyecto son locales: se disparan
  cuando alguien abre la app o registra una venta, no en cualquier
  momento con el teléfono cerrado.
*/

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
