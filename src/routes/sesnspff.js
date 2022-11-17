const routerFF = require('express').Router()

const {    
    getSesnspFFSearch
} = require('../controllers/sesnspffs')

routerFF.post('/', getSesnspFFSearch)

module.exports = routerFF


