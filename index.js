const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.send('world')
})

app.get('/date', (req, res) => {
    res.send(new Date())
})

app.listen(8899, () => {
  console.log('Server running')
})