# Amanda Miquilini - Personal Portfolio

Portfolio pessoal desenvolvido com React, TypeScript, Vite e Tailwind CSS.

O projeto foi pensado para ser facil de customizar: a maior parte do conteudo do site fica centralizada em `src/data/siteData.ts`.

## Como rodar localmente

### 1. Instale as dependencias

```bash
npm install
```

### 2. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Depois, abra a URL exibida no terminal. Por padrao, o Vite costuma usar:

```text
http://localhost:5173/my-resume/
```

### 3. Gere a versao de producao

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Como fazer um fork e criar seu proprio portfolio

Se voce quiser usar este projeto como base para o seu website, siga estes passos:

1. Faca um fork deste repositorio.
2. Clone o fork para a sua maquina.
3. Instale as dependencias com `npm install`.
4. Atualize os dados pessoais, textos, links e projetos em `src/data/siteData.ts`.
5. Substitua imagens, badges e outros assets em `src/assets/`.
6. Ajuste o nome do projeto em `package.json`, se desejar.
7. Atualize o `base` em `vite.config.ts` para o nome do seu repositorio.

Exemplo:

```ts
export default defineConfig({
  plugins: [react()],
  base: '/nome-do-seu-repositorio/',
})
```

Se voce for publicar em um dominio proprio, pode ser necessario usar:

```ts
base: '/',
```

## Onde alterar o conteudo

A maioria das informacoes exibidas no site esta em:

```text
src/data/siteData.ts
```

Principais campos para personalizar:

| Campo | O que alterar |
|------|---------------|
| `personalInfo` | Nome, titulo, headline, localizacao, email, LinkedIn, GitHub e texto sobre voce |
| `skills` | Tecnologias e competencias exibidas no portfolio |
| `certifications` | Certificacoes, anos, emissores e badges |
| `education` | Formacao academica |
| `engineeringFocus` | Areas de foco profissional |
| `projects` | Projetos, descricoes, stacks, links e demos |
| `currentlyLearning` | Estudos e topicos atuais |
| `languages` | Idiomas |

## Estrutura do projeto

```text
src/
|-- assets/          # Imagens, badges e arquivos estaticos
|-- components/      # Componentes reutilizaveis
|-- data/
|   |-- siteData.ts  # Conteudo principal do site
|-- hooks/           # Hooks customizados
|-- sections/        # Secoes da pagina
|-- styles/
|   |-- index.css    # Estilos globais e base do Tailwind
```

## Deploy no GitHub Pages

### 1. Configure o `base`

No arquivo `vite.config.ts`, ajuste o `base` para o nome do repositorio:

```ts
base: '/nome-do-repositorio/',
```

Neste projeto, o valor atual e:

```ts
base: '/my-resume/',
```

### 2. Publique

```bash
npm run deploy
```

Esse comando roda o build e publica a pasta `dist/` usando `gh-pages`.

### 3. Ative o GitHub Pages

No GitHub, va em:

```text
Settings > Pages > Source: gh-pages branch > /root
```

## Stack

| Ferramenta | Uso |
|------------|-----|
| React 18 + TypeScript | Interface |
| Vite | Build e servidor local |
| Tailwind CSS | Estilizacao |
| Framer Motion | Animacoes |
| React Icons + Lucide | Icones |
| gh-pages | Deploy |

## Licenca

Uso pessoal - (c) Amanda Miquilini
