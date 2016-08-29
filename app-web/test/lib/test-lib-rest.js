/* global describe before it */
var expect = require('chai').expect
var sinon = require('sinon')
var proxyquire = require('proxyquire')

describe('rest', function () {
  var rest
  var request
  var requestGet
  before(function () {
    requestGet = sinon.stub()
    request = {
      get: requestGet
    }
    rest = proxyquire('../../lib/rest', {'request': request})
  })

  describe('getItems', function () {
    it('should call API and parse body', function () {
      var item = { name: 'Milk' }
      var body = JSON.stringify({ items: [item] })

      requestGet.yields(null, { statusCode: 200 }, body)

      rest.getItems(function (error, items) {
        expect(error).to.be.null
        expect(items.length).to.equal(1)
        expect(items[0].name).to.equal(item.name)
      })
    })
  })
})
