# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🚀 User Management Frontend

This is the **React.js** frontend for the **User Management** application. It allows users to **register, view, update, and delete** user information with a simple and intuitive interface. The app interacts with a backend API for data management.

---

## 📋 **Table of Contents**

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the App](#running-the-app)
- [Key Components](#key-components)
- [API Endpoints](#api-endpoints)
- [Styling with Tailwind CSS](#styles-with-tailwindcss)

---

## 🌟 **Features**

- User registration.
- View user details.
- Update and delete user profiles.
- Form validation.
- **Protected routes** for authenticated users.
- Responsive UI with **Tailwind CSS**.
- Token-based authentication using **Local Storage**.

---

## 🛠 **Tech Stack**

- **Frontend:** React.js, Axios, Tailwind CSS
- **Routing:** React Router
- **Authentication:** JWT (JSON Web Tokens)
- **HTTP Client:** Axios

---

## ⚙️ **Installation**

1. **Clone the repository:**

   ```bash
   git clone https://github.com/safeer239/user-reg-frontend.git

2. **Navigate to project directory:**

        cd user-reg-system

3. **Install dependencies:**

    npm install


## 🛠 **Running the API**

npm run dev

##  📌**Key Components**
RegisterForm.jsx: Handles user registration.
LoginForm.jsx: Manages user login and authentication.
ViewUser.jsx: Displays user information and supports deletion.


## 🛠 **API Endpoints**

Create user - POST  /api/auth/createUser

View user - GET  /api/auth/getUser

update user - PUT  /api/auth/updateUser

delete user - DELETE  /api/auth/deleteUser

## 🛠 **Styling with Tailwind CSS**

Fully responsive UI using Tailwind CSS.