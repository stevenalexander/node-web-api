var supertest = require('supertest')
var app = require('../../app')

exports.root_should_return_ok = function (done) {
  supertest(app)
  .get('/')
  .expect(200)
  .end(done)
}
