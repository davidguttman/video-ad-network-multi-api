var map = require('map-async')
var dra = require('date-range-array')

var normalize = require('./normalize.json')

var apis = {
  lkqd: require('lkqd-api'),
  spotx: require('spotx-api'),
  onevideo: require('onevideo-api')
}

module.exports = function (accounts, dateStart, dateEnd, cb) {
  var dates = dra(dateStart, dateEnd)
  var dateAccounts = []

  dates.forEach(function (date) {
    accounts.forEach(function (account) {
      dateAccounts.push({date: date, account: account})
    })
  })

  map(dateAccounts, getAccountDate, cb)
}

function getAccountDate (opts, cb) {
  var date = opts.date
  var account = opts.account
  var network = account.network

  var api = apis[network]
  if (!api) return cb(new Error('Unknown network: ' + network))

  api(account, date, function (err, rows) {
    if (err) return cb(err)

    cb(null, rows.map(function (raw) {
      var row = {
        date: date,
        network: network
      }

      normalize.fields.forEach(function (field) {
        row[field] = raw[normalize.mappings[network][field]]
      })

      return row
    }))
  })
}
