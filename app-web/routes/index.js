var express = require('express')
var router = express.Router()

var rest = require('../lib/rest')

router.get('/', function (req, res, next) {
  rest.getItems(function (error, items) {
    if (!error) {
      res.render('index', { title: 'Shopping List', items })
    } else {
      res.status(500).render('error', {
        message: error.message,
        error: error
      })
    }
  })
})

module.exports = router
