import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database';
import { UserController } from './controllers/user.controller';
import { AuthController } from './controllers/auth.controller';
import { authMiddleware } from './middlewares/auth.middleware';
import { initializeDatabase } from './config/init-db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Controllers
const userController = new UserController();
const authController = new AuthController();

// Auth routes
app.post('/auth/register', (req, res) => authController.register(req, res));
app.post('/auth/login', (req, res) => authController.login(req, res));
app.get('/auth/me', authMiddleware, (req, res) => authController.getCurrentUser(req, res));

// User routes
app.get('/users', authMiddleware, (req, res) => userController.getAllUsers(req, res));
app.get('/users/:id', authMiddleware, (req, res) => userController.getUserById(req, res));
app.post('/users', authMiddleware, (req, res) => userController.createUser(req, res));
app.put('/users/:id', authMiddleware, (req, res) => userController.updateUser(req, res));
app.delete('/users/:id', authMiddleware, (req, res) => userController.deleteUser(req, res));

// Initialize database and start server
initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error during application startup:', error);
    process.exit(1);
  }); 