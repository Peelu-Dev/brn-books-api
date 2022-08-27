const express = require('express');
const connection= require("./connection")
const categoryRoute = require('./routes/categories')
const booksRoute = require('./routes/books')
const servicesRoute = require('./routes/services')
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/categories',categoryRoute)
app.use('/book',booksRoute)
app.use('/services',servicesRoute)

module.exports = app;