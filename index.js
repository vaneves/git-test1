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

app.get('/twomorrow', (req, res) => {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  res.json({
    twomorrow: date
  })
})

app.get('/yesterday', (req, res) => {
  res.send('under constrution')
})

app.listen(8899, () => {
  console.log('Server running in port 8899')
})