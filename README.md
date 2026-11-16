# Social Mídia GPT

Um "social media + analista de SEO" que roda no ChatGPT. Cria **carrosséis de Instagram/LinkedIn** (texto, visual em HTML, PNGs e legenda) e planeja **SEO, Google Meu Negócio, Google Ads e GEO** (aparecer em IAs), tudo no tom de voz e na identidade visual da Mizy.

Versão para ChatGPT das skills `/carrossel` e `/seo` do MazyOS.

## O que ele faz

| Pedido | Entrega |
|---|---|
| "Cria um carrossel sobre 5 erros de site" | 3 opções de título, roteiro slide a slide (você aprova), `carrossel.html` com os slides 1080x1350, botão pra baixar PNGs e legenda com hashtags |
| "Faz o SEO completo pra pet shop em Joinville" | Pesquisa de demanda, concorrência, Google Meu Negócio, on-page (title/description/H1 + JSON-LD), plano de conteúdo, Google Ads, checklist de monitoramento e GEO |
| "Monta o Google Meu Negócio de [empresa]" | Categorias, descrição de 750 caracteres, checklist de fotos, posts e estratégia de avaliações |
| "Me dá 10 ideias de artigo e carrossel pra [nicho]" | Plano de conteúdo com keyword-alvo, estrutura de headings e ponte pra carrossel |

## Escolha como usar

### Opção A: GPT personalizado (recomendado, ChatGPT Plus/Team)
Monta uma vez e fica salvo.

1. ChatGPT → **Explorar GPTs → Criar** → aba **Configurar**.
2. **Nome:** Social Mídia Mizy. **Descrição:** Cria carrosséis e planeja SEO/GEO/Google Ads no tom da Mizy.
3. **Instruções:** cole o conteúdo de [`instrucoes-gpt.md`](instrucoes-gpt.md).
4. **Conhecimento:** envie os 3 arquivos de [`conhecimento/`](conhecimento):
   - `carrossel-guia.md`
   - `seo-guia.md`
   - `template-carrossel.html`
5. **Recursos:** ligue **Pesquisa na web**, **Interpretador de código** (pra entregar o HTML pra baixar) e **Criação de imagens** (opcional, pra carrossel com foto).
6. **Sugestões de conversa:**
   - Cria um carrossel sobre [tema]
   - Faz o SEO completo pra [nicho] em [cidade]
   - Monta o Google Meu Negócio de [empresa]
   - Me dá 10 ideias de artigo e carrossel pra [nicho]
7. Salvar e escolher a visibilidade (**Somente eu** é o mais seguro).

### Opção B: prompt único (qualquer plano, inclusive grátis)
1. Abra [`prompt-unico-chatgpt.md`](prompt-unico-chatgpt.md) e copie **tudo abaixo da primeira linha `---`**.
2. Cole no começo de um chat novo e ative a pesquisa na web.
3. Peça o que quiser. Vale para aquele chat.
4. Se o ChatGPT não deixar baixar arquivo, peça "mostra o HTML num bloco de código" e salve como `carrossel.html`.

## Fluxo do carrossel

1. Você pede o tema (e, se souber, nicho, objetivo e a última capa publicada).
2. O GPT escreve o texto e **espera sua aprovação** antes de gerar o visual.
3. Ele entrega o `carrossel.html`. Abra no navegador e clique em **Baixar PNGs**: um arquivo por slide, 1080x1350, pronto pro Instagram.
4. A legenda (hook, contexto, CTA, bloco da marca e hashtags) vem junto.

Cada carrossel tem de 5 a 10 slides, com fundos alternados (grafite, creme, terracota) e layouts variados (capa, texto, número, lista, citação, CTA).

## Fluxo de SEO

São 8 passos: demanda, concorrência, Google Meu Negócio, on-page, conteúdo, Google Ads, monitoramento e GEO. Peça o fluxo inteiro ou só um passo ("gmb", "meta tags", "geo", "ideias de artigo"). O GPT usa a pesquisa na web e **não inventa** volume de busca, CPC nem posição: o que não tiver base vem marcado como estimativa.

## Estrutura

```
.
├── README.md                       este arquivo
├── instrucoes-gpt.md               instruções do GPT (cabe no limite de 8.000 caracteres)
├── prompt-unico-chatgpt.md         tudo em um arquivo só, pra colar no chat
└── conhecimento/
    ├── carrossel-guia.md           estrutura, layouts, regras de texto e legenda
    ├── seo-guia.md                 os 8 passos de SEO/GEO/Ads
    └── template-carrossel.html     modelo visual dos slides + botão de baixar PNG
```

## Usar com outra marca

Troque estes pontos e reenvie os arquivos pro GPT:

1. `instrucoes-gpt.md`: seções "Quem é a Mizy" e "Tom de voz" (nome, serviços, @, slogan, o que evitar).
2. `conhecimento/carrossel-guia.md`: seção "Visual" (cores e fonte).
3. `conhecimento/template-carrossel.html`: variáveis de cor no `:root`, a fonte do Google Fonts e o SVG do selo.
4. Gere de novo o `prompt-unico-chatgpt.md` juntando os arquivos (instruções, guias e template), se for usar a Opção B.

## Limites

- O ChatGPT não lê pastas nem salva no seu computador. A marca e o tom vivem nas instruções e nos arquivos de conhecimento.
- O PNG sai do navegador (botão do HTML). O botão carrega a biblioteca `html-to-image` pela internet.
- O SEO depende da pesquisa na web do ChatGPT: não traz volume exato de busca. Pra isso use o Planejador de Palavras-chave e o Search Console.
- Foto por IA só se você pedir, sempre em prompt de inglês e sem rostos identificáveis.

## Licença

MIT, veja [LICENSE](LICENSE).
