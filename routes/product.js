const express = require('express')
const router = express.Router()
const fetchAndLogProductData = require('../controller/product')
const {getOrders , downloadSheet} = require('../controller/order')
const {getInvoice} = require('../controller/invoice')




router.get('/details',fetchAndLogProductData)
router.get('/order/details',getOrders)
router.get('/order/details/:id',downloadSheet )
router.get('/order/invoice/:orderNumber',getInvoice )


module.exports = {router}