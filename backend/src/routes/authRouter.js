import express from 'express';
import { authController } from '../controllers/authController.js';
import { catchError } from '../utils/catchError.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export const authRouter = new express.Router();

authRouter.post('/login', catchError(authController.login));
authRouter.post('/register', catchError(authController.register));
authRouter.delete('/user/:id', authMiddleware, catchError(authController.remove));
authRouter.get('/activation/:activationToken', catchError(authController.activate));
