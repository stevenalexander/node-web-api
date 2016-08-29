var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.json({ items: [{ name: 'Cheese' }, { name: 'Butter' }, { name: 'Milk' }] })
})

router.get('/:id', function (req, res, next) {
  res.json({name: 'Cheese'})
})

router.post('/', function (req, res, next) {
  res.status(201).send({name: 'Cheese'})
})

router.delete('/:id', function (req, res, next) {
  res.sendStatus(204)
})

module.exports = router
