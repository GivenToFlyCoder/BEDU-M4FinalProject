const express = require('express');
const mongoose = require("mongoose");

require('./src/config/passport')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const db = 'BeduShop'
// const dbUser = 'javiGN'
// const dbPass = 'javiGN'

// const uri = `mongodb+srv://${dbUser}:${dbPass}@cluster0.qrvngpz.mongodb.net/${db}?retryWrites=true&w=majority`

// mongoose.connect(uri);
mongoose.connect(process.env.MONGOURI)

app.use('/v1', require('./src/routes'));

// const PORT = 4001;
app.listen(process.env.PORT, () => console.log("The server is Alive!!"))

app.get('/',(req, res) => res.send("Hola Mundo"))