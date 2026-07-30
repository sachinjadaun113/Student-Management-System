# 🎓 Student Management System

A full-stack **Student Management System** built using **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **EJS**, and **Bootstrap 5** following the **MVC (Model-View-Controller)** architecture.

The application enables administrators to securely manage students, courses, and attendance records through a modern, responsive web interface.

---

# 📌 Project Objective

The objective of this project is to design and develop a complete Student Management System while learning full-stack web development using the MERN ecosystem (without React).

This project was developed as an internship assignment while following professional software development practices such as:

* MVC Architecture
* RESTful APIs
* Authentication & Authorization
* Session Management
* Responsive UI
* Git Version Control
* Project Documentation

---

# 🚀 Live Demo

**Website**

> Coming Soon (Deployment Scheduled)

```
https://your-live-project-link.com
```

---

# 📸 Screenshots

> Screenshots will be added after deployment.

* Login Page
* Dashboard
* Student Management
* Course Management
* Attendance History
* Attendance Summary
* Student Details

---

# 🛠 Tech Stack

## Frontend

* EJS
* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* JavaScript

## Backend

* Node.js
* Express.js

## Database

### Development

* MongoDB

### Production (Coming Soon)

* MongoDB Atlas

## Authentication

* Express Session
* bcrypt

## Tools

* VS Code
* Git
* GitHub
* Postman

---

# ✨ Features

## Admin Authentication

* Secure Admin Login
* Session-based Authentication
* Protected Routes
* Logout

---

## Dashboard

* Total Students
* Total Courses
* System Information
* Quick Navigation

---

## Student Management

* Add Student
* View Student List
* View Student Details
* Edit Student
* Delete Student
* Search Students
* Filter Students

---

## Course Management

* Add Course
* Edit Course
* Delete Course
* Search Courses

---

## Attendance Management

* Mark Daily Attendance
* Attendance History
* Edit Attendance
* Delete Attendance
* Duplicate Attendance Prevention
* Date-wise Attendance
* Roll Number Sorting

---

## Attendance Summary

* Present Count
* Absent Count
* Total Classes
* Attendance Percentage
* Individual Student Attendance Report
* Date Range Filter
* Search & Filter

---

## Search & Filters

Search functionality is available in:

* Students
* Courses
* Attendance
* Attendance Summary

Supported filters include:

* Roll Number
* Student Name
* Course
* Academic Year
* Class
* Section
* Attendance Status
* Date

---

## User Interface

* Responsive Bootstrap 5 Design
* Professional Dashboard
* Responsive Tables
* Bootstrap Icons
* Modern Forms
* Reusable Header
* Reusable Navbar
* Reusable Footer

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
├── server.js
└── README.md
```

---

# ⚙ Installation

Clone the repository

```bash
git clone <repository-url>
```

Move into the project

```bash
cd Student-Management-System
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

Run the application

```bash
npm start
```

Visit

```
http://localhost:5000
```

---

# 👤 Default Admin Credentials

Before logging in, seed the default administrator.

```bash
node scripts/seedAdmin.js
```

Default Credentials

```
Username : admin
Password : admin123
```

---

# 📡 REST APIs

### Students

* Create Student
* Get All Students
* Get Student By ID
* Update Student
* Delete Student

### Courses

* Create Course
* Get All Courses
* Update Course
* Delete Course

### Attendance

* Mark Attendance
* Get Attendance
* Update Attendance
* Delete Attendance

---

# 📊 Current Project Status

| Module                | Status      |
| --------------------- | ----------- |
| Authentication        | ✅ Completed |
| Dashboard             | ✅ Completed |
| Student Management    | ✅ Completed |
| Course Management     | ✅ Completed |
| Attendance Management | ✅ Completed |
| Attendance Summary    | ✅ Completed |
| Search & Filter       | ✅ Completed |
| Responsive UI         | ✅ Completed |
| MVC Architecture      | ✅ Completed |
| REST APIs             | ✅ Completed |
| Documentation         | ✅ Completed |
| MongoDB Atlas         | ⏳ Pending   |
| Deployment            | ⏳ Pending   |

---

# 🚀 Deployment (To Be Completed)

The application is prepared for deployment.

Planned deployment tasks:

* Configure MongoDB Atlas
* Update Environment Variables
* Deploy Application
* Verify Production Build
* Add Live Demo Link
* Upload Final Screenshots

---

# 🔮 Future Enhancements

* Export Attendance to PDF
* Export Attendance to Excel
* Student Profile Images
* Email Notifications
* Password Reset
* Role-based Authentication
* Analytics Dashboard
* Mobile Responsive Improvements

---

# 👨‍💻 Author

**Sachin Jadaun**

LinkedIn:https://www.linkedin.com/in/sachinjadaun113/?utm_source=chatgpt.com

GitHub:https://github.com/sachinjadaun113?utm_source=chatgpt.com

---

# 📄 License

This project was developed for educational and internship purposes.
