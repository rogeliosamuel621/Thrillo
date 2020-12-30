import express from 'express';
import { PORT } from './config';

const app = express();

app.get('/', (req, res) => res.send('working'));

app.listen(PORT, () => console.log('Server on'));
