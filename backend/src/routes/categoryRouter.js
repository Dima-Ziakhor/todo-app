import express from 'express';
import { categoryController } from '../controllers/categoryController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../utils/catchError.js';

export const categoryRouter = new express.Router();

categoryRouter.get('/categories/:userId', catchError(authMiddleware), catchError(categoryController.getAll));
categoryRouter.post('/categories', catchError(authMiddleware), catchError(categoryController.create));
categoryRouter.delete('/categories', catchError(authMiddleware), catchError(categoryController.remove));
