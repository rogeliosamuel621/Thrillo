import express from 'express';
import dotenv from 'dotenv';
import database from './config/database';
import { handlerErrors } from './middleware';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares input
app.use(express.json());

// routing
app.use('/api/v1/', (req, res) => {
  res.status(200).json({
    message: 'Hello world'
  });
});

// midlewares output
app.use(handlerErrors);

export default app;
