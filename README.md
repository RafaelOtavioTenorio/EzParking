# EzParking 🚗
Sistema para controle de acesso a estacionamentos.

## 📌 Sobre o Projeto  
EzParking é um sistema web desenvolvido para auxiliar no controle de entrada e saída de veículos em estacionamentos. O objetivo é permitir que os usuários cadastrem seus veículos, verifiquem a disponibilidade de vagas em tempo real e pesquisem estacionamentos próximos para reservar vagas de forma prática e eficiente.

## 🚀 Tecnologias Utilizadas

**Backend (API REST):**
- C# com .NET 6  
- Entity Framework Core  
- SQL Server  
- Swagger para documentação da API  
- JWT para autenticação  

**Frontend (Aplicativo Web):**
- Next.js (React com Next.js)
- TypeScript  
- Axios para consumo da API  

## 📷 Demonstração (Screenshots)  
![image](https://github.com/user-attachments/assets/0fc5ad9d-22a3-414d-8362-b794ff3ba975)
![image](https://github.com/user-attachments/assets/f30cf597-a21f-4828-a95e-930763bb0f40)
![image](https://github.com/user-attachments/assets/1df3080a-9f75-4d85-aa62-f9f4ffca0cd5)
![image](https://github.com/user-attachments/assets/43739b16-fbb9-4abc-8bdc-0d8512dc2be6)
![image](https://github.com/user-attachments/assets/9ff3de0a-1f31-405e-bd86-175211cf12c2)

## 📂 Como Rodar o Projeto

### 1. Clonar o Repositório
Clone o backend e o frontend:
```bash
# Clone o backend
git clone -b develop https://github.com/RafaelOtavioTenorio/EzParkingAPI.git

# Clone o frontend
git clone -b develop https://github.com/RafaelOtavioTenorio/EzParking.git
```

### 2. Configurar o Backend (.NET 6 API)
Navegue para a pasta do backend:
```bash
cd EzParkingAPI
```

Restaurar dependências:
```bash
dotnet restore
```

Rodar as migrações para criar o banco de dados:
```bash
# Certifique-se de configurar a string de conexão no appsettings.json
dotnet ef database update
```

Rodar o servidor:
```bash
dotnet run
```
A API estará rodando em `http://localhost:5000`.

### 3. Configurar o Frontend (React + Vite)
Navegue para a pasta do frontend:
```bash
cd EzParking
```

Instalar dependências:
```bash
npm install
```

Rodar o projeto:
```bash
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
[LinkedIn](https://www.linkedin.com/in/rafael-otavio-tenorio/)
