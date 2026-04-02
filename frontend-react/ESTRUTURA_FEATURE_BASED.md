# 🚀 Estrutura do Projeto: Organização por Funcionalidades (Feature-Based)

Este guia explica de forma simples como vamos organizar as pastas do projeto **Universe** para que ele cresça de forma organizada e fácil de manter.

---

## 🧠 A Ideia Central

*   **Antes:** Você guardava todas as meias em uma gaveta e todas as camisas em outra, misturando as roupas de todo mundo. (Organização por Tipo de Arquivo)
*   **Agora:** Cada pessoa tem seu próprio guarda-roupa com suas meias, camisas e calças. (Organização por Funcionalidade)

👉 Em vez de:
* components/
* hooks/
* pages/
* styles/
* utils/

---

👉 Você terá:
* features/planets
* features/auth
* features/astronomy
* features/dashboard
* shared/

## 🏗️ Como fica a Estrutura?

Tudo o que pertence a um assunto específico fica junto na mesma pasta (`features`).

```text
src/
│
├── app/
│   ├── App.jsx
│   ├── routes.jsx
│
├── features/
│
│   ├── planets/
│   │   ├── components/
│   │   │   ├── Mars.jsx
│   │   │   ├── Jupiter.jsx
│   │   │   ├── Earth.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── Mars.module.css
│   │   │   ├── planets.module.css
│   │   │
│   │   ├── data/
│   │   │   ├── planetsData.js
│   │   │
│   │   └── index.js
│
│   ├── astronomy/
│   │   ├── components/
│   │   │   ├── Constellations.jsx
│   │   │   ├── MeteorShowers.jsx
│   │   │   ├── SolarEclipse.jsx
│   │   │
│   │   ├── styles/
│   │   │   ├── astronomy.module.css
│   │   │
│   │   └── index.js
│
│   ├── auth/
│   │   ├── components/
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RegisterForm.jsx
│   │   │   ├── ChangePassword.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │
│   │   ├── styles/
│   │   │   ├── auth.module.css
│   │   │
│   │   └── index.js 
│
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── Profile.jsx
│   │   │
│   │   └── index.js
│
├── shared/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── SearchBox.jsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │
│   └── utils/
│       ├── helpers.js
│
├── main.jsx
├── index.css
```

---

## 📂 Onde guardar cada arquivo?

1.  **É algo exclusivo de uma funcionalidade?** (Ex: O componente `Mars.jsx` só faz sentido na tela de planetas).
    *   👉 Vai para `src/features/planets/`

2.  **É algo genérico usado em vários lugares?** (Ex: Um botão `Button.jsx` azul padrão ou um `Card.jsx` de vidro).
    *   👉 Vai para `src/shared/components/`

3.  **É configuração global?** (Ex: Definição de Rotas).
    *   👉 Vai para `src/app/`

---

# 📁 Explicação das pastas

## 📂 app/

Responsável pela configuração geral do app.

* `App.jsx`: estrutura principal
* `routes.jsx`: definição de rotas

----

## 📂 features/

Cada pasta representa uma **funcionalidade isolada**.

### Regra principal:

> Tudo que pertence àquela feature fica dentro dela.

----

## 📂 planets/

Tudo relacionado a planetas.

* Componentes visuais
* Estilos próprios
* Dados específicos

----

## 📂 astronomy/

Eventos e conteúdos astronômicos:

* Constelações
* Eclipses
* Chuvas de meteoros

----

## 📂 auth/

Responsável por autenticação.

* Formulários
* Hooks
* Lógica de login

----

## 📂 dashboard/

Área do usuário.

----

## 📂 shared/

Coisas reutilizáveis no projeto inteiro.

### Aqui entram:

* Botões
* Cards
* Inputs
* Utilitários

👉 Regra importante:

> Se é usado em mais de uma feature → vai para shared

----

# 🎨 Estratégia de estilização

## ✅ CSS Modules

Cada feature controla seus estilos.

Exemplo:

```
Mars.jsx
Mars.module.css
```

----

## ⚠️ Quando usar inline styles

Use apenas quando for dinâmico:

```jsx
style={{
  left: star.left,
  top: star.top,
  width: `${star.size}px`
}}
```

----

# 📦 Arquivo index.js por feature

Usar o `index.js` na raiz da pasta de funcionalidade (feature) é uma técnica muito comum em arquitetura de software chamada Barrel File (Arquivo de Barril)

Ele é como o "Recepcionista" daquela funcionalidade

### Sem `index.js`:

É preciso saber o caminho exato do arquivo 
```tsx
import Mars from '../../features/planets/components/Mars';
import Jupiter from '../../features/planets/components/Jupiter';
```
* tem que ficar atualizando os imports toda vez que mover o arquivo com esse caminho extenso

### Com `index.js`:
```js
export { default as Mercury } from './components/Mercury.jsx'
export { default as Venus } from './components/Venus.jsx'
```

## 💡 Como fica a importação:
```tsx
import { Mercury, Venus, Earth, ... } from './features/planets';
```
----

# 🚀 Como migrar sem quebrar tudo

### 1. Criar pasta features
### 2. Escolher UMA feature (ex: planets)
### 3. Mover arquivos relacionados
### 4. Criar CSS Modules
### 5. Ajustar imports
### 6. Repetir

----

# ⚠️ Erros comuns (evite isso)

❌ Misturar features novamente

❌ Jogar tudo em shared

❌ Criar pastas desnecessárias

❌ Migrar tudo de uma vez

----

# 💡 Resultado esperado

* Código organizado
* Escalabilidade
* Facilidade de manutenção
* Mais profissional

----

## 💡 Por que isso é melhor?

*   **Foco:** Quando você for mexer na "Galeria de Planetas", só precisa abrir a pasta `planets`. Não precisa ficar caçando arquivos em 5 pastas diferentes.
*   **Limpeza:** Evita pastas gigantes com arquivos misturados.
*   **Manutenção:** Se quiser deletar ou mudar uma funcionalidade, está tudo centralizado em um lugar só.

> **Resumo:** Organize por **assunto**. Se é sobre Planetas, coloque na pasta Planetas. Simples assim! 💙