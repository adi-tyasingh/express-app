const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Does this work guys?! <3 Mluukai <3 University of Helsinki</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})