# Resource Manager

A **full-stack resource management system** that allows users to **add, edit, delete, and view resources**. The project follows a **RESTful API architecture**, with a **Next.js frontend** and a **Node.js backend** using **Express.js** and **PostgreSQL**.

## 🌐 Live Demo

🔗 **Frontend (Vercel):** [Resource-Manger-Frontend](https://resource-manager-frontend-three.vercel.app/)  
🔗 **Backend (Render):** [Resource-Manager-Backend](https://resouce-manager-backend.onrender.com/resources/)  

---

## 📌 Features

- ✅ **Create, Read, Update, Delete (CRUD) operations** on resources  
- ✅ **RESTful API** built with Express.js & PostgreSQL  
- ✅ **Frontend UI with Next.js, React Query, and Bootstrap**  
- ✅ **Deployed on Render (Backend) and Vercel (Frontend)**  
- ✅ **Handles database connections with Sequelize ORM**  

---

## 🛠 Tech Stack

### Backend  
- Node.js with Express.js  
- Sequelize ORM (connected to PostgreSQL)  
- PostgreSQL (Neon DB)  
- CORS Handling for API security  
- Deployed on Render  

### Frontend  
- Next.js (React Framework)  
- React Query for API Calls  
- Axios for HTTP Requests  
- Bootstrap for UI Styling  
- Deployed on Vercel  

---

## **🖼 Architecture Diagram**
![Untitled diagram-2025-03-27-033607](https://github.com/user-attachments/assets/242b677f-ecd6-4da8-998b-552a61c7443d)

---

## **📖 System Architecture**

The system follows a **modular structure** with clear separation of concerns between **frontend, backend, and database**.

### **1️⃣ Database - PostgreSQL**
- Stores **resources** in a table.  
- Executes queries via **Sequelize ORM**.  

### **2️⃣ Backend - Express.js (Hosted on Render)**
- **Routes (Express.js)** handle API requests.  
- **Controllers** process the requests and call database queries.  
- **Sequelize ORM** interacts with the PostgreSQL database.  
- Sends responses to the frontend.  

### **3️⃣ Frontend - Next.js (Hosted on Vercel)**
- **UI Components** display resource data.  
- Uses **React Query** for efficient data fetching.  
- **Axios** handles API calls to the backend.  

### **📌 Data Flow**
1. The frontend (Next.js) makes API requests via **Axios**.  
2. The backend (Express.js) receives the request and processes it using **controllers**.  
3. The backend interacts with the **PostgreSQL database** via **Sequelize ORM**.  
4. The database executes the queries and returns the result.  
5. The backend sends the response back to the frontend.  
6. The frontend updates the UI using **React Query**.  

---

## **📦 Installation & Setup**
1. Clone the repository:  
   ```bash
   git clone https://github.com/harshita795/resource-manager-frontend.git
   cd resource-manager-frontend
2. Install dependencies:
   ```bash
   npm install
3. Set up environment variables (.env file):
   ```bash
   DATABASE_URL=your_database_url
4. Run the backend:
   ```bash
   npm start
6. Run the frontend:
   ```bash
   npm run dev
   ```

---

## **📡 API Endpoints**

| Method | Endpoint              | Description          |
|--------|-----------------------|----------------------|
| GET    | `/api/resources`      | Fetch all resources |
| GET    | `/api/resources/:id`  | Fetch resource by ID |
| POST   | `/api/resources`      | Add a new resource  |
| PUT    | `/api/resources/:id`  | Update a resource   |
| DELETE | `/api/resources/:id`  | Delete a resource   |

---

##🛠️ **Deployment**

- **Frontend** → Hosted on Vercel
- **Backend** → Hosted on Render
- **Database** → PostgreSQL on Render

---









