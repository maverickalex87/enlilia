const path = require('path');

const express = require('express');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const util = require('./util/database')


const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(shopRoutes);

mongoConnect(() => {
  app.listen(3000);
  console.log('Mongo Connected')
})
