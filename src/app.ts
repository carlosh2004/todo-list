import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import config from './config';
import apiRouter from './routes/router';

const app = express();
const PORT = config.PORT;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
