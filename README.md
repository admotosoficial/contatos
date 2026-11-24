# AD Motos · página de links (bio do Instagram)

Site estático publicado de graça pelo GitHub Pages: https://admotosoficial.github.io/contatos/

- `index.html` — a página da bio.
- `painel.html` — painel de visitas e cliques (pede senha).
- `links.js` — **lista de lojas, WhatsApps e endereços**. Para mudar um número, edite só aqui.
- `config.js` — endereço e chave pública do Supabase (plano grátis) que conta as visitas e os cliques.
  A chave pública só consegue gravar cliques; ler os números exige a senha do painel.
- `rastreio.js` — envia cada visita e clique (botão, origem, celular/computador, código aleatório do aparelho).
  Nenhum dado pessoal é guardado.
- `premium-*.html` — os modelos de layout avaliados.

Dica: para saber de onde veio a visita, use `?origem=stories`, `?origem=cartao` etc. no fim do link.
