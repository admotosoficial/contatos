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
  if (!CFG.supabaseUrl || !CFG.supabaseKey) return Promise.resolve();
  try {
    return fetch(CFG.supabaseUrl.replace(/\/$/, "") + "/rest/v1/cliques", {
      method: "POST", keepalive: true,
      headers: { "apikey": CFG.supabaseKey, "Content-Type": "application/json", "Prefer": "return=minimal" },
      body: JSON.stringify({ botao, origem, dispositivo, visitante: visitante.slice(0, 40) })
    }).catch(() => {});
  } catch (e) { return Promise.resolve(); }
}
registrar("_visita");
// Links que saem da página (WhatsApp, mapa, e-mail): registra o clique ANTES de sair,
// senão o celular pode cortar o envio ao abrir o outro app. Espera no máximo 600 ms.
document.addEventListener("click", ev => {
  const el = ev.target.closest("a[data-id], button[data-id], [role=button][data-id]");
  if (!el) return;
  const envio = registrar(el.dataset.id);
  const href = el.tagName === "A" ? el.getAttribute("href") : null;
  const sai = href && !href.startsWith("#") && !el.hasAttribute("download") && el.getAttribute("role") !== "button";
  if (!sai || ev.defaultPrevented || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button) return;
  ev.preventDefault();
  let foi = false;
  const ir = () => { if (foi) return; foi = true; location.href = el.href; };
  const espera = Number(el.dataset.espera) || 600; // data-espera="150" para links que precisam abrir mais rápido
  Promise.race([envio, new Promise(r => setTimeout(r, espera))]).then(ir, ir);
});
})();
