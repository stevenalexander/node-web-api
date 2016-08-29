var request = require('request')
var apiUrl = 'http://localhost:3001/'

module.exports = {
  getItems: function (callback) {
    request.get(apiUrl, function (error, response, data) {
      if (!error && response.statusCode === 200) {
        var json = JSON.parse(data)
        callback(null, json.items)
      } else {
        callback(error, null)
      }
    })
  }
}
