import { Router } from 'express';
import config from '../config';

const router: Router = Router();

router.use((req, _res, next) => {
  req.query = { ...req.query, key: config.API_KEY };
  next();
});

// Forecast for next X days, API limit - 5 days by 3 hours
router.get('/forecast/:city/:days?', (req, res) => {
  res.send('forecast');
});

//  Current weather conditions of Multiple cities
router.get('/weather/list', (req, res) => {
  res.send('weather list');
});

//  Current weather conditions of any particular city
router.get('/weather/:city', (req, res) => {
  console.log('weather city');
});

export default router;
