# USF Food App (React + Vite + Tailwind)

Projeto de exemplo com telas: Cardápio, Delivery/Status, Criação de Conta/Login e Menu.

Paleta usada:
- Marrom principal: `#6B4F3A`
- Bege claro (background): `#F7F3EE`
- Verde acento: `#7FB77E`
- Laranja secundário: `#F2A84B`
- Cinza texto: `#4A4A4A`

Pré-requisitos
- Node.js (>=16)
- npm

Como rodar (PowerShell):

```powershell
cd C:\Users\Flow\Desktop\usf
npm install
npm start
```

O app abrirá em `http://localhost:5173` por padrão.

Estrutura principal
- `src/pages` — páginas: `Menu`, `Delivery`, `Auth`, `HamburgerMenu`
- `src/components` — botões, cards, navbar, barra de progresso
- `tailwind.config.cjs` — tema com cores do app

Notas
- Código comentado e componentes construídos para reuso.
- Ícones usam `react-icons` (estilo contorno). Ícones preenchidos aparecem quando o estado está ativo (ex.: favorito).
- Para produção, adicione backend/integração de API, autenticação OAuth real e imagens locais em `src/assets`.

Novas funcionalidades adicionadas
- Contexto do carrinho: `src/context/CartContext.jsx` (persiste em `localStorage`).
- Página do carrinho: `src/pages/Cart.jsx` (rota `/cart`).
- Integração: `Navbar` mostra a contagem do carrinho; `ProductCard` usa o contexto para adicionar itens.

CI / Deploy
- O repositório contém um workflow GitHub Actions em `.github/workflows/ci.yml` que faz build e publica a pasta `dist` no GitHub Pages quando há push na branch `main`.
- Para habilitar GitHub Pages: em `Settings` → `Pages` escolha a branch `gh-pages` (a workflow cria o conteúdo). O `GITHUB_TOKEN` padrão é usado para deploy.

Deseja que eu também:
- Configure deploy para Vercel/Netlify?
- Adicione animações e melhorias de responsividade?

