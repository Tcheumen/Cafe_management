
const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user.js');
const billRoute = require('./routes/bill.js');
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/bill', billRoute);

const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user.js');

const productRoute = require('./routes/product.js');

const categoryRoute = require('./routes/category.js');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);

app.use('/product', productRoute);

app.use('/category', categoryRoute);



module.exports = app;