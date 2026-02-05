# 🚀 Projeto Universe  

💙 **“Explorar o desconhecido é o primeiro passo para criar algo incrível.”**

O **Universe** é um projeto que nasceu lá em 2022, como um protótipo escolar simples feito em HTML, CSS e PowerPoint para agrupar desenhos da tela. Inicialmente, o tema dele era focado totalmente em algo moderno + pegada infantil, até que no ano de 2025 decidi refazê-lo por conta própria, focando em mais funcionalidades e adotando um desing moderno com cara de Universo de verdade.  
Hoje, ele está evoluindo para um **site completo, interativo e moderno**, onde está sendo desenvolvido em **React**, trazendo uma experiência única de exploração pelo espaço. 🌌  

---

## 🌠 Sobre o Projeto  

O **Universe** é uma **jornada digital pelo cosmos**, explorando constelações, planetas, galáxias e fenômenos astronômicos. Cada tela foi pensada para oferecer uma experiência visualmente imersiva e conectada à curiosidade de explorar o desconhecido.

O projeto conta com:  
- **Tela de Login e Cadastro**: com verificação de campos e sistema de criação de conta fictício (frontend).  
- **Tela Principal (Menu)**: acesso às opções “Explorar o Universo”, “Informações Astronômicas”, “Eventos Cósmicos” e muito mais.  
- **Sessões Interativas**: com informações sobre:
  - Constelações famosas (Órion, Cruzeiro do Sul, Andrômeda, etc.)  
  - Eventos astronômicos (Eclipses, Chuvas de Meteoros, Conjunções)  
  - Planetas do Sistema Solar, incluindo a Lua e o Sol ☀️🌙
- **Tela de Perfil do Usuário**: **Módulo de Edição completo com Galeria de Avatares**, onde é possível adicionar nome, foto, interesses e descrição (com gestão de estado de UI).
- **Tela de Criadores**: destacando o trabalho original de 2022 e a nova versão atualizada.  
- **Tela de Apagar Conta**: com mensagem personalizada e interação dinâmica.  
- **Trilha Sonora Espacial**: o usuário pode ouvir até 5 músicas-tema durante a navegação. 🎶  
- **Pesquisa Integrada com Múltiplas APIs da NASA:** sistema de busca robusto que combina resultados da API APOD e API Images.

---

## 💻 Backend Local e Arquitetura de APIs

O projeto agora possui **backend local em Node.js e Express** para consumir e proteger as chaves de API, seguindo as boas práticas de desenvolvimento.

### Arquitetura Robusta (APOD + Fallback)

O diferencial deste projeto é a arquitetura de **Resiliência e Agregação de Dados**:
1.  **Prioridade APOD (API com Chave):** Tenta buscar a Imagem/Vídeo do Dia.
2.  **Agregação:** Combina o resultado da APOD (se disponível) com a busca da API Images.
3.  **Sistema de Fallback:** Se a APOD falhar (por problemas de rede ou limite de requisições), o sistema **ignora a falha** e garante que os resultados da **API Images (gratuita)** ainda sejam exibidos, assegurando a experiência do usuário.

### Como rodar o projeto localmente

**Pré-requisitos**

