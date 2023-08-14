import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import bodyParser from 'body-parser';
import express from 'express';

async function main() {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}

main();
