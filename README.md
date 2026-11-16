# Social Mídia GPT

Um "social media + redator + analista de SEO" que roda no ChatGPT, **pra qualquer marca**. Faz:

- **Carrosséis** de Instagram/LinkedIn (texto, visual em HTML, PNGs e legenda)
- **Copy pra posts** (post único, legenda, roteiro de Reels, LinkedIn)
- **SEO de site/blog e GEO** (aparecer nas respostas de IAs)
- **E-mails otimizados** (assunto, preheader, corpo, sequências e entregabilidade)

Não faz Google Meu Negócio nem Google Ads.

Nada vem fixo: cada pessoa preenche a **ficha da marca** (tom de voz, cores, fonte, logo, @) e o GPT usa isso em tudo que produz. Serve pra quem tem uma marca ou pra agência com vários clientes (uma ficha por cliente).

## Como instalar no ChatGPT

Você precisa de uma conta no ChatGPT. Há dois jeitos; escolha conforme o seu plano.

### Opção A: GPT personalizado (ChatGPT Plus, Team, Pro ou Enterprise)
Instala uma vez e fica salvo na sua barra lateral.

1. Baixe este repositório: botão verde **Code → Download ZIP** aqui no GitHub, e descompacte.
2. No ChatGPT (chatgpt.com), clique em **GPTs** na barra lateral → **Criar** (ou **Explorar GPTs → + Criar**).
3. Abra a aba **Configurar** (não use o assistente "Criar").
4. Preencha:
   - **Nome:** Social Mídia
   - **Descrição:** Cria carrosséis, copy de posts, SEO e e-mails no tom e na identidade visual da sua marca.
   - **Instruções:** abra `instrucoes-gpt.md`, copie tudo e cole aqui.
5. Em **Conhecimento**, clique em **Fazer upload de arquivos** e envie:
   - `ficha-marca.md` (**já preenchida com os dados da sua marca**, veja a seção abaixo)
   - `conhecimento/carrossel-guia.md`
   - `conhecimento/copy-email-guia.md`
   - `conhecimento/seo-guia.md`
   - `conhecimento/template-carrossel.html`
6. Em **Recursos**, ligue: **Pesquisa na web**, **Interpretador de código e análise de dados** (é ele que entrega o carrossel como arquivo pra baixar) e, se quiser fotos nos carrosséis, **Criação de imagens**.
7. Em **Sugestões de conversa**, coloque:
   - Cria um carrossel sobre [tema]
   - Escreve 3 posts sobre [tema]
   - Faz o SEO pra [nicho] em [cidade]
   - Escreve um e-mail sobre [assunto]
8. Clique em **Criar** (canto superior direito) e escolha **Somente eu**. Pronto: o GPT aparece na barra lateral.

### Opção B: prompt único (qualquer plano, inclusive o gratuito)
1. Abra [`prompt-unico-chatgpt.md`](prompt-unico-chatgpt.md) e copie **tudo abaixo da primeira linha `---`**.
2. Abra uma conversa nova no ChatGPT e cole.
3. Cole logo em seguida a sua ficha da marca preenchida (ou deixe o GPT te entrevistar, é rápido).
4. Peça o que quiser. Vale para aquela conversa; numa conversa nova, cole de novo.
5. Se o ChatGPT não deixar baixar arquivo, peça "mostra o HTML num bloco de código" e salve como `carrossel.html`.

### Se algo não funcionar
- **Não consigo criar GPT:** seu plano é gratuito. Use a Opção B.
- **Não aparece o arquivo pra baixar:** confirme que o Interpretador de código está ligado, ou peça o HTML num bloco de código.
- **O texto de instruções não cabe:** use exatamente `instrucoes-gpt.md` (tem ~4.400 caracteres; o limite do campo é 8.000).
- **O GPT esqueceu a marca:** a ficha precisa estar nos arquivos de conhecimento (Opção A) ou colada na conversa (Opção B).

## Primeiro passo: a ficha da marca

Preencha [`ficha-marca.md`](ficha-marca.md) com: nome e o que faz, cidade e público, tom de voz (adjetivos, frase exemplo, o que evitar, emoji), @ e chamada pra ação, cores em hex, fonte e logo. Pode ser só o que você sabe: se faltar algo, o GPT pergunta ou sugere paletas pro seu segmento.

