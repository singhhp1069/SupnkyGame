import express, { Application, Request, Response } from "express";
import cors from 'cors';
import { resolve } from 'path';

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(resolve('public')));

export { app };