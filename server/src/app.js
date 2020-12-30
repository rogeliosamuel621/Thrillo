import express from 'express';
import dotenv from 'dotenv';

// load env variables
dotenv.config();

// create an express application
const app = express();

// middlewares
app.use(express.json());

// routing
app.use('/api/v1/', (req, res) => {
  res.json({
    message: 'Hello World!'
  });
});

export default app;
