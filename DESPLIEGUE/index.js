#!/usr/bin/env node
 
const express = require('express')
const app = express()
const port = 3333
 
app.get('/', (request, response) => {
  response.send('<h1> Hola Mundo! </h1>')
})
 
 
app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})