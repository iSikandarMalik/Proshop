const express = require('express')
const Products = require('./data/products')

const app = express()

app.get('/', (req, res) => {
  res.send('API is Running')
})

app.get('/api/products', (req, res) => {
  res.json(Products)
})

app.get('/api/products/:id', (req, res) => {
  const product = Products.find(p => p._id === req.params.id)
  res.json(product)
})

app.listen(5000, () => console.log('backend is running on port 5000'))
