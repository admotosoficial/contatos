// Conta visitas e cliques (Supabase). Usa config.js. Qualquer <a data-id="..."> é contado.
(function () {
const CFG = window.LINKS_CONFIG || {};
const params = new URLSearchParams(location.search);
const ua = navigator.userAgent || "";
let ref = "direto"; try { if (document.referrer) ref = new URL(document.referrer).hostname; } catch (e) {}
const origem = (params.get("utm_source") || params.get("origem") ||
  (/Instagram/i.test(ua) ? "instagram" : /FBAN|FBAV/i.test(ua) ? "facebook" : ref)).slice(0, 40);
const dispositivo = /Mobi|Android|iPhone|iPad/i.test(ua) ? "celular" : "computador";
let visitante = "";
try {
  visitante = localStorage.getItem("adm_v") || "";
  if (!visitante) { visitante = crypto.randomUUID ? crypto.randomUUID() : String(Math.random()).slice(2); localStorage.setItem("adm_v", visitante); }
} catch (e) { visitante = ""; }

function registrar(botao) {
  if (!CFG.supabaseUrl || !CFG.supabaseKey) return;
  try {
    fetch(CFG.supabaseUrl.replace(/\/$/, "") + "/rest/v1/cliques", {
      method: "POST", keepalive: true,
      headers: { "apikey": CFG.supabaseKey, "Content-Type": "application/json", "Prefer": "return=minimal" },
      body: JSON.stringify({ botao, origem, dispositivo, visitante: visitante.slice(0, 40) })
    }).catch(() => {});
  } catch (e) {}
}
registrar("_visita");
document.addEventListener("click", ev => {
  const a = ev.target.closest("a[data-id], button[data-id], [role=button][data-id]");
  if (a) registrar(a.dataset.id);
});
})();
