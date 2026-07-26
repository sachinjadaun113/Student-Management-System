# Student Management System

A full-stack Student Management System built using Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap 5. The application allows users to manage student records through Create, Read, Update, and Delete (CRUD) operations with a clean and responsive user interface.

---

## Project Objective

The objective of this project is to learn and implement a complete full-stack web application following the MVC architecture while using server-side rendering with EJS.

This project is being developed as part of an internship assignment and follows professional software development practices including Git version control, documentation, and modular project structure.

---

## Tech Stack

### Frontend
- EJS
- HTML5
- CSS3
- Bootstrap 5
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Tools
- Git
- GitHub
- VS Code
- Postman

---

## Installation

```bash
git clone <repository-url>

cd Student-Management-System

npm install

npm start
```

Visit:

```
http://localhost:5000
```

## Default Admin Credentials

Run the following command before logging in:

```bash
node scripts/seedAdmin.js
```

Default Credentials:

- Username: admin
- Password: admin123
```

## Project Structure

Student-Management-System/

├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── dashboardController.js
│   ├── studentController.js          # API Controllers
│   └── studentWebController.js       # Web Controllers
│
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── Admin.js
│   └── Student.js
│
├── routes/
│   ├── api/
│   │   └── studentRoutes.js
│   └── web/
│       ├── authRoutes.js
│       └── pageRoutes.js
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
│   ├── auth/
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

---

## Features

### Admin Authentication
- Secure Admin Login
- Session-based Authentication
- Protected Routes
- Logout Functionality

### Dashboard
- Total Students
- Available Courses
- Today's Date
- Quick Navigation

### Student Management
- Add Student
- View Student List
- View Student Details
- Edit Student
- Delete Student

### REST API
- Create Student
- Get All Students
- Get Student By ID
- Update Student
- Delete Student

### User Interface
- Responsive Bootstrap 5 Design
- Bootstrap Icons
- Professional Dashboard
- Reusable Header, Navbar and Footer


## Completed Features

- Express.js Server Setup
- MongoDB Connection
- MVC Architecture
- Student Schema
- Admin Schema
- Session-based Authentication
- Protected Routes
- RESTful Student CRUD APIs
- Student CRUD Web Module
- Dashboard
- Student Details Page
- Bootstrap Responsive UI
- Bootstrap Icons
- Reusable Layout using EJS Partials
- Git & GitHub Version Control
- API Testing with Postman

## Current Progress

### Backend
- Express.js Setup
- MongoDB Connection
- Mongoose Models
- Student CRUD REST APIs
- Admin Authentication
- Session Management
- Protected Routes
- MVC Architecture

### Frontend
- EJS View Engine
- Bootstrap 5 Integration
- Responsive Dashboard
- Student CRUD Pages
- Student Details Page
- Professional Navigation Bar
- Dynamic Dashboard Cards


## Upcoming Features

- Attendance Management
- Course Management
- Search and Filter
- Academic Information
- MongoDB Atlas Deployment
- Final Documentation

## Author

Sachin Jadaun