- Node.js (recomendo v18+)
- npm
- PostgreSQL rodando localmente
- Conta e chave da NASA (https://api.nasa.gov)

**Backend (API)**

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale dependências:
```bash
npm install
```

3. Crie um arquivo `backend/.env` com as variáveis necessárias (exemplo):
```
API_KEY=SUA_CHAVE_NASA_AQUI
DB_PASSWORD=sua_senha_db
JWT_SECRET=uma_chave_jwt_secreta_e_forte
```

4. Rode o servidor local:
```bash
node server.js
```

O backend ficará disponível em `http://localhost:3000`.

**Se for primeira vez usando o projeto**, prepare o banco de dados (executar no DBeaver ou psql como superuser):
```sql
-- criar usuário e database
CREATE ROLE universe_user WITH LOGIN PASSWORD 'SenhaSeguraAqui';
CREATE DATABASE universe_db OWNER universe_user;

-- conectar ao banco e criar tabela users
\c universe_db
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- permissões necessárias
GRANT USAGE ON SCHEMA public TO universe_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO universe_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO universe_user;
ALTER TABLE public.users OWNER TO universe_user;
ALTER SEQUENCE IF EXISTS public.users_id_seq OWNER TO universe_user;
```

**Frontend (React + Vite)**

1. Abra outro terminal e entre na pasta do frontend:
```bash
cd frontend-react
```

2. Instale dependências:
```bash
npm install
```

3. Rode o servidor de desenvolvimento (Vite):
```bash
npm run dev
```

O frontend normalmente abre em `http://localhost:5173`.

Se ocorrer algum erro com dependências faltando, tente limpar o cache:
```bash
rm -r node_modules package-lock.json
npm install
```

**Inserir usuário manualmente (opcional)**

É preferível usar a rota `/register` do backend (ela faz o hash da senha). Se for inserir direto no banco, gere o hash bcrypt primeiro:

```bash
# modo rápido na pasta backend
node -e "console.log(require('bcryptjs').hashSync('SENHA_PLANA', 10))"
```

Depois insira o hash no banco:
```sql
INSERT INTO users (username, email, password)
VALUES ('nome', 'email@exemplo.com', '$2a$10$...HASH...');
```

**Erros comuns & soluções rápidas**

- `authentication failed` (código `28P01`): verifique se a senha em `backend/.env` (`DB_PASSWORD`) corresponde à senha do usuário `postgres` no PostgreSQL.
- `permission denied` (código `42501`): rode os comandos `GRANT` / `ALTER TABLE ... OWNER TO` indicados na seção de setup do banco.
- `secretOrPrivateKey must have a value`: certifique-se de que `JWT_SECRET` está definido em `backend/.env`.

**Segurança & boas práticas**

- Nunca commite arquivos de ambiente (`.env`) ao repositório. Adicione `backend/.env` ao `.gitignore`.
- Use um usuário dedicado ao aplicativo (`universe_user`) em vez do superuser `postgres`.
- Use senhas fortes e armazene segredos em serviços apropriados (vault, GitHub Secrets) em produção.

---

## 🖌️ Implementações Recentes (Sprint Jan/2026)

Nesta última semana, o foco foi a **"Faxina de UI"** e a robustez da **Lógica de Interface**:
- **Player Musical Customizado**: Implementação de trilha sonora com lógica de `loop`, `auto-play` e controle de visibilidade da barra de áudio (fechamento ao clicar fora).
- **Gestão de Perfil Avançada**: Lógica de rascunho (temporary state) para edição de perfil, garantindo que os dados originais só sejam alterados após a confirmação do usuário.
- **Refatoração para SVG**: Substituição de imagens externas por SVGs internos para ícones como a "Lixeira" e "Avatar Padrão", otimizando o carregamento.
- **Ajustes de UX**: Implementação de fechamento automático de galerias e reset de avatares para uma navegação mais intuitiva.

---

## 🧠 Aprendizados e Desafios  

Cada linha de código representa uma descoberta, e alguns erros de vírgula também! 😅  

Durante o desenvolvimento, aprimorei habilidades como:  
- Manipulação de DOM;
- Estruturação de formulários;
- Navegação dinâmica entre seções;  
- Lógica condicional com `if`;    
- Criação de telas conectadas por JavaScript;  
- Conexão entre Front-end (JavaScript) e Back-end (Node.js/Express).
- Tratamento de Erros: Implementação de try/catch e lógica de fallback para garantir a integridade da aplicação.
- Aprendendo muito sobre **design de interface** e **experiência do usuário (UX)**, usando o **Lovart IA** para gerar imagens temáticas que reforçam o clima espacial. 🌠
- Gestão de Estado de UI: Lógica de salvamento e reset de dados em formulários (Módulo de Perfil).
- A migração para o React tem me ensinado que **organização é clareza**. Lidar com conceitos como `props`, `state` e renderização condicional tem sido uma experiência deliciosa!

---

## 🗺️ Roadmap de Exploração (Próximos Passos)

O Universe é um organismo vivo e a missão continua com as seguintes metas:

1.  **Conexão com Firebase**: Migrar os dados temporários para o **Firestore** e implementar autenticação real.
2.  **Animação de Splash Screen**: Criar uma tela de entrada (radar com barra de progresso) para preparar a imersão do agente.
3.  **Sistema de Notificações (Toasts)**: Substituir alertas simples por notificações amigáveis.
4.  **Página 404 Espacial**: Criar uma tela de "Agente Perdido no Espaço" para rotas não encontradas.
5.  **Agent Badge**: Componente fixo no canto inferior exibindo o avatar e nome do usuário em todas as telas.
   
Tudo isso mantendo o foco na experiência do usuário, e no aprendizado contínuo, 1% melhor por dia. 💙  

---

## 🌠 Evolução e Tecnologias  

O que antes era um site desenvolvido com JS, hoje está evoluindo para uma aplicação **Single Page Application (SPA)** moderna e escalável.

### 🛠️ Stack Tecnológica 
- **React**: Core da aplicação, utilizando Hooks como `useState`, `useEffect` e `useRef` para controle refinado de estados e ciclos de vida.
- **React Router Dom**: Gestão de rotas e navegação fluida entre os componentes da missão.
- **Node.js & Express**: Backend local para consumo seguro e tratamento de falhas das APIs da NASA.
- **SVG Dinâmico**: Ícones customizados via código XML para máxima performance e flexibilidade de estilo.
- **HTML5 & CSS3**: Estilização imersiva com tema espacial e foco em responsividade.

---

## 💙 Créditos e Inspiração  

- Protótipo original criado no **Instituto Federal do Amazonas - Campus Eirunepé (IFAM)** -2022;
- Releitura e desenvolvimento atual por **Jaqueline Gotardi**; 

---

🕵️‍♀️ **Missão em andamento...**  
Mais descobertas estão a caminho. . .

---

**No Universo do código, cada erro é uma nova estrela sendo descoberta.** 💙
