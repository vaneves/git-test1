const express = require('express')

const app = express()

app.get('/hello', (req, res) => {
  res.send('world')
})

app.get('/now', (req, res) => {
  const now = new Date()
  res.json({
    string: now,
    timestamp: now.getTime()
  })
})

app.get('/now2', (req, res) => {
  res.send('now 2')
})

app.listen(8899, () => {
  console.log('Server running')
})