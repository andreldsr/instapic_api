import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors'
import dotenv from 'dotenv'
import './database';
import { router } from './routes';
import cors from './config/cors.conf'
import { errorHandler } from './middlewares/ErrorHandler';

const app = express();
dotenv.config()
app.use(express.json())
app.use(router);
app.use(cors)

app.use(errorHandler)

app.listen(process.env.PORT || 3000, () => console.log("Server started"))