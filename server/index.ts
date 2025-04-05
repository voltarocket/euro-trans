import app from './app';
import { config } from 'dotenv';

config(); // Загрузка .env

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});