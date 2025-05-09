# 📚 Student Management System with AWS Lambda & DynamoDB

This project is a serverless backend system that manages student records using AWS Lambda functions and DynamoDB. It supports creating, reading, and deleting student data through three distinct Lambda functions.

---

## 🛠️ Tech Stack

- **AWS Lambda**
- **Amazon DynamoDB**
- **Python (Boto3)**
- **API Gateway (for REST endpoints)**

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

