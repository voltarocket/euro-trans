import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import marketplaceOrderRoutes from './routes/marketplace/order';

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(json());

// Подключение роутов
app.use('/api', marketplaceOrderRoutes);

export default app;