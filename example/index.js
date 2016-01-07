var reportFetcher = require('../')

var accounts = require('./accounts.json')

var dateStart = '2016-01-05'
var dateEnd = '2016-01-05'

reportFetcher(accounts, dateStart, dateEnd, function (err, report) {
  if (err) return console.error(err)
  // console.log('report', report)
  console.log(JSON.stringify(report, null, 2))
})

