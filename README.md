# 🎓 Student Management System

A full-stack **Student Management System** built using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, **EJS**, and **Bootstrap 5**, following the **MVC (Model-View-Controller)** architecture.

The application enables administrators to securely manage **Students, Courses, and Attendance Records** through a modern, responsive web interface. It includes authentication, attendance tracking, attendance summary reports, search & filtering, and RESTful REST APIs.

The project is successfully deployed using **Render** with **MongoDB Atlas** as the cloud database.

---

# 📌 Project Objective

The objective of this project is to design and develop a complete Student Management System while learning full-stack web development using Node.js, Express.js, MongoDB Atlas, EJS, and Bootstrap.

This project was developed as an internship assignment while following professional software development practices such as:

- MVC Architecture
- RESTful APIs
- Authentication & Authorization
- Session Management
- Responsive UI
- Git Version Control
- Project Documentation
- Cloud Database Integration
- Application Deployment

---

# 🚀 Live Demo

### 🌐 Live Website

> **https://sachins-student-management-system.onrender.com**

Replace the above URL with your Render deployment link.

---

# 🛠 Tech Stack

## Frontend

- EJS
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose ODM

## Authentication

- Express Session
- bcrypt

## Deployment

- Render

## Tools

- VS Code
- Git
- GitHub
- MongoDB Atlas
- Postman

---

# ✨ Features

## 🔐 Admin Authentication

- Secure Admin Login
- Session-based Authentication
- Protected Routes
- Logout Functionality

---

## 📊 Dashboard

- Total Students
- Total Courses
- Current Date
- System Information
- Quick Navigation

---

## 👨‍🎓 Student Management

- Add Student
- View Student List
- View Student Details
- Edit Student
- Delete Student
- Search Students
- Filter Students

---

## 📚 Course Management

- Add Course
- Edit Course
- Delete Course
- Search Courses

---

## 📅 Attendance Management

- Mark Daily Attendance
- Attendance History
- Edit Attendance
- Delete Attendance
- Duplicate Attendance Prevention
- Date-wise Attendance
- Roll Number Sorting

---

## 📈 Attendance Summary

- Present Count
- Absent Count
- Total Classes
- Attendance Percentage
- Individual Student Attendance Report
- Date Range Filter
- Search & Filter
- View Complete Student Attendance History

---

## 🔍 Search & Filter

Search functionality is available in:

- Students
- Courses
- Attendance
- Attendance Summary

Supported filters include:

- Roll Number
- Student Name
- Course
- Academic Year
- Class
- Section
- Attendance Status
- Date

---

## 🎨 User Interface

- Responsive Bootstrap 5 Design
- Modern Dashboard
- Responsive Tables
- Bootstrap Icons
- Professional Forms
- Reusable Header
- Reusable Navbar
- Sticky Footer
- Clean & Simple Layout

---

# 📂 Project Structure

```
Student-Management-System/

├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── dashboardController.js
│   ├── studentController.js
│   ├── studentWebController.js
│   ├── courseController.js
│   ├── courseWebController.js
│   ├── attendanceController.js
│   └── attendanceWebController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── Admin.js
│   ├── Student.js
│   ├── Course.js
│   └── Attendance.js
│
├── routes/
│   ├── api/
│   └── web/
│
├── scripts/
│   └── seedAdmin.js
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── views/
│   ├── attendance/
│   ├── auth/
│   ├── courses/
│   ├── partials/
│   ├── students/
│   └── dashboard.ejs
│
├── docs/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Student-Management-System.git
```

### Move into Project

```bash
cd Student-Management-System
```

### Install Dependencies

```bash
npm install
```

### Create `.env`

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
SESSION_SECRET=your_secret_key
```

### Seed Default Admin

```bash
node scripts/seedAdmin.js
```

### Run Development Server

```bash
npm run dev
```

### Run Production Server

```bash
npm run dev
```

Open

```
http://localhost:5000
```

---

# 👤 Default Admin Credentials

After running

```bash
node scripts/seedAdmin.js
```

Use

```
Username : admin
Password : admin123
```

---

# 📡 REST APIs

## Students

- Create Student
- Get All Students
- Get Student By ID
- Update Student
- Delete Student

## Courses

- Create Course
- Get All Courses
- Update Course
- Delete Course

## Attendance

- Mark Attendance
- Get Attendance
- Update Attendance
- Delete Attendance

---

# 📊 Project Status

| Module                | Status        |
|-----------------------|---------------|
| Authentication        | ✅ Completed |
| Dashboard             | ✅ Completed |
| Student Management    | ✅ Completed |
| Course Management     | ✅ Completed |
| Attendance Management | ✅ Completed |
| Attendance Summary    | ✅ Completed |
| Student Reports       | ✅ Completed |
| Search & Filter       | ✅ Completed |
| Responsive UI         | ✅ Completed |
| MVC Architecture      | ✅ Completed |
| REST APIs             | ✅ Completed |
| MongoDB Atlas         | ✅ Completed |
| Render Deployment     | ✅ Completed |
| Documentation         | ✅ Completed |

---

# ☁ Deployment

The application is successfully deployed using:

- ✅ Render (Hosting)
- ✅ MongoDB Atlas (Cloud Database)
- ✅ Environment Variables
- ✅ Express Session
- ✅ Production Build
- ✅ HTTPS Enabled


---

# 👨‍💻 Author

## Sachin Jadaun

**GitHub**

https://github.com/sachinjadaun113

**LinkedIn**

https://www.linkedin.com/in/sachinjadaun113/

---

# 🙏 Acknowledgements

This project was developed as part of an internship to strengthen practical knowledge of full-stack web development using Node.js, Express.js, MongoDB Atlas, EJS, and Bootstrap while following the MVC architecture.

---

# 📄 License

This project is developed for educational, learning, and internship purposes.