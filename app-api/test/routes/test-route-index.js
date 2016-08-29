var supertest = require('supertest')
var app = require('../../app')

exports.root_should_return_200 = function (done) {
  supertest(app)
  .get('/')
  .expect(200)
  .end(done)
}

exports.id_should_return_200 = function (done) {
  supertest(app)
  .get('/1234')
  .expect(200)
  .end(done)
}

exports.post_should_return_204 = function (done) {
  supertest(app)
  .post('/')
  .type('json')
  .send('{"item":"Chocolate"}')
  .expect(201)
  .end(done)
}

exports.delete_should_return_204 = function (done) {
  supertest(app)
  .delete('/1234')
  .expect(204)
  .end(done)
}
