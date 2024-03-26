const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const util = require('./util/database')


const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const home = require('./home');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.send('working');
});

mongoConnect(() => {
  app.listen(3000);
  console.log('Mongo Connected')
})
