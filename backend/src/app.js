import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { authRouter } from './routes/authRouter.js';
import { todoRouter } from './routes/todoRouter.js';
import { categoryRouter } from './routes/categoryRouter.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: process.env.CLIENT_URL
}));
app.use(express.json());
app.use(authRouter);
app.use(todoRouter);
app.use(categoryRouter);
app.use(errorMiddleware);

app.listen(PORT);

export default app;
