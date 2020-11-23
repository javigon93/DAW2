#!/usr/bin/env node
 
const express = require('express')
const app = express()
const port = 4444
 
app.get('/site/index.html', (request, response) => {
  response.sendFile(__dirname+'/index.html');
})
 
 
app.listen(port, (err) => {
  console.log(`server is listening on ${port}`)
})