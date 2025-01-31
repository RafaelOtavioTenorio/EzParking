# EzParking 🚗

**Sistema para controle de acesso a estacionamentos.**

## 📌 Sobre o Projeto
EzParking é um sistema web desenvolvido para auxiliar no controle de entrada e saída de veículos em estacionamentos. O objetivo é permitir que os usuários possam cadastrar seus veículos e verificar a disponibilidade de vagas em tempo real, além de permitir que os usuários pesquisem por estacionamentos cadastrados próximos de onde querem ir e reservar vagas.

## 🚀 Tecnologias Utilizadas
### **Backend** (API REST):
- C# com .NET 6
- Entity Framework Core
- SQL Server
- Swagger para documentação
- JWT para autenticação

### **Frontend** (Aplicativo Web):
- React com Vite
- TypeScript
- Tailwind CSS
- Axios para consumo da API

## 📷 Demonstração (Screenshots)
Adicione aqui prints do sistema quando tiver pronto.

## 📂 Como Rodar o Projeto
### **1. Clonar o Repositório**
```sh
# Clone o backend
git clone -b develop https://github.com/RafaelOtavioTenorio/EzParkingAPI.git

# Clone o frontend
git clone -b develop https://github.com/RafaelOtavioTenorio/EzParking.git
```

### **2. Configurar o Backend (.NET 6 API)**
```sh
# Navegue para a pasta do backend
cd EzParkingAPI

# Restaurar dependências
dotnet restore

# Rodar as migrações para criar o banco de dados
# (Certifique-se de configurar a string de conexão no appsettings.json)
dotnet ef database update

# Rodar o servidor
dotnet run
```

A API estará rodando em `http://localhost:5000`.

### **3. Configurar o Frontend (React + Vite)**
```sh
# Navegue para a pasta do frontend
cd EzParking

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

O frontend estará rodando em `http://localhost:5173`.

## 📌 Status do Projeto
✅ Estrutura inicial do backend e frontend criada  
✅ API de autenticação configurada  
✅ CRUD de usuários funcional  
🔧 Em desenvolvimento: Cadastro e controle de veículos  
🛠 Planejado: Consulta de vagas em tempo real  

## 📜 Roadmap e Contribuição
Se quiser acompanhar o desenvolvimento ou contribuir, verifique a aba **Issues** e **Projects** aqui no GitHub.

## 📌 Autor
**Rafael Otávio Tenório**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-blue)](https://www.linkedin.com/in/seu-perfil/)  

