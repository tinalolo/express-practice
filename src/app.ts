import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import usersRouter from './routes/users.router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', usersRouter);

// 1. 讓 express 監聽 .env 裡設定的 PORT 號
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});
