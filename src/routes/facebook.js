//router definition, using express Router, import functions from controllers
//for every kind or request (CRUD) we define the function / action to execute, from controllers
const routerF = require('express').Router()

const {    
    getFacebook,
    postFacebookSearch,
    postFacebookAdd,
    deleteFacebook,
    updateFacebook
} = require('../controllers/facebooks')

routerF.get('/', getFacebook)          //query string: state & quantity
routerF.post('/', postFacebookSearch)  //request body: state, topic, quantity
routerF.post('/add', postFacebookAdd)  //request body: state, etc....
routerF.delete('/', deleteFacebook)    //query string: id
routerF.put('/:id', updateFacebook)    //path parameters + request body: id + state, etc

module.exports = routerF


