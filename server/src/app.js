import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import database from './config/database';
import { handleError } from './middlewares';

import { UserRoutes, AuthRoutes } from './routes';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares input
app.use(cors());
app.use(express.json());

// routing
app.use('/api/users', UserRoutes());
app.use('/api/auth', AuthRoutes());

// midlewares output
app.use(handleError);

export default app;
