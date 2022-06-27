const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require ("cors")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/v1', router)
app.use(cors())


app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`)
})