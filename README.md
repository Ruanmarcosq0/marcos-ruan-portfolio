# Marcos Ruan — Portfólio profissional

Sites e landing pages com identidade, clareza de conteúdo e caminhos diretos para contato.

- **Portfólio:** https://marcos-ruan-portfolio.vercel.app
- **Autor:** Marcos Ruan Dos Santos Alves
- **WhatsApp profissional:** +55 (11) 95143-2810
- **Repositório:** https://github.com/Ruanmarcosq0/marcos-ruan-portfolio

## Experiência

Home com apresentação, filtros por nicho, seis cases principais, cinco projetos adicionais, serviços, posicionamento, benefícios, processo, diferenciais técnicos, stack, FAQ e orçamento via WhatsApp. Cada um dos 11 projetos tem página própria com contexto, desafio, solução, UX/UI, SEO, responsividade, performance e caminho para contato.

Identidade editorial em preto e vermelho, com Manrope e DM Serif Display. A hero apresenta o autor com sua fotografia original, sem recompressão ou recorte permanente. Projetos em lista vertical, com imagens, títulos e botões que abrem diretamente os sites ao vivo; cada projeto mantém seu case.

## Executar

Requer Node.js 22 ou superior. Não há dependências de instalação ou framework no runtime.

```sh
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

Prévia local padrão: http://127.0.0.1:4173. `npm run build`, `npm run check` e `npm run dev` são atalhos opcionais. A pasta `dist/` é gerada e versionada como cópia reproduzível da entrega.

## Estrutura

```text
content.mjs         Perfil, contato e 11 cases
scripts/build.mjs  Geração estática de todas as páginas e SEO
scripts/check.mjs  Validação de páginas, links, âncoras, SEO e WhatsApp
scripts/serve.mjs  Prévia HTTP local sem dependências
styles.css         Sistema visual e pontos de adaptação
app.js             Menu, filtros e formulário de briefing
assets/            Capturas, fontes locais, favicon e Open Graph
docs/              Inventário, observações, decisões e validação
dist/              Resultado pronto para hospedar
vercel.json        Build, diretório de saída e cabeçalhos
```

## Atualizar

1. Edite `content.mjs` para mudar contato e textos dos cases.
2. Para um novo projeto, adicione seu registro e uma captura `assets/<id>.webp`.
3. Atualize o número visual no filtro “Todos” e a expectativa de casos no verificador ao adicionar projetos.
4. Execute build e check. Revise home e case no desktop e celular.
5. Envie as alterações para `main`; a integração GitHub–Vercel publica o build.

O domínio canônico está em `profile.url`. Ao trocar de domínio, atualize-o e gere novamente sitemap, robots, canonical e Open Graph.

## WhatsApp e privacidade

O formulário não possui backend nem armazena contatos. A interação valida os campos no navegador e abre `wa.me` com a mensagem pronta. A pessoa revisa e envia no WhatsApp. Há um link alternativo se o navegador bloquear a nova aba. Não envia mensagens sozinho, não configura resposta automática e não inclui CRM. Os botões diretos continuam disponíveis sem JavaScript.

Não há analytics, pixels, cookies de marketing ou fontes remotas na experiência final. A Vercel pode manter registros técnicos próprios. Consulte a página de privacidade para o tratamento específico.

## SEO e acessibilidade

HTML estático com conteúdo indexável, uma H1 por página, títulos e descrições específicos, canonical, Open Graph, Twitter Card, JSON-LD Person/WebSite/CreativeWork, sitemap e robots. Imagens WebP com dimensões, carregamento tardio fora da abertura, fontes WOFF2 locais e `font-display: swap`.

Link de salto, controles com rótulos, foco visível, menu com estado expandido, fechamento por Escape, filtros com estado pressionado, FAQ nativo, mensagens de status, preferência por movimento reduzido e layout responsivo. Esses recursos não representam certificação formal de conformidade.

## Critério editorial

17 projetos da Vercel foram inventariados em 20/10/2026. Foram consolidados em 11 trabalhos distintos. Versões alternativas de Scooter, Studio Blessed e Estúdio Nova Era constam na documentação. A versão `estudio-nova-era` é uma apresentação anterior da mesma marca; não foi contada como outro cliente.

“Publicado” descreve disponibilidade técnica. Não comprova venda, aprovação da marca ou relação contratual. Brooklyn e JF são identificados como prévias comerciais. A agenda do Village é histórica. Lucro no Volante é apresentado como interface; seus fluxos autenticados e de pagamento não foram auditados.

Não há depoimentos sobre Marcos, métricas de clientes, faturamento ou garantia de ranking. Avaliações dos negócios retratados não foram reutilizadas como depoimentos sobre criação de sites. As análises descrevem a interface observada e o histórico disponível; não atribuem pontuações de auditoria aos cases.

## Créditos e direitos

Manrope e DM Serif Display: licenças SIL Open Font License incluídas em `docs/`. As capturas documentam projetos da conta do autor. Marcas e imagens de cada negócio pertencem a seus titulares. Sua presença é demonstrativa, sem declaração de endosso ou licença de revenda. Não há licença geral de reutilização de marcas, fotografias ou conteúdo de terceiros.
