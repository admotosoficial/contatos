// ===== LINKS DA PÁGINA =====
// Para mudar um número, nome ou endereço, edite só esta lista.
// "id" é o nome que aparece no painel de cliques: não mude depois de publicado.
const MSG = encodeURIComponent("Olá! Vim pelo Instagram da AD Motos.");

window.LOJAS = [
  {
    nome: "Várzea da Roça", detalhe: "Matriz", endereco: "Rod. BR 407 · Várzea da Roça - BA",
    links: [
      { id: "zap-varzea", tipo: "zap", titulo: "Chamar no WhatsApp", sub: "(74) 9 8821-5750",
        url: "https://wa.me/5574988215750?text=" + MSG },
      { id: "mapa-varzea", tipo: "mapa", titulo: "Como chegar", sub: "",
        url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("AD Motos, BR 407, Várzea da Roça - BA") },
    ]
  },
  {
    nome: "Senhor do Bonfim", detalhe: "Filial", endereco: "Av. Contorno · Senhor do Bonfim - BA",
    links: [
      { id: "zap-bonfim", tipo: "zap", titulo: "Chamar no WhatsApp", sub: "(74) 9 8809-6304",
        url: "https://wa.me/5574988096304?text=" + MSG },
      { id: "mapa-bonfim", tipo: "mapa", titulo: "Como chegar", sub: "",
        url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("AD Motos, Av. Contorno, Senhor do Bonfim - BA") },
    ]
  },
  {
    nome: "Capim Grosso", detalhe: "Hesla Motos", endereco: "Av. Leonicio Ferreira dos Santos · Capim Grosso - BA",
    links: [
      { id: "zap-capim", tipo: "zap", titulo: "Chamar no WhatsApp", sub: "(74) 9 9929-6249",
        url: "https://wa.me/5574999296249?text=" + MSG },
      { id: "mapa-capim", tipo: "mapa", titulo: "Como chegar", sub: "",
        url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Hesla Motos, Av. Leonicio Ferreira dos Santos, Capim Grosso - BA") },
    ]
  },
];

// Botões gerais, abaixo das lojas (site, Instagram, e-mail...). "curto" = nome nos botões pequenos.
window.OUTROS = [
  { id: "zap-financeiro", tipo: "zap", curto: "Financeiro", titulo: "Financeiro · Matriz", sub: "(74) 9 8104-9640",
    url: "https://wa.me/5574981049640?text=" + encodeURIComponent("Olá! Vim pelo Instagram da AD Motos e preciso falar com o financeiro.") },
  { id: "loja-online", tipo: "site", curto: "Loja online", titulo: "Loja online · Atacado", sub: "admotos.meuspedidos.com.br",
    url: "https://admotos.meuspedidos.com.br" },
  { id: "email", tipo: "email", curto: "E-mail", titulo: "E-mail comercial", sub: "comercial@admotos.com.br",
    url: "mailto:comercial@admotos.com.br" },
];
