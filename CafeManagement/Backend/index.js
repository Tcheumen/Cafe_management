const express = require('express');
var cors = require('cors');
const connection = require('./connection');
const userRoute = require('./routes/user.js');
const categoryRoute = require('./routes/category.js');
const dashboardRoute = require('./routes/dashboard.js');
const productRoute = require('./routes/product.js');
const billRoute = require('./routes/bill.js');
const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/user', userRoute);
app.use('/category', categoryRoute);
app.use('/dashboard', dashboardRoute);
app.use('/product', productRoute);
app.use('/bill', billRoute);


module.exports = app;
