const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')

require('./src/config/passport')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGOURI)

app.use('/routesv1', require('./src/routes'))

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} ... I'm Still Alive!`)
})

app.get('/',(req, res) => res.status(200).send('Hi World! Connected!'))

