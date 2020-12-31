import express from 'express';
import dotenv from 'dotenv';
import database from './config/database';

// load env variables
dotenv.config();

// create an express application
const app = express();

// database connection
database();

// middlewares
app.use(express.json());

// routing
app.use('/api/v1/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

export default app;
