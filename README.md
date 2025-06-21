# CodeStart Educational Platform

## Overview
CodeStart is a full-stack educational platform designed to help users learn coding through interactive tutorials, project-based learning, and community support. The platform includes user authentication, module management, and a modern responsive frontend built with React and Tailwind CSS.

## Features
- User registration and login with JWT authentication
- Protected routes for authenticated users
- Module creation, listing, and detailed views
- Responsive UI with Tailwind CSS
- Deployment configurations for Render (backend) and Vercel (frontend)
- Unit and integration tests for frontend and backend

## Technologies Used
- Frontend: React, React Router, Tailwind CSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT, bcrypt
- Testing: Jest, React Testing Library, Supertest
- Deployment: Render, Vercel

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Fefox-glitch/CodeStart-HTML.git
   cd CodeStart-HTML
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the backend directory with the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     JWT_EXPIRE=30d
     JWT_COOKIE_EXPIRE=30
     ```

### Running the Application
- Start the backend server:
  ```
  npm run start:backend
  ```
- Start the frontend development server:
  ```
  npm run start:frontend
  ```

### Running Tests
- Run all tests:
  ```
  npm test
  ```

## Deployment
- Backend is configured for deployment on Render using `backend/render.yaml`.
- Frontend is configured for deployment on Vercel using `frontend/vercel.json`.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request.

## License
MIT License

## Contact
For any questions or support, please contact the maintainer.

