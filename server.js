import express from 'express';
import { pool } from './event_db';

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`)
});
