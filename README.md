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
├── insert_std_data.py     # Lambda for inserting student data
├── delete_std_data.py     # Lambda for deleting student data
├── get_student_details.py # Lambda for fetching student records
├── README.md              # Project documentation
