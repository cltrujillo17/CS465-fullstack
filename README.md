# 🌴 Travlr Getaways – Full Stack Web Application

This project is a full stack travel booking application built using the **MEAN stack**:

- MongoDB  
- Express  
- Angular  
- Node.js  

It includes:

- A customer-facing website  
- An admin Single Page Application (SPA)  
- RESTful API integration  
- Secure login authentication  

---

## 🏗️ Architecture

This application uses two different frontend approaches:

### Customer Site (Express + Handlebars)

- Server-side rendered HTML  
- Pages are built on the server and sent to the browser  
- Focused on simplicity and accessibility for travelers  

### Admin Site (Angular SPA)

- Client-side rendered interface  
- Uses API calls instead of full page reloads  
- Provides dynamic functionality for managing trips  

The backend uses **MongoDB (NoSQL)** because travel data is flexible and evolves over time.  
MongoDB allows storing structured trip data in JSON-like documents without rigid schemas.

---

## ⚙️ Functionality

### JSON vs JavaScript

JSON is a data format, not a programming language.

In this application:

- Angular sends and receives **JSON**  
- Express processes API requests  
- MongoDB stores trip data in BSON (JSON-like format)  

JSON connects the frontend and backend by acting as the shared data structure.

---

### Refactoring & Reusability

During development, several improvements were made:

- Trip display logic was moved into a reusable **Trip Card component**  
- API calls were centralized using a **Trip Data Service**  
- Backend logic was separated into controllers  

Reusable UI components made the app easier to maintain and update without duplicating code.

---

## 🧪 Testing

Testing focused on verifying API communication:

| Method | Purpose |
|--------|--------|
| GET    | Retrieve trips |
| POST   | Add new trips |
| PUT    | Update existing trips |

Testing tools included:

- Angular forms  
- Browser developer tools  
- API response validation  

After implementing authentication, additional checks ensured:

- Only authorized users could modify data  
- Public users could still view trips  

This demonstrated proper endpoint protection and role separation.

---

## 🚀 Reflection

This course strengthened real-world full stack development skills, including:

- Building REST APIs with Express  
- Creating dynamic frontends with Angular  
- Connecting systems using JSON  
- Managing data with MongoDB  
- Implementing secure authentication  

Developing this application provided hands-on experience in designing scalable web systems and improved readiness for professional software development roles.

---
