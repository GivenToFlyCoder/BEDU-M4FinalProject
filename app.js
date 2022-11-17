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

// app.use('/v1', require('./src/routes'))
app.use('/routesv1', require('./src/routes'))

// const PORT = 4001
// app.listen(process.env.PORT, () => console.log("The server is Alive!!"))
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT} ... I'm Still Alive!`)
})

// app.get('/',(req, res) => res.send("Hola Mundo"))
app.get('/',(req, res) => res.status(200).send('Hi World! Connected!'))

