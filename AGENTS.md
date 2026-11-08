# clone-tabnews-ia

Clone do TabNews (curso.dev) em desenvolvimento, construído com auxílio de IA. Estado atual: projeto inicial, com uma única página de teste.

## Stack

- Next.js 16.2.12 (App Router, Turbopack)
- React 19
- JavaScript puro (sem TypeScript, sem `jsconfig.json`)
- Módulos ES (`next.config.js` usa `export default`)
- Gerenciador de pacotes: npm (`package-lock.json`)

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # servidor de desenvolvimento (http://localhost:3000)
npm run build   # build de produção
npm start       # servir o build de produção
```

Não há scripts de lint, formatação ou testes configurados.

## Estrutura

```
app/
  layout.js   # RootLayout: <html lang="pt-BR"> + <body>
  page.js     # Página "/": texto "Teste" centralizado, fundo escuro (#1a1a1a), estilos inline
next.config.js  # Config vazia (nenhuma opção ativa)
package.json
```

## Deploy

- Hospedado na Vercel, com deploy automático a cada push na `main`.
- Repositório: https://github.com/thsc47/clone-tabnews-ia
- O **Framework Preset do projeto na Vercel deve ser "Next.js"** (Settings → Build & Development Settings), sem override de Output Directory.
- Histórico: com o preset em "Other", o deploy falhava com `STATIC_BUILD_NO_OUT_DIR ... "public"`. A solução foi corrigir o preset no painel, e não o código.
- Não usar `output: "export"` nem `vercel.json` com `outputDirectory`. Isso foi tentado e removido. O projeto vai precisar de rotas de API e banco de dados, então precisa de runtime de servidor.

## Convenções

- Idioma da interface: pt-BR.
- Commits em mensagens curtas, em minúsculas e em inglês (ex.: `add Next.js 16 app with App Router and centered page`).
- Trabalho direto na branch `main`.
- Preferir configurar a plataforma (painel da Vercel) a adicionar código ou arquivos específicos de vendor ao projeto.

## Ignorados pelo git

`node_modules/` e `.next/`.
