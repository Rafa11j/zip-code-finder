# Zip Code Finder

O **Zip Code Finder** é um serviço pesquisar endereços através do CEP informado.

## Tecnologias utilizadas

- Node.js
- Typescript
- Express
- Jest
- Axios
- Celebrate

## Configuração do Projeto

Antes de rodar o projeto, será necessário executar os seguintes comandos: 

- Baixar os dependências:
```
  yarn install
```

- Após executar o comando, crie um arquivo `.env` na raiz do projeto seguindo o exemplo do arquivo `.env.sample`.

### Executando aplicação:
```
  yarn start:local
```

### Executando aplicação em ambiente de desenvolvimento:
```
  yarn dev
```

### Build + start:
```
  yarn build

  yarn start:prod
```

### Utilizando o serviço:
- A aplicação por padrão é executada na porta `3333`, porem se desejar pode mudar no arqui `.env` a variável de ambiente `PORT`.

- Buscando o endereço pelo CEP:
```
GET - http://localhost:3333/api/zip-code/{{cep}}
```

## Testes:

### Para executar os testes, rode o seguinte comando:
```
yarn test
```

### Para executar um teste expecífico, passe o caminho do arquivo:
```
yarn test __tests__/zipCode/FindZipCodeService.spec.ts
```