Backend em TypeScript com Arquitetura MVC
Este projeto é um backend desenvolvido em TypeScript seguindo a arquitetura Model-View-Controller. Ele utiliza PostgreSQL como banco de dados relacional e oferece funcionalidades de autenticação.

Estrutura do Projeto
Controllers: Responsáveis por receber e processar as requisições HTTP, interagir com os serviços e retornar as respostas apropriadas.
Routes: Definem as rotas da aplicação, conectando as requisições às funções dos controladores.
Models: Representam as tabelas do banco de dados e suas respectivas estruturas, funcionando como o mapeamento das entidades.
Repositories: Realizam operações diretamente no banco de dados, como consultas, inserções, atualizações e exclusões.
Services: Contêm a lógica de negócios, como validações, regras específicas e orquestração das interações entre repositórios e controladores.
Como Executar o Projeto
Clonar o Repositório: Baixe o código-fonte para sua máquina local.
Instalar Dependências: Configure o ambiente instalando todas as bibliotecas necessárias.
Iniciar o Servidor: Execute o comando adequado para iniciar o servidor local.
Funcionalidades Disponíveis
Autenticação
Cadastro de Usuário
Permite criar uma conta no sistema.
Durante o cadastro, os dados do usuário são salvos no banco de dados e a senha é armazenada de forma criptografada para maior segurança.
Retorna os dados do usuário recém-criado, excluindo informações sensíveis como a senha.
Login de Usuário
Permite que usuários façam login no sistema utilizando email e senha.
Após a autenticação, é gerada uma sessão ou token que permite ao usuário acessar áreas protegidas da aplicação.
Retorna os dados do usuário autenticado, sem incluir a senha, e informações sobre a sessão ativa.
Este projeto foi estruturado com foco em organização, segurança e escalabilidade, garantindo uma base sólida para futuras implementações e melhorias.
