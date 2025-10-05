import express from 'express';
import { pool } from '../event_db';

const router = express.Router();

router.get('/api/organisations', (req, res) => {
  pool.query('SELECT * FROM organisations WHERE is_active=1 ORDER BY name')
    .then(([rows]) => res.json(rows))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ message: 'DB error' });
    });
});

module.exports = router
