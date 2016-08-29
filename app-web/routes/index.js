var express = require('express')
var rest = require('../lib/rest')

module.exports = function (app) {
  var route = express.Router()

  app.use('/', route)

  route.get('/', function (req, res) {
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
}
