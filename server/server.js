import express from 'express';
import mongoose from 'mongoose';
import BodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import ProductController from './controllers/ProductController';
import FilterController from './controllers/FilterController';
import ReviewController from './controllers/ReviewController';
import OrderController from './controllers/OrderController';

const app = express();

// db connection
const uri = 'mongodb://root:7878root@ds139167.mlab.com:39167/shop';
mongoose.connect(uri, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// express config
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.static('dist'));
app.use(express.static('public'));

// routes
app.get('/api/products/search', ProductController.search);
app.get('/api/products', ProductController.index);
app.get('/api/product/:id', ProductController.read);

app.get('/api/filters', FilterController.index);
app.post('/api/review', ReviewController.create);
app.post('/api/order', OrderController.create);

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
app.use(staticFiles)

app.get('/cities', (req, res) => {
  const cities = [
    {name: 'New York City', population: 8175133},
    {name: 'Los Angeles',   population: 3792621},
    {name: 'Chicago',       population: 2695598},
    {name: 'Kiev',       	population: 2712281},
  ]
  res.json(cities)
});

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)

app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
});
