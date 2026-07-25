# Daily Progress

---

## Day 1

### Completed

- Initialized Node.js project
- Installed Express
- Created project structure
- Configured Git repository
- Created README
- Created project documentation
- Initial Git commit

---

## Day 2

### Completed

- Installed MongoDB and Mongoose
- Connected Express with MongoDB
- Created Student Schema
- Created Student Model
- Implemented Create Student API
- Successfully tested API using Postman
- Learned MongoDB CRUD basics

---

## Day 3

### Completed

- Reorganized project structure
- Moved backend files to project root
- Adopted Express + EJS architecture
- Created folders for Views and Public
- Created API and Web route structure
- Updated project documentation
- Prepared project for frontend development

---

## Next Tasks

- Configure EJS
- Create Dashboard
- Build Student Listing Page
- Implement Get Students API

## Day 4 - Backend CRUD Completed

### Objectives

* Complete all Student CRUD APIs.
* Understand the complete request flow between Express, Mongoose, and MongoDB.

### Completed Tasks

* Implemented **Get All Students API**.
* Implemented **Get Student By ID API**.
* Implemented **Update Student API**.
* Implemented **Delete Student API**.
* Tested all CRUD operations successfully using Postman.
* Verified database changes in MongoDB.
* Learned the difference between MongoDB `_id` and Express `req.params.id`.
* Understood how `find()`, `findById()`, `findByIdAndUpdate()`, and `findByIdAndDelete()` work.
* Discussed the implementation of the search feature using query parameters (`req.query`).

### Current Project Status

* Project Setup 
* MongoDB Connection 
* Student Schema 
* Student CRUD APIs 
* API Testing 
* EJS Setup 

### Next Plan

* Build the frontend using EJS and Bootstrap.
* Display students in a table.
* Connect frontend pages with backend APIs.
* Implement search and filter functionality.

## Day 5 – EJS Frontend Development (UI)

### Completed

- Integrated Bootstrap with EJS project.
- Created reusable EJS partials:
  - Header
  - Navbar
  - Footer
- Designed Admin Login page.
- Designed Dashboard page.
- Designed Student List page.
- Designed Add Student page.
- Designed Edit Student page.
- Designed Student Details page.
- Added Bootstrap Icons.
- Added custom CSS for modern UI.
- Planned dynamic integration with MongoDB.

### Learned

- EJS include() for reusable layouts.
- Bootstrap components (Cards, Forms, Tables, Buttons).
- Bootstrap Icons.
- Difference between static UI and dynamic EJS rendering.
- Why express.urlencoded() is required for HTML forms.

### Next Plan

- Connect EJS pages with controllers.
- Display real MongoDB data.
- Complete Admin Login authentication.
- Make CRUD operations work from the frontend.

# Day 6 Progress Report

**Date:** 25 July 2026

## Work Completed

### 1. Admin Authentication
- Created Admin model.
- Created seedAdmin.js to generate default admin credentials.
- Implemented password hashing using bcrypt.
- Added default admin login:
  - Username: admin
  - Password: admin123

### 2. Session Management
- Installed and configured express-session.
- Added session middleware in server.js.
- Implemented session creation after successful login.
- Implemented session destruction on logout.

### 3. Authentication Module
- Created authController.js.
- Implemented admin login functionality.
- Implemented logout functionality.
- Verified passwords using bcrypt.compare().

### 4. Authentication Routes
- Created authRoutes.js.
- Added POST /login route.
- Added GET /logout route.

### 5. Route Protection
- Created authMiddleware.js.
- Protected dashboard and student management pages.
- Redirect unauthenticated users to the login page.

### 6. Dashboard
- Created dashboardController.js.
- Displayed total number of students using Student.countDocuments().
- Added database connection status card.
- Added system status card.

### 7. Student List Integration
- Connected Student List page with MongoDB.
- Retrieved student records using Student.find().
- Displayed student data dynamically in the EJS table.
- Added View, Edit and Delete action buttons.

### 8. MVC Improvements
- Separated Web routes and API routes.
- API routes return JSON responses.
- Web routes render EJS pages.
- Improved project structure according to MVC architecture.

## Files Created
- models/Admin.js
- controllers/authController.js
- controllers/dashboardController.js
- middleware/authMiddleware.js
- routes/web/authRoutes.js
- scripts/seedAdmin.js

## Files Updated
- server.js
- controllers/studentController.js
- routes/web/pageRoutes.js
- routes/api/studentRoutes.js
- views/dashboard.ejs
- views/students/index.ejs

## Current Status
- Student CRUD API completed.
- Admin authentication completed.
- Session management completed.
- Protected routes implemented.
- Dynamic dashboard completed.
- Student list integrated with MongoDB.
- MVC architecture improved.

## Next Day Plan
- Complete Add Student functionality.
- Complete Edit Student functionality.
- Complete View Student Details page.
- Complete Delete Student functionality.
- Add success and error messages.
- Final testing and bug fixing.
- Prepare project for deployment.