const test = require('tape')
const isBing = require('../')

test('should fail on wrong IPs', (t) => {
  t.plan(2)
  isBing('1.1.1.1').then(outcome => t.notOk(outcome))
  isBing('123.123.123.123').catch(err => t.equal(err.code, 'ENOTFOUND'))
})

test('should fail with wrong inputs', (t) => {
  t.plan(3)
  isBing('helloworld').catch(err => t.ok(err))
  isBing('0.0.0.0.0.0').catch(err => t.ok(err))
  isBing().catch(err => t.ok(err))
})

test('should pass on valid search.msn.com crawler ip', (t) => {
  t.plan(1)
  isBing('207.46.13.1').then(outcome => t.ok(outcome))
})
