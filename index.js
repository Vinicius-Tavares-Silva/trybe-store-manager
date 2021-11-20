const express = require('express');
const error = require('./middlewares/error');
const products = require('./controllers/products/router');
const sales = require('./controllers/sales/router');

const PORT = '3000';

const app = express();
app.use(express.json());

app.use('/products', products);
app.use('/sales', sales);
app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(PORT, () => {
  console.log('Online');
});
