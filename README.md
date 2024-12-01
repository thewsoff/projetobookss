# Backend em TypeScript com Arquitetura MVC

Este projeto é um backend desenvolvido em TypeScript, estruturado segundo a arquitetura MVC (Model-View-Controller). Ele utiliza o banco de dados PostgreSQL e implementa funcionalidades de autenticação.

---

## 📂 Estrutura do Projeto

- **Controllers**: Responsáveis por gerenciar as requisições HTTP, processando dados e retornando respostas adequadas.
- **Routes**: Definem as rotas e conectam as requisições às funções correspondentes nos controladores.
- **Models**: Representam as entidades e tabelas no banco de dados.
- **Repositories**: Gerenciam as interações diretas com o banco de dados, incluindo consultas e manipulações de dados.
- **Services**: Contêm a lógica de negócios, validando e aplicando regras às operações realizadas.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório para sua máquina local.
2. Instale todas as dependências necessárias para o funcionamento do projeto.
3. Inicie o servidor para que ele fique disponível para requisições.

---

## 📌 Funcionalidades Disponíveis

### 🔑 Autenticação

#### Cadastro de Usuário
- Permite criar um novo usuário no sistema.
- Durante o processo, a senha fornecida é criptografada para garantir a segurança.
- Retorna os dados do usuário criado, exceto informações sensíveis, como a senha.

#### Login de Usuário
- Realiza a autenticação de um usuário já registrado no sistema.
- Após a autenticação, uma sessão é criada e um token de acesso é fornecido.
- Retorna os dados do usuário autenticado e detalhes da sessão, excluindo a senha.

---

## 🛠️ Tecnologias Utilizadas

- TypeScript, para uma tipagem mais segura e robusta.
- Node.js, como plataforma para execução do backend.
- PostgreSQL, para armazenamento de dados.
- Ferramentas de criptografia para segurança de credenciais.
- Frameworks e bibliotecas modernas para facilitar a criação de APIs.

---


## 📝 Licença

By : Matheus dos Santos Souza

