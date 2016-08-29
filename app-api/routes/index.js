var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.json({ items: [{ item: 'Cheese' }, { item: 'Butter' }, { item: 'Milk' }] })
})

router.get('/:id', function (req, res, next) {
  res.json({item: 'Cheese'})
})

router.post('/', function (req, res, next) {
  res.status(201).send({item: 'Cheese'})
})

router.delete('/:id', function (req, res, next) {
  res.sendStatus(204)
})

module.exports = router
