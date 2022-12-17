import express, { Express } from 'express';

import config from './config';

const port = config.PORT;

const app: Express = express();

app.use(express.json());

// app.use('/', router);
app.get('/test', (req, res) => {
  res.send('test');
});

app.listen(port, () => {
  console.info(`server started on port: ${port}`);
});
