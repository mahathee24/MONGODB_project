# 📝 TO DO LIST Web Application

This is a simple and efficient web-based To-Do List application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It allows users to add and delete tasks in real-time through a user-friendly interface.

---

## 🚀 Technologies Used

### 🖥️ Frontend
- **React.js** (with Vite)
- HTML, CSS
- React Icons

### 🔧 Backend
- **Node.js**
- **Express.js**

### 🗄️ Database
- **MongoDB Atlas** (cloud-hosted NoSQL database)
- **Mongoose** ODM (Object Data Modeling)

---
## 📁 Project Structure

MongoProject/ ├── Server/ # Backend │ ├── Models/ │ └── index.js ├── Todo_Mongo/ # Frontend │ └── src/ │ ├── components/ │ └── App.jsx └── README.md



## ⚙️ How to Run the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/mahathee24/MONGODB_project.git
cd MONGODB_project


2. Setup Backend (Server)

cd Server
npm install

✅ Create a file .env (optional) or directly configure your MongoDB connection in index.js:


mongoose.connect("your-mongodb-atlas-uri")

Start the backend server:

node index.js
# or
npx nodemon index.js
Server runs on: http://localhost:3002


3. Setup Frontend (React App)

cd ../Todo_Mongo
npm install
npm run dev
Frontend runs on: http://localhost:5173
````
🔑 Features

✅ Add tasks

🗑️ Delete tasks

🎯 Real-time task updates

🌐 MongoDB Atlas cloud integration

💻 Responsive UI with React


```
````
🙌 Authors

Mahathee K

Prateeksha

📌 License

This project is developed as part of the NoSQL (IS3301-1) course under NMAM Institute of Technology.


Let me know if you'd like to personalize any part or add badges like `![React](...)`, or deployment instructions (if you host it)!







