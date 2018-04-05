# is-bing

[![NPM Version](https://img.shields.io/npm/v/is-bing.svg)](https://www.npmjs.com/package/is-bing)
[![Build Status](https://travis-ci.org/roccomuso/is-bing.svg?branch=master)](https://travis-ci.org/roccomuso/is-bing)
![node](https://img.shields.io/node/v/is-bing.svg)
[![Dependency Status](https://david-dm.org/roccomuso/is-bing.png)](https://david-dm.org/roccomuso/is-bing)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Verify that a request is from Bing crawlers using Bing's DNS verification steps

You may wish to verify that a web crawler accessing your server is Bingbot (or another Bing user-agent) and not spammers or other bots scraping your site while claiming to be Bingbot. Since you cannot rely on the `User-Agent` header which is easily spoofed, you need to use DNS look up to verify that the IP address belongs to Bing.

This library implements Bing's own verification steps [outlined here](https://blogs.bing.com/webmaster/2012/08/31/how-to-verify-that-bingbot-is-bingbot/).

## Install

`npm install --save is-bing`

## Example

```javascript
const isBing = require('is-bing')

let ip = '157.55.33.18'
isBing(ip).then((outcome) => {
  if (outcome) {
    // it's bing.
  }
}).catch(console.error)
```

### Example with express

```javascript
app.enable('trust proxy')

app.use((req, res, next) => {
  let ip = req.ip || req.connection.remoteAddress
  isBing(ip).then(outcome => {
    if (outcome) {
      res.status(404).text('Nothing to scan') // block bing crawler
    } else {
      next() // it's a user
    }
  })
})
```

## Tests

`npm test`

## License

MIT

## Author

Rocco Musolino [@roccomuso](https://twitter.com/roccomuso)
