# MERN Simple Tasks App

A simple **MERN** (MongoDB, Express, React, Node.js) application for managing tasks.  
The project is split into **backend** (Node.js/Express) and **frontend** (React), both containerized using Docker for easy deployment.

---

## 🚀 Features
- **Frontend**: React.js application served with Nginx
- **Backend**: Node.js + Express API
- **Database**: MongoDB (you can run it as a container or use a cloud service)
- **Environment-based configuration** using `.env`
- **Dockerized setup** for consistent deployment

---

## 📂 Project Structure
```
mern-simple-tasks/
│
├── backend/        # Node.js API
│   ├── .env        # Backend environment variables
│   ├── Dockerfile
│   └── ...
│
├── frontend/       # React frontend
│   ├── .env        # Frontend environment variables
│   ├── Dockerfile
│   └── ...
│
└── README.md
```

---

## ⚙️ Environment Variables

### **Backend `.env`**
Example:
```
PORT=5000
MONGO_URI=mongodb://mongo:27017/tasksdb
JWT_SECRET=your_jwt_secret
```

### **Frontend `.env`**
Example:
```
REACT_APP_API_URL=http://localhost:5000
```

**Notes:**
- Never commit real `.env` files to GitHub.
- Commit a `.env.example` instead for reference.

---

## 🐳 Docker Setup

### **1. Build the Frontend**
```bash
cd frontend
docker build -t mern-frontend .
```

### **2. Build the Backend**
```bash
cd backend
docker build -t mern-backend .
```

### **3. Run Containers**
**Frontend** (Runs on port `3000`):
```bash
docker run -d --name frontend -p 3000:80 mern-frontend
```

**Backend** (Runs on port `5000`):
```bash
docker run -d --name backend -p 5000:5000 mern-backend
```

---

## 📦 Docker Hub Push

### **1. Tag the images**
```bash
docker tag mern-frontend <dockerhub-username>/mern-frontend:latest
docker tag mern-backend <dockerhub-username>/mern-backend:latest
```

### **2. Push to Docker Hub**
```bash
docker push <dockerhub-username>/mern-frontend:latest
docker push <dockerhub-username>/mern-backend:latest
```

---

## 🛠 Development Without Docker
**Backend**
```bash
cd backend
npm install
npm start
```

**Frontend**
```bash
cd frontend
npm install
npm start
```

---

## 📜 License
This project is licensed under the MIT License.
