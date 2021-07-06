import express from 'express';
import 'express-async-errors'
import dotenv from 'dotenv'
import './database';
import { router } from './routes';
import corsOptions from './config/cors.conf'
import { errorHandler } from './middlewares/ErrorHandler';
import cors from 'cors'

const app = express();
dotenv.config()
app.use(express.json())
app.use(cors(corsOptions))
app.use(router);

app.use(errorHandler)

app.listen(process.env.PORT || 3000, () => console.log("Server started"))