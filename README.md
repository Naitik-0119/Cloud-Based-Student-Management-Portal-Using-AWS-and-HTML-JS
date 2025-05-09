# ☁️ Cloud-Based Student Management Portal Using AWS and HTML/JS

## 📝 Project Description

This project is a **web-based student registration and management system** built using HTML, CSS, and JavaScript on the frontend, with a **serverless backend** powered by AWS Lambda and DynamoDB.

Through RESTful APIs exposed via AWS API Gateway, users can **add, view, and delete student records in real-time**. The solution leverages a **fully cloud-deployed architecture**, ensuring scalability, minimal maintenance, and high availability. All student data is securely stored in DynamoDB, and operations are triggered using AWS Lambda functions—removing the need for a traditional server.

---

## 💻 Features

- 🌐 **Interactive Web Interface** for student registration  
- 📄 **Dynamic Table View** of all registered students  
- 🗑️ **Delete Functionality** to remove students from the interface  
- ☁️ **Serverless Backend** using AWS Lambda  
- 💾 **Persistent Data Storage** with DynamoDB  
- 🔁 **Asynchronous API Integration** using AJAX (jQuery)

---

## ⚙️ Tech Stack

### 🔸 Frontend
- **HTML5**
- **CSS3** (Flexbox & Grid)
- **JavaScript** (with **jQuery** for AJAX calls)

### 🔹 Backend
- **AWS Lambda** (Python)

### 🗃️ Database
- **AWS DynamoDB**

### 🌐 API Integration
- **AWS API Gateway**

---

## 🧪 How It Works

1. **Frontend** sends AJAX requests to REST endpoints.
2. **API Gateway** triggers respective Lambda functions.
3. **Lambda Functions** perform CRUD operations on the DynamoDB table.
4. **Responses** are sent back and dynamically rendered in the UI.

---

## 📌 Prerequisites

- AWS Account with permissions for Lambda, DynamoDB, and API Gateway
- Basic knowledge of HTML/CSS/JS
- (Optional) Live hosting service like S3 or GitHub Pages for the frontend

---

## 🧑‍💻 Author

- **Naitik Kanani (22BCE137)** – B.Tech CSE, Nirma University  
- **Ronak Karia (22BCE144)** – B.Tech CSE, Nirma University  
- **Karm Vyas (22BCE145)** – B.Tech CSE, Nirma University

---

## 📁 Project Structure

```bash
.
project-root/
│
├── index.html           # Frontend user interface
├── scripts.js           # JavaScript for AJAX requests
└── lambda/
    ├── addStudent.py    # Lambda for saving student
    ├── getStudents.py   # Lambda for retrieving all students
    └── deleteStudent.py # Lambda for deleting a student

---

