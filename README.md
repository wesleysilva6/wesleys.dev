<div align="center">

# 🌐 Wesley Silva | Portfolio

**Portfólio profissional e interativo desenvolvido com React, TypeScript e Vite.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br />

[Sobre o Projeto](#-sobre-o-projeto) •
[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias-utilizadas) •
[Projetos](#-projetos-apresentados-no-portfólio) •
[Como Executar](#-como-executar-o-projeto) •
[Estrutura](#-estrutura-do-projeto) •
[Contato](#-contato)

</div>

---

## 📌 Sobre o Projeto

Este projeto é a aplicação web que hospeda o meu portfólio pessoal e profissional. Foi concebido para apresentar de forma clara, moderna e interativa minha atuação como **Analista de Suporte Computacional** e **Desenvolvedor de Software (Full Stack)**.

O design une elementos visuais cyberpunk/tech — como o efeito de chuva de código em Canvas no estilo Matrix — a uma estética limpa em Glassmorphism, com alternância de tema (Dark/Light mode) e alta performance em carregamento e renderização.

---

## ✨ Funcionalidades

- 🌓 **Tema Dark / Light Dinâmico**: Alternância fluida de temas com persistência da preferência do usuário no `localStorage`.
- 💻 **Efeito Matrix no Hero**: Animação em Canvas 2D interativa com suporte a taxa de atualização suave e respeito a configurações de acessibilidade (`prefers-reduced-motion`).
- 💎 **Design Moderno & Glassmorphism**: Cartões translúcidos com blur e contrastes refinados para destaque de informações.
- 📱 **Totalmente Responsivo**: Layout flexível e adaptável para desktops, tablets e smartphones (Mobile-First com Bootstrap).
- 🧭 **Navegação Fluida**: Rolagem suave (smooth scroll) entre seções e menu de navegação intuitivo.
- 📂 **Vitrine de Projetos Reais**: Apresentação detalhada de sistemas desenvolvidos, incluindo tecnologias aplicadas e links diretos para os repositórios no GitHub.
- 📜 **Linha do Tempo de Carreira**: Seção de trajetória profissional evidenciando experiências no setor de infraestrutura e desenvolvimento.

---

## 🛠️ Tecnologias Utilizadas

### Front-end & Core
- **[React 19](https://react.dev/)**: Biblioteca componentizada para construção da interface.
- **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática para maior robustez e escalabilidade do código.
- **[Vite](https://vitejs.dev/)**: Ferramenta de build e bundling ultrarrápida com Hot Module Replacement (HMR).

### Estilização & UI
- **[Bootstrap 5.3](https://getbootstrap.com/)**: Grid responsivo e utilitários modernos.
- **[Bootstrap Icons](https://icons.getbootstrap.com/)**: Conjunto completo de ícones vetoriais.
- **CSS3 / Variáveis Nativas**: Arquitetura orientada a tokens de design para temas claro e escuro.

### Qualidade & Ferramentas
- **[ESLint 10](https://eslint.org/)** & **[typescript-eslint](https://typescript-eslint.io/)**: Padronização de código e boas práticas de desenvolvimento.

---

## 🚀 Projetos Apresentados no Portfólio

| Projeto | Descrição | Stack Principal | Repositório |
| :--- | :--- | :--- | :---: |
| **NovaWave - Arena** | Gerenciamento interno de arenas com dashboard, controle de alunos, turmas, mensalidades e integração via WhatsApp. | `Docker`, `Node.js`, `PHP`, `PostgreSQL`, `React`, `TypeScript` | [Repositório](https://github.com/wesleysilva6/NovaWave-Arena) |
| **NovaWave - Motors** | Plataforma de gestão de anúncios de veículos, controle de vendas, clientes e gráficos interativos. | `Docker`, `PHP`, `PostgreSQL`, `React`, `TypeScript` | [Repositório](https://github.com/wesleysilva6/NovaWave-Motors) |
| **NovaWave - Estoque** | Sistema para controle de estoque e painel de vendas com métricas e histórico. | `Laravel`, `PHP`, `React`, `TypeScript`, `Docker` | [Repositório](https://github.com/wesleysilva6/Refactor.NovaWave-Estoque) |

---

## 💻 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- Gerenciador de pacotes (`npm`, `yarn` ou `pnpm`)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/wesleysilva6/wesleys.dev.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd wesleys.dev
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   Acesse `http://localhost:5173` para visualizar o portfólio.

### Outros Scripts Úteis

- `npm run build`: Compila o TypeScript e gera os arquivos otimizados para produção no diretório `dist/`.
- `npm run preview`: Executa localmente o build de produção para testes pré-deploy.
- `npm run lint`: Analisa o código com o ESLint para verificar padrões e possíveis erros.

---

## 📁 Estrutura do Projeto

```plaintext
wesleys.dev/
├── public/                 # Arquivos públicos e estáticos
├── src/
│   ├── assets/             # Imagens dos projetos, favicons e avatar
│   ├── components/         # Componentes modulares da interface
│   │   ├── About.tsx       # Seção sobre mim e biografia
│   │   ├── Contact.tsx     # Canais de contato e links sociais
│   │   ├── Footer.tsx      # Rodapé com créditos
│   │   ├── Hero.tsx        # Apresentação principal com efeito Matrix
│   │   ├── Journey.tsx     # Linha do tempo profissional e histórico
│   │   ├── Navbar.tsx      # Barra de navegação e seletor de tema
│   │   ├── Projects.tsx    # Cards com vitrine de projetos
│   │   └── Skills.tsx      # Habilidades técnicas e categorias
│   ├── styles/
│   │   └── global.css      # Variáveis de temas, glassmorphism e estilos globais
│   ├── App.tsx             # Componente raiz e gerenciamento de tema
│   ├── main.tsx            # Ponto de entrada da aplicação React
│   └── vite-env.d.ts       # Declarações de tipos do Vite
├── index.html              # HTML base da aplicação
├── package.json            # Dependências e scripts do projeto
├── tsconfig.json           # Configurações do TypeScript
└── vite.config.ts          # Configurações do Vite
```

---

## 📬 Contato

Gostou do trabalho ou quer trocar uma ideia sobre oportunidades e projetos? Fique à vontade para entrar em contato:

- 🌐 **LinkedIn**: [linkedin.com/in/wesleywagnersilva](https://www.linkedin.com/in/wesleywagnersilva/)
- 🐙 **GitHub**: [github.com/wesleysilva6](https://github.com/wesleysilva6)
- ✉️ **E-mail**: [wesleywagner999@gmail.com](mailto:wesleywagner999@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença [MIT](LICENSE). Consulte o arquivo para obter mais detalhes.

<div align="center">
  <sub>Desenvolvido com dedicação por <strong>Wesley Silva</strong> 🚀</sub>
</div>
