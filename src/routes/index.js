const router = require("express").Router()

router.get('/', (req,res) => {
    res.send("First Heroku Deployment: My Project Module 4 + BeduShop!")
})

router.use('/facebook', require('./facebook'))
router.use('/twitter', require('./twitter'))
router.use('/sesnspfc', require('./sesnspfc'))

module.exports = router