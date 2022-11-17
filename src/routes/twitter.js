const routerT = require('express').Router()

const {    
    postTwitter
} = require('../controllers/twitters')

routerT.post('/', postTwitter)

module.exports = routerT


