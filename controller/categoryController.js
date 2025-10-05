import express from 'express';
import { pool } from '../event_db';

const router = express.Router();

router.get('/api/categories', (req, res) => {
  const sql = `SELECT * FROM categories WHERE is_active=1 ORDER BY name`;

  pool.query(sql)
    .then(([rows]) => res.json(rows))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'DB error' });
    });
});

module.exports = router
