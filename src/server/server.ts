import express from 'express';
import { resolve } from 'path';

const app = express();
app.set('view engine', 'ejs');
app.set('views', resolve('./src/views'));

app.get('/', (_, res) => {
  res.render('home', {
    title: "Gabe's Square!",
    header: 'Hello World!',
  });
});

export default {
  app,
};
