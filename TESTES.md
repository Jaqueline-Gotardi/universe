# 🧪 Relatório de Testes: Módulo de Autenticação (Universe)

## 🎯 Objetivo
Validar os fluxos de criação de conta e autenticação para garantir a integridade e segurança do acesso ao sistema.

## 🛠️ Tecnologias e Ferramentas
- **Ferramenta:** Postman
- **Banco de Dados:** DBeaver para validação SQL
- **Documentação:** Markdown
- **Ambiente:** Localhost:3000

## 🚀 Metodologia
- **Nível de Teste:** Integração (Backend + Banco de dados)
- **Tipo de Teste:** Funcional
- **Técnica:** Caixa Preta

---

### CT-01 - Validar cadastro de um usuário novo 
- **Descrição:** Verificar se o sistema permite a criação de um novo cadastro único.
- **Pré-condições:** Servidor Backend deve estar em execução e banco de dados conectado. 
- **Dados de teste (exemplo):** 
          ```
              { 
                "username": "teste-exemplo",
                 "email": "teste@exemplo.com",
                  "password": "senha123"
                  } ```
- **Passos:** 1. Realizar a requisição POST no endpoint /register,
              2. No corpo (body) da requisição, enviar Json com dados válidos (conforme o exemplo acima). 
- **Resultado Esperado:** 1. Status Code: 201 Created,
                          2. Mensagem: "Usuário cadastrado com sucesso!".
                          3. O registro deve constar no banco de dados.
- **Resultado Obtido:** Conforme o esperado, um novo cadastro foi inserido no Banco de Dados.

- **Evidência:** ![Cadastro Sucesso](./docs/test-evidence/01-cadastro-sucesso.png) 

### CT-02 - Validar cadastro de usuário com credenciais duplicadas 
- **Descrição:** Validar restrição de unicidade para username e e-mail já existentes.
- **Pré-condições:** Servidor Backend deve estar em execução e banco de dados conectados. 
- **Passos:** 1. Repetir a requisição POST em /register com os mesmos dados de teste do CT-01.
- **Resultado Esperado:** Status 409 (conflict), com a mensagem: "Usuário ou email já cadastrado!".

- **Resultado Obtido:** Usuário não foi cadastrado, retornando erro de conflito com dados já existentes.

- **Evidência:** ![Cadastro Erro](./docs/test-evidence/02-cadastro-erro.png) 


### CT-03 - Autenticação de usuário com credenciais válidas
- **Descrição:** Logar com os dados de um cadastro já criado e validar geração de Token.
- **Pré-condições:** Servidor Backend deve estar em execução e banco de dados conectados. 
- **Passos:** 1. Realizar requisição POST em /login
              2. Enviar e-mail e password cadastrado no CT-01
- **Resultado Esperado:** Status 200, com a mensagem: "Login bem-sucedido!" e um Token de acesso deve ser gerado no corpo da resposta.
- **Resultado Obtido:** Login autorizado e Token gerado com sucesso.
- **Evidência:** ![Login Sucesso](./docs/test-evidence/03-login-sucesso.png) 

### CT-04 - Validar login com senha incorreta
- **Descrição:** Verificar bloqueio de acesso para senha divergente da cadastrada.
- **Pré-condições:** Servidor Backend deve estar em execução e banco de dados conectados. 
- **Passos:** 1. Realizar a requisição POST em /login
              2. Enviar e-mail válido e password inválido.
- **Resultado Esperado:** Status 401, com a mensagem: "Senha inválida!" e o Token não deve ser gerado.
- **Resultado Obtido:** O usuário foi barrado com status 401.

- **Evidência:** ![Login Erro](./docs/test-evidence/04-login-erro.png) 

## 🗄️ Validação de Persistência (SQL)
- **Processo:** Após o resultado obtido nos casos de teste(CT-01, CT-02, CT-03, CT-04), foi realizada uma consulta no banco de dados para garantir o registro dos dados em todos os casos.
- **Ferramenta:** DBeaver.
- **Evidência:** ![Dados Dbeaver](./docs/test-evidence/bd-cadastro.png)

> Nota: Os dados visualizados são fictícios, gerados exclusivamente para fins de teste no ambiente de desenvolvimento