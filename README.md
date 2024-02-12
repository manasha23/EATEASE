
# MERN Stack Project

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) project that includes both frontend and backend implementations.

## Project Overview

This project consists of a frontend application built with React.js and a backend API built with Node.js and Express.js. It utilizes MongoDB as the database for storing data.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

Follow the steps below to run the project:

1. **Setting up the Backend:**

   - Navigate to the backend folder:
     ```
     cd backend
     ```
   
   - Create a config file `config.env` in the backend folder and add the following variables:
     ```
     PORT=5000
     FRONTEND_URL=http://localhost:3000
     ```

   - Install backend dependencies:
     ```
     npm install
     ```

2. **Setting up the Frontend:**

   - Navigate to the frontend folder:
     ```
     cd frontend
     ```

   - Install frontend dependencies:
     ```
     npm install
     ```

3. **Running the Application:**

   - Start the backend server:
     ```
     npm start
     nodemon sever.js
     ```

   - Start the frontend development server:
     ```
     npm run dev
     ```

   The frontend server will run on port 5173, and the backend development server will run on port 3000.

## Project Structure

The project structure is as follows:

- `backend/`: Contains the backend Node.js and Express.js application files.
- `frontend/`: Contains the frontend React.js application files.

## Technologies Used

- **Frontend:**
  - React.js
  - React Router
  - Axios (for HTTP requests)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)
