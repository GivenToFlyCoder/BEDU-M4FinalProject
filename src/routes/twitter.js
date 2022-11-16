const routerP = require('express').Router()

const {    
    postTwitter
} = require('../controllers/twitters')

routerP.post('/', postTwitter)

module.exports = routerP


