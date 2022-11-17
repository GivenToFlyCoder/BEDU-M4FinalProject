const routerFC = require('express').Router()

const {    
    getSesnspFCSearch
} = require('../controllers/sesnspfcs')

routerFC.post('/', getSesnspFCSearch)

module.exports = routerFC


