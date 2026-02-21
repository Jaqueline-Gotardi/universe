# 🧪 Relatório de Bug Report: Módulo de Cadastro (Universe)

## 🎯 Objetivo: Validar limite de caracteres, formatação de email e integridade do username para garantir que os dados salvos no BD sejam seguros.

### BUG-01: [Cadastro] - Erro de 500 ao enviar username > 50 caracteres

- **Severidade:** Crítico (O servidor cai)
- **Prioridade:** Alta
- **Ambiente:** Postman
- **Descrição:** O campo username só aceita nomes com limite de 50 caracteres, e não exibe uma mensagem de erro.
- **Passos para Reproduzir:** 1. Realizar a requisição POST no endpoint /register, 2. No corpo (body) da requisição, enviar Json com username contendo 51 caracteres, 3. Clicar em “Send”,
- **Resultado Esperado:** Mensagem: “Limite de caracteres atingido!” com status 400 (Bad Request).
- **Resultado Obtido:** A mensagem “Erro interno no servidor. Tente novamente mais tarde” com status 500.
- **Log do Erro (Stack Trace):**  ```
Erro ao inserir dados no banco: error: value too long for type character varying(50)
at /home/jaqueline-gotardi/Área de trabalho/projeto-universe-oficial/backend/server.js:191:24
code: '22001',
severity: 'ERROR',
file: 'varchar.c',
line: '638' ```

- **Evidência:** ![Cadastro Erro](./docs/test-evidence/05-limite-caracteres.png) 

### BUG-02. [Cadastro] – Falha na validação do formato de e-mail (regEx inválida)

- **Severidade:** Alta (pois irá impedir uma futura recuperação de senha, caso seja preciso)
- **Prioridade:** Alta
- **Ambiente:** Postman
- **Descrição:** O sistema permite o cadastro de e-mail contendo apenas o domínio (ex:“@gmail.com”), o que dificulta uma possível recuperação de senha no futuro. 
- **Passos para Reproduzir:** 1. Definir o método como Post no endpoint /register, 2. No corpo (body) da requisição, enviar Json no “e-mail”: “@gmail.com”, 3. Clicar em “Send”
- **Resultado Esperado:** Um aviso: “Defina um e-mail válido”, com status 422 (formato inválido de email)
- **Resultado Obtido:** A mensagem: “Usuário cadastrado com sucesso”, com status 201.
- **Response (201 Created):** ```{ "message": "Usuário cadastrado com sucesso!" }```

- **Evidência:** ![Cadastro Sucesso](./docs/test-evidence/06-cadastro-formato-email.png) 

### BUG-03. [Cadastro] – Username sendo aceito com 100% de caracteres especiais

- **Severidade:** Média
- **Prioridade:** Média
- **Ambiente:** Postman
- **Descrição:** O username está sendo aceito com caracteres especiais e símbolos, permitindo "nomes" inválidos ou potencialmente perigosos (scripts).
- **Passos para Reproduzir:** 1. Definir o método como Post no endpoint /register, 2. No corpo (body) da requisição, enviar Json com "username": "teste-#%&*", 3. Clicar em “Send”
- **Resultado Esperado:** O servidor retorna status 400, com a mensagem: “Username deve conter apenas caracteres alfanúmericos!” 
- **Resultado Obtido:** A mensagem ”Usuário cadastrado com sucesso”, com status 201.
- **Response (201 Created):** ```{ "message": "Usuário cadastrado com sucesso!" }```

- **Evidência:** ![Cadastro sucesso](./docs/test-evidence/07.0-cadastro-username-formato-numerico.png)  

### BUG-04. [Cadastro] – Username sendo aceito como extensão de arquivo

- **Severidade:** Baixa
- **Prioridade:** Baixa
- **Ambiente:** Postman
- **Descrição:** O sistema permite que o username contenha extensões de arquivos,(ex: .png, .jpg), o que futuramente pode causar confusão com upload de fotos.
- **Passos para Reproduzir:** 1. Definir o método como Post no endpoint /register, 2. No corpo (body) da requisição, enviar Json com "username": "teste.png", 3. Clicar em “Send”
- **Resultado Esperado:** O servidor retorna status 400, com a mensagem: “Username deve conter apenas caracteres alfanúmericos!” 
- **Resultado Obtido:** A mensagem ”Usuário cadastrado com sucesso”, com status 201.
- **Response (201 Created):** ```{ "message": "Usuário cadastrado com sucesso!" }```

- **Evidência:** ![Cadastro sucesso](./docs/test-evidence/07.1-cadastro-ursername-formatoImg.png)  