import express from 'express';
import { resolve } from 'path';
import * as routes from './routes';

const app = express();
app.set('view engine', 'ejs');
app.set('views', resolve('./src/views'));
app.use(express.static('./src/views/public'));

app.get('/', routes.index);
app.get('/post/:id', routes.post);

export default {
  app,
};
