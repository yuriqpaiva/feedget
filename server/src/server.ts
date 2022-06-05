import express from 'express';
import { router } from './routes';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '100kb'}));
app.use(router);

app.listen(3333, () => {
  console.log('HTTP server running!');
});
