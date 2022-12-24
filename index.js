const dns = require('dns')

function isBing (ip) {
  return new Promise((resolve, reject) => {
    dns.reverse(ip, (err, domains) => {
      if (err) {
        return reject(err)
      }
      const hostname = domains[0]

      if (!(hostname && hostname.endsWith('search.msn.com'))) {
        return resolve(false)
      }

      dns.lookup(hostname, (err, addr) => {
        if (err) {
          return reject(err)
        }
        const outcome = addr === ip
        return resolve(outcome)
      })
    })
  })
}

module.exports = isBing
module.exports.default = isBing
