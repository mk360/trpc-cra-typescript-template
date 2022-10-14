import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter } from './app-router';
import * as dotenv from 'dotenv';

dotenv.config({
    path: '../.env',
});

const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});

const app = express();
app.use(cors());

app.use('/', trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
}));

app.listen(+process.env.API_PORT, () => {
    console.log(`Listening to port ${process.env.API_PORT}`);
});