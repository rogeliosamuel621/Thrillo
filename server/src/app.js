import express from 'express';
import dotenv from 'dotenv';
import database from './config/database';
import { handlerErrors } from './middleware';

import { AuthRoutes } from './routes';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares input
app.use(express.json());

// routing
app.use('/api/auth', AuthRoutes());

// midlewares output
app.use(handlerErrors);

export default app;
