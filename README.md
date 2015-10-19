# video-ad-network-multi-api #

Pulls reports from multiple video ad networks and attempts to normalize the responses. Currently supports:

* SpotX (`spotx-api`)
* LKQD (`lkqd-api`)
* OneVideo (`onevideo-api`)

## Example ##

```js
var multiFetch = require('video-ad-network-multi-api')

var accounts = [
  {
    "network": "spotx",
    "username": "xxx",
    "password": "xxx"
  },
  {
    "network": "onevideo",
    "username": "xxx",
    "password": "xxx"
  },
  {
    "network": "lkqd",
    "key": "xxx",
    "secret": "xxx"
  }
]

var dateStart = '2015-10-15'
var dateEnd = '2015-10-18'

multiFetch(accounts, dateStart, dateEnd, function (err, report) {
  if (err) return console.error(err)
  console.log('report', report)
})
```

# License #

MIT
