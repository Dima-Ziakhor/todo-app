import express from 'express';
import { todoController } from '../controllers/todoController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { catchError } from '../utils/catchError.js';

export const todoRouter = new express.Router();

todoRouter.post('/todos', catchError(authMiddleware), catchError(todoController.create));
todoRouter.put('/todos', catchError(authMiddleware), catchError(todoController.update));
todoRouter.delete('/todos', catchError(authMiddleware), catchError(todoController.remove));
todoRouter.get('/todos', catchError(authMiddleware), catchError(todoController.getByCategory));