- **GPT personalizado:** envie a ficha preenchida como arquivo de conhecimento.
- **Prompt único:** cole a ficha logo depois do prompt.
- **Sem ficha:** o GPT te entrevista no começo da conversa e confirma um resumo antes de produzir.
- **Agência:** uma ficha por cliente; peça pro GPT trocar de ficha quando mudar de cliente.

## O que ele faz

| Pedido | Entrega |
|---|---|
| "Cria um carrossel sobre 5 erros de site" | 3 opções de título, roteiro slide a slide (você aprova), `carrossel.html` com os slides 1080x1350, botão pra baixar PNGs e legenda com hashtags |
| "Escreve 3 posts sobre [tema]" | 3 ganchos por post, corpo, CTA e hashtags (Instagram e LinkedIn) |
| "Faz o SEO pra pet shop em Joinville" | Pesquisa de demanda, concorrência, on-page (title/description/H1 + JSON-LD), plano de conteúdo, monitoramento e GEO |
| "Escreve um e-mail de boas-vindas" | Assuntos, preheader, corpo, CTA e checklist de entregabilidade |
| "Me dá 10 ideias de artigo e carrossel pra [nicho]" | Plano de conteúdo com keyword-alvo, estrutura de headings e ponte pra carrossel |

## Escolha como usar

## Fluxo do carrossel

1. Você pede o tema (e, se souber, nicho, objetivo e a última capa publicada).
2. O GPT escreve o texto e **espera sua aprovação** antes de gerar o visual.
3. Ele entrega o `carrossel.html`. Abra no navegador e clique em **Baixar PNGs**: um arquivo por slide, 1080x1350, pronto pro Instagram.
4. A legenda (hook, contexto, CTA, bloco da marca e hashtags) vem junto.

Cada carrossel tem de 5 a 10 slides, com fundos alternados (grafite, creme, terracota) e layouts variados (capa, texto, número, lista, citação, CTA).

## Fluxo de copy pra posts

Peça o tema e o objetivo (atrair, educar, vender). O GPT entrega 3 variações de gancho, corpo, CTA e hashtags, em versão Instagram e/ou LinkedIn.

## Fluxo de e-mail

Peça o assunto e o objetivo. O GPT entrega 3 a 5 assuntos (com sugestão de teste A/B), preheader, corpo com um único CTA e um checklist de entregabilidade (SPF, DKIM, DMARC, descadastro, lista própria). Também monta sequências (boas-vindas, nutrição, reativação) em tabela.

## Fluxo de SEO

São 6 passos: demanda, concorrência, on-page, conteúdo, monitoramento e GEO. Peça o fluxo inteiro ou só um passo ("meta tags", "geo", "ideias de artigo"). O GPT usa a pesquisa na web e **não inventa** volume de busca nem posição: o que não tiver base vem marcado como estimativa.

## Estrutura

```
.
├── README.md                       este arquivo
├── ficha-marca.md                  modelo da ficha: preencha com a sua marca
├── instrucoes-gpt.md               instruções do GPT (cabe no limite de 8.000 caracteres)
├── prompt-unico-chatgpt.md         tudo em um arquivo só, pra colar no chat
└── conhecimento/
    ├── carrossel-guia.md           estrutura, layouts, regras de texto e legenda
    ├── seo-guia.md                 os 6 passos de SEO/GEO
    ├── copy-email-guia.md          copy de posts e SEO de e-mail
    └── template-carrossel.html     modelo visual dos slides (cores e fonte via variáveis) + botão de baixar PNG
```

## Personalização

Tudo é configurável pela ficha, sem editar código. Quem quiser ir além pode mexer no `conhecimento/template-carrossel.html`: as cores e a fonte ficam nas variáveis do `:root`, no topo do arquivo. Se mudar qualquer arquivo, reenvie ao GPT (ou gere de novo o `prompt-unico-chatgpt.md`, que é a soma das instruções, guias e template).

## Limites

- O ChatGPT não lê pastas nem salva no seu computador. A marca e o tom vivem nas instruções e nos arquivos de conhecimento.
- O PNG sai do navegador (botão do HTML). O botão carrega a biblioteca `html-to-image` pela internet.
- Google Meu Negócio e Google Ads ficam de fora de propósito.
- O SEO depende da pesquisa na web do ChatGPT: não traz volume exato de busca. Pra isso use o Planejador de Palavras-chave e o Search Console.
- Foto por IA só se você pedir, sempre em prompt de inglês e sem rostos identificáveis.

## Licença

MIT, veja [LICENSE](LICENSE).
