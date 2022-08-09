const express = require('express');
const connection= require("./connection")
const categoryRoute = require('./routes/categories')
const booksRoute = require('./routes/books')
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/categories',categoryRoute)
app.use('/book',booksRoute)

module.exports = app;