# Backend - Gerenciamento de Estações de Recarga

Este é o backend da aplicação, desenvolvido com **Node.js** e **Express**, utilizando **SQLite** como banco de dados.

## Tecnologias Utilizadas

- Node.js
- Express
- SQLite
- Sequelize (opcional para ORM)
- Dotenv (para variáveis de ambiente)

## Estrutura do Diretório

```plaintext
src/
├── controllers/          # Lógica das rotas e regras de negócio
├── models/               # Modelos para o banco de dados
├── routes/               # Definição das rotas da API
├── config/               # Configurações (ex.: conexão com o banco)
└── app.js                # Configuração principal do servidor
```

## Rotas da API

### Base URL

`http://localhost:3000/api/stations`

### Endpoints

- `GET /` - Lista todas as estações
- `POST /` - Adiciona uma nova estação
- `PUT /:id` - Atualiza uma estação existente
- `DELETE /:id` - Deleta uma estação

---

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente criando um arquivo `.env` na pasta `src/config` com o seguinte conteúdo:

   ```plaintext
   PORT=3000
   DATABASE_PATH=./src/config/database.sqlite
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

Por padrão, o servidor estará rodando em `http://localhost:3000`.

## Banco de Dados

O SQLite será automaticamente configurado ao iniciar o servidor. O arquivo de banco de dados será criado no caminho especificado em `DATABASE_PATH`.

---

## Melhorias Futuras

- Adicionar suporte a autenticação e autorização
- Melhorar logs e tratamento de erros

## Licença

Este projeto está sob a licença MIT.