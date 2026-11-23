/* =========================================================================
   NEXUS TOOLS · Configuración central
   -------------------------------------------------------------------------
   ÚNICO lugar para credenciales y endpoints. Se carga ANTES de nexus.js.
   (Fase 0 del plan de arquitectura: aislar la configuración del código.)

   Notas de seguridad:
   - KEY es la clave PUBLICABLE de Supabase: es pública por diseño; la
     seguridad real la dan las políticas RLS de la base de datos.
   - DRIVE_TOKEN es un secreto compartido con el Apps Script. Hoy viaja en el
     cliente (limitación conocida). Objetivo de la Fase de seguridad: moverlo a
     una Supabase Edge Function para que nunca salga del servidor.

   DRIVE_URL: deployment vigente …AKfycbzi… (verificado 2026-09-07 devolviendo
   JSONP ok:true). El anterior …AKfycbxe… quedó obsoleto y causaba el error
   "No se pudo contactar Drive". Si se re-despliega el Apps Script, actualizar aquí.
   ========================================================================= */
window.NEXUS_CONFIG = {
  // --- Supabase (proyecto NEXUS · recreado 2026-11-23, ref eofqnqlkznlohqemfcop) ---
  URL_SB: "https://eofqnqlkznlohqemfcop.supabase.co",
  KEY:    "sb_publishable_25tFAhMoGc7i_zORciiqfQ_2tazct0U",

  // --- Google Apps Script (reflejo/lectura de Drive) ---
  DRIVE_URL:   "https://script.google.com/macros/s/AKfycbziYj_K4GhobIYgVt8NVq9GPXo6NItfUkSn9cBEh_UoPHSX92g4NsWUGoX_yOvnd1Rt/exec",
  DRIVE_TOKEN: "maxim-pce-2026"  // debe coincidir con el TOKEN del Apps Script
};
