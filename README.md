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

Deseja que eu também:
- Inicialize um repositório Git e faça o primeiro commit?
- Configure GitHub Actions para deploy?

