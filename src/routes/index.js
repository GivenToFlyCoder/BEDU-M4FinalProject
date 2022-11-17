const router = require("express").Router()

router.get('/', (req,res) => {
    res.send("First Heroku Deployment: My Project Module 4 + BeduShop!")
})

router.use('/productos', require('./producto'))
router.use('/usuarios', require('./usuario'))
router.use('/facebook', require('./facebook'))
router.use('/twitter', require('./twitter'))

module.exports = router