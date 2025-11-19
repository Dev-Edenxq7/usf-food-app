# USF Food — Mockup Prompts (4K)

This file contains ready-to-use prompts for Midjourney / Stable Diffusion (SDXL) to generate high-fidelity web UI mockups for "USF Food". Use the English prompts for best results in most image AIs; a Portuguese variant is provided when needed.

---

## Midjourney (desktop hero, EN, 4K)

Prompt:
"High-fidelity web UI design for a food delivery website called 'USF Food'. Minimalist and clean aesthetic. Soft cream background #F5F5DC. Floating white cards with 20px rounded corners, subtle soft drop shadows, top half filled by high-quality appetizing food photography (close-up, shallow depth of field), bottom half clean typographic layout with product name, small descriptive text, price and a vibrant fresh green primary button with a soft vertical gradient. Modern Sans-Serif typography (Inter or Roboto), sleek header with minimal icons, slightly rounded outline icons, light micro-interactions hints. Dribbble-trending style, ultra-detailed, photoreal food photography integrated into UI, soft ambient studio lighting, realistic textures, subtle reflections, wide composition for web hero view."

Parameters: `--ar 16:9 --v 5 --q 2 --stylize 1000`

Export target: 3840x2160 (4K) — use the platform's upscaler if available.

---

## Stable Diffusion / SDXL (img2img recommended)

Positive prompt: use the same English prompt from Midjourney.

Negative prompt: `lowres, text, watermark, blurry, deformed, cartoon, extra limbs, bad anatomy`

Suggested settings: Steps 30–50, Sampler: DPM++ 2M Karras or Euler a, CFG: 7.0–9.0, Size: 3840x2160. Use img2img with a light layout sketch to preserve UI composition.

---

## Card close-up variant (EN)

"Close-up UI card mockup for USF Food — floating white card, 20px radius, top half delicious close-up food photography, soft cream background #F5F5DC, vibrant green CTA button, Inter font, minimal icon outlines, extremely detailed, elegant composition, high-resolution."

Params: `--ar 4:5 --v 5 --q 2 --stylize 800`

---

## Prompt em Português (Midjourney / SDXL)

"Design de UI web em alta fidelidade para um site de delivery chamado 'USF Food'. Estética minimalista e limpa. Fundo creme suave #F5F5DC. Cards flutuantes brancos com cantos arredondados de 20px e sombra sutil. Metade superior do card preenchida por fotografia gastronômica de alta qualidade (close-up, profundidade de campo curta), metade inferior com tipografia moderna (Inter/Roboto), nome, descrição, preço e botão primário em verde vibrante com gradiente suave. Cabeçalho elegante com ícones mínimos (contorno levemente arredondado). Estilo Dribbble, ultra-detalhado, iluminação suave de estúdio, texturas realistas, composição larga para hero web, 4K."

Params: `--ar 16:9 --v 5 --q 2 --stylize 1000`

---

## Tips
- For consistent product photography, use img2img with the same seed and light layout sketch.
- Generate hero and card variants separately and composite in Figma/Photoshop if you need exact spacing.
- Use SDXL for precise color control and Midjourney for highly stylized Dribbble-like renders.
