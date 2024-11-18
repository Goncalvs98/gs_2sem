# Frontend - Gerenciamento de Estações de Recarga

Este é o frontend da aplicação, desenvolvido com **React** e **TypeScript**.

## Tecnologias Utilizadas

- React
- TypeScript
- Axios (para chamadas à API)
- CSS puro ou biblioteca de estilização (opcional)

## Estrutura do Diretório

```plaintext
src/
├── components/            # Componentes reutilizáveis (ex.: Navbar, Loader)
├── pages/                 # Páginas principais da aplicação
├── services/              # Lógica de integração com a API
├── types/                 # Tipos definidos para TypeScript
├── App.tsx                # Componente principal
└── index.tsx              # Ponto de entrada
```

## Funcionalidades

- Listar estações de recarga
- Adicionar novas estações
- Editar informações de estações existentes
- Deletar estações
- Validação de formulários

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

Por padrão, o frontend estará disponível em `http://localhost:3001`.

## Configuração da API

Certifique-se de que o backend esteja rodando em `http://localhost:3000`. Você pode alterar o URL base da API no arquivo:

```typescript
// src/services/api.ts
const api = axios.create({
  baseURL: 'http://localhost:3000/api/stations',
});
```

---

## Melhorias Futuras

- Implementar paginação na listagem
- Adicionar autenticação de usuários

## Licença

Este projeto está sob a licença MIT.