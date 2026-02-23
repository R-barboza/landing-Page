# RMB Solutions — Landing Page (GitHub Pages)

Este repositório contém uma landing page estática (HTML/CSS/JS) para publicar no **GitHub Pages**.

## Estrutura
- `index.html`
- `styles.css`
- `script.js`

## Como publicar no GitHub Pages
1. Crie um repositório no GitHub (ex.: `rmbsolutions-site`).
2. Envie estes arquivos para a raiz do repositório (branch `main`).
3. No GitHub, vá em **Settings → Pages**.
4. Em **Build and deployment**, selecione:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
5. Salve e aguarde o link ser gerado.

## Personalização rápida
- Texto e seções: edite `index.html`
- Cores e layout: edite `styles.css`
- Formulário: atualmente usa `mailto:` (sem backend). Se quiser envio real, dá para integrar com Formspree/Netlify Forms ou um backend.
