import express, { Express } from 'express';

import config from './config';
import router from './router';

const port = config.PORT;

const app: Express = express();

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.info(`server started on port: ${port}`);
});
