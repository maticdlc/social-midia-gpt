# Social Mídia Mizy no ChatGPT

Versão das skills `/carrossel` e `/seo` pra rodar num GPT personalizado. Precisa de ChatGPT Plus/Team (Custom GPTs).

## Como montar (5 min)
1. ChatGPT → **Explorar GPTs → Criar** → aba **Configurar**.
2. **Nome:** Social Mídia Mizy · **Descrição:** Cria carrosséis e planeja SEO/GEO/Google Ads no tom da Mizy.
3. **Instruções:** cole todo o conteúdo de `instrucoes-gpt.md`.
4. **Conhecimento:** envie os 3 arquivos da pasta `conhecimento/`:
   - `carrossel-guia.md`
   - `seo-guia.md`
   - `template-carrossel.html`
5. **Recursos:** ligue **Pesquisa na web**, **Interpretador de código e análise de dados** (pra entregar o HTML pra baixar) e **Criação de imagens** (opcional, pra carrossel com foto).
6. **Sugestões de conversa** (cole uma em cada):
   - Cria um carrossel sobre [tema]
   - Faz o SEO completo pra [nicho] em [cidade]
   - Monta o Google Meu Negócio de [empresa]
   - Me dá 10 ideias de artigo e carrossel pra [nicho]
7. Salvar → **Somente eu**.

## Sem GPT personalizado (plano grátis)
Cole o conteúdo de `prompt-unico-chatgpt.md` no começo de um chat novo. Tem instruções, guias e template juntos. Se o ChatGPT não deixar baixar arquivo, peça "mostra o HTML num bloco de código" e salve como `carrossel.html`.

## Como usar
- **Carrossel:** o GPT escreve o texto → você aprova → ele entrega `carrossel.html` → abre no navegador → **Baixar PNGs** (1080x1350, prontos pro Instagram) + legenda no chat.
- **SEO:** pede o fluxo todo ou um passo (gmb, on-page, geo, ads). Ele pesquisa na web, entrega tabelas e JSON-LD pronto.

## Diferenças pra versão do Claude Code
- Não salva em pastas nem lê a memória do workspace; a marca e o tom ficam nas instruções e nos arquivos de conhecimento. Mudou a identidade? Atualize `conhecimento/carrossel-guia.md` e o CSS do template e reenvie.
- PNG sai do navegador (botão do HTML), não do Playwright.
- Dados de SEO dependem da pesquisa na web do ChatGPT: sem volume exato de busca. Pra isso use Planejador de Palavras-chave e Search Console.
