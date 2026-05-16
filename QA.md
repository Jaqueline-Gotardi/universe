# 🧪 Painel de Controle de Qualidade (QA) - Universe

Este documento registra como garantimos que a nave **Universe** voe sem falhas. Aqui documento meus testes, descobertas de bugs e melhorias de segurança.

---

## 🚀 O que foi testado?

### 🛡️ Módulo de Cadastro (Prevenção de Erros)
Focamos em "blindar" a entrada de dados para que o sistema não aceite lixo e não quebre se o servidor falhar.

| Caso de Teste | O que foi feito? | Resultado |
| :--- | :--- | :--- |
| **Limpeza de Espaços** | Uso do `.trim()` nos campos de Nome, E-mail e Senha. | ✅ **Sucesso:** Espaços vazios não são mais salvos no banco. |
| **Confirmação de Senha** | Comparamos o campo "Senha" com "Confirmar Senha". | ✅ **Sucesso:** O sistema avisa se as senhas forem diferentes. |
| **Resiliência de Rede** | Simulamos o servidor enviando dados errados ou caindo. | ✅ **Sucesso:** O sistema não trava e mostra um aviso amigável. |
| **Botão de Envio** | Travamos o botão (`isSubmitting`) durante o envio. | ✅ **Sucesso:** Impede que o usuário clique várias vezes e duplique o cadastro. |

---

## ☄️ Relatório de "Meteoros" (Bugs Encontrados)

Como futura QA, meu trabalho (Jaqueline) é caçar erros. Aqui estão os bugs que identifiquei e como eles afetam o sistema:

1. **Bug Crítico (Limite de Nome):** Se digitar um nome gigante (> 50 letras), o servidor cai (Erro 500). 
   - *Status:* **Aguardando correção no Backend.**
2. **Bug de E-mail (Formato):** O sistema aceita e-mails sem nome (ex: `@gmail.com`). 
   - *Status:* **Identificado (Planejando Regex mais forte).**
3. **Bug de Caracteres:** O nome de usuário aceita símbolos estranhos e extensões de arquivo (ex: `teste.png`).
   - *Status:* **Em observação.**

---

## 🛠️ Ferramentas da Tripulação
Para garantir essa qualidade, eu utilizo:
- **Postman:** Para testar as "engrenagens" (API) sem precisar da tela.
- **DBeaver:** Para olhar dentro do banco de dados e ver se os dados entraram limpos.
- **React Toastify:** Para avisar o usuário de forma elegante quando algo sai errado.
- **Chrome DevTools:** Para monitorar o tráfego da nave entre o computador e o servidor.

---


> *"Qualidade não é um ato, é um hábito de Agente Estelar."* 🌌