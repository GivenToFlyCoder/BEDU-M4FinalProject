//router definition, using express Router, import functions from controllers
//for every kind or request (CRUD) we define the function / action to execute, from controllers
const routerP = require('express').Router()

const {    
    getFacebook,
    postFacebookSearch,
    postFacebookAdd,
    deleteFacebook,
    updateFacebook
} = require('../controllers/facebooks')

routerP.get('/', getFacebook)          //query string: state & quantity
routerP.post('/', postFacebookSearch)  //request body: state, topic, quantity
routerP.post('/add', postFacebookAdd)  //request body: state, etc....
routerP.delete('/', deleteFacebook)    //query string: id
routerP.put('/:id', updateFacebook)    //path parameters + request body: id + state, etc

module.exports = routerP


