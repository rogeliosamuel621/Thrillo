import express from 'express';
import dotenv from 'dotenv';
import database from './config/database';
import { handleError } from './middlewares';

import { UserRoutes } from './routes';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares input
app.use(express.json());

// routing
app.use('/api/auth', UserRoutes());

// midlewares output
app.use(handleError);

export default app;
