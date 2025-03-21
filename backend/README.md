# Backend do TCC
Este repositório contém o backend do meu TCC, desenvolvido com Node.js, Express, Prisma e Docker. Abaixo estão as instruções para configurar e rodar o projeto.

## Pré-requisitos
Antes de começar, certifique-se de ter instalado:

- Node.js (v18 ou superior)
- Docker (para rodar o banco de dados)
- Docker Compose (v3.8 ou superior)

## Configuração do ambiente
O projeto utiliza um arquivo `.env` para configurar variáveis de ambiente, como a URL do banco de dados. Crie um arquivo .env na raiz do projeto e adicione o seguinte conteúdo:

### 1. Renomeie o Arquivo `.env.example`

```bash
mv .env.example .env
```

### 2. Configure as Variáveis de Ambiente
Abra o arquivo .env e preencha as variáveis de ambiente conforme necessário. Aqui está um exemplo do conteúdo do arquivo:

```env
DATABASE_URL="postgres://teste:teste@localhost:5432/comunicacao_interna"
```

Formato: `postgres://USUARIO:SENHA@HOST:PORTA/BANCO_DE_DADOS`

- USUARIO: Nome do usuário do banco de dados (no caso, *teste*).
- SENHA: Senha do banco de dados (no caso, *teste*).
- HOST: Endereço do banco de dados (no caso, *localhost*).
- PORTA: Porta do banco de dados (no caso, *5432*).
- BANCO_DE_DADOS: Nome do banco de dados (no caso, *comunicacao_interna*).

## Como Rodar o Projeto
### 1. Clone o Repositório

```bash
git clone https://github.com/gustavorezin/tcc-sistema-comunicacao-interna.git
cd tcc-sistema-comunicacao-interna/backend
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Suba o Banco de Dados com Docker Compose
O banco de dados PostgreSQL já está configurado para rodar em um container Docker. Para iniciá-lo, execute:

```bash
docker compose up -d
```

Isso irá:

- Criar um container PostgreSQL.
- Configurar o banco de dados `comunicacao_interna`.
- Mapear a porta 5432 do container para a porta 5432 da sua máquina.

Você pode verificar se o banco de dados está rodando com:

```bash
docker ps
```

### 4. Configure o Prisma
O Prisma é usado para gerenciar o banco de dados. Para configurá-lo:

#### Gere o Client do Prisma:

O Prisma precisa gerar o client para interagir com o banco de dados. Execute:

```bash
npm run prisma:generate
```

#### Execute as Migrações:
As migrações são usadas para criar e atualizar as tabelas no banco de dados. Para criar a primeira migração, execute:

```bash
npm run prisma:migrate
```

Isso irá:

- Criar uma nova migração com o nome init.
- Aplicar as mudanças no banco de dados.
- Gerar as tabelas definidas no schema do Prisma.

#### Visualizar o Banco de Dados com Prisma Studio:
O Prisma Studio é uma interface gráfica para visualizar e manipular o banco de dados. Para abrir:

```bash
npx prisma studio
```

#### Resetar o Banco de Dados:
Se precisar resetar o banco de dados e aplicar todas as migrações novamente:

```bash
npx prisma migrate reset
```

### 5. Inicie o Servidor
Para rodar o servidor em modo de desenvolvimento, use:

```bash
npm start
```

O servidor estará rodando em `http://localhost:5000`.
