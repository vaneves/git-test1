const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.send('world')
})

app.get('/now', (req, res) => {
  const now = new Date()
  res.json(now)
})

app.listen(8899, () => {
  console.log('Server running in port 8899')
})