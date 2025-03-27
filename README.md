# Resource Manager

A **Full-Stack Resource Management Application** built using:  
- **Backend:** Node.js, Express.js, PostgreSQL (via Sequelize ORM)  
- **Frontend:** Next.js, React Query, Axios, Bootstrap  
- **Deployment:** **Backend on Render, Frontend on Vercel**  

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

```mermaid
graph TD;
  A[User] -->|Interacts with| B[Frontend (Next.js)]
  B --> |Sends API Request| C[Backend (Express.js)]
  C --> |Queries| D[PostgreSQL Database]
  D --> |Returns Data| C
  C --> |Sends Response| B
  B --> |Displays Data| A

  subgraph Frontend (Vercel)
    B1[UI Components] --> B2[React Query]
    B2 --> |API Calls| B3[Axios]
    B3 --> |Communicates with API| C
  end

  subgraph Backend (Render)
    C1[Express Routes] --> C2[Controllers]
    C2 --> C3[Sequelize ORM]
    C3 --> |Executes Queries| D
  end

  subgraph Database (PostgreSQL)
    D1[Resources Table] 
    D2[Users Table] 
    D3[Logs Table]
  end

