import express from 'express';
import path from 'path';

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.get('/', (_, res) => {
  res.render('home', {
    title: "Gabe's Square!",
    header: 'Hello World!',
  });
});

export default {
  app,
};
