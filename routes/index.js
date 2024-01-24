const Router = require('express')
const router = new Router
//const RouterBrand = require('./RouterBrand')
//const RouterType = require('./RouterType')
//const RouterUser = require('./RouterUser')
//const RouterProduct = require('./RouterProduct')
const RouterApi = require('./RouterApi')

//router.use('/products', RouterUser)
//router.use('/type', RouterType)
//router.use('/brand', RouterBrand)
//router.use('/product', RouterProduct)
router.use('/api', RouterApi)
module.exports = router