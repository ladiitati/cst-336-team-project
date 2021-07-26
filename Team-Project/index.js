const express = require('express');
const fetch = require('node-fetch');
const pool = require('./dbpool.js');
const session = require('express-session');

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(session({
  'secret': '343ji43j4n3jn4jk3n'
}));

//routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/choose', (req, res) => {
  res.render('choose');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/products', (req, res) => {
  res.render('products');
});

app.get('/checkout', (req, res) => {
  res.render('checkout');
});

app.get('/checkout1', (req, res) => {
  res.render('checkout');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

app.get('/rubric', (req, res) => {
  res.render('rubric');
});

//server listener
app.listen(3000, () => {
  console.log('Server Started');
});