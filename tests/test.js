const test = require('tape')
const isBing = require('../')

test('should fail on wrong ip', (t) => {
  t.plan(1)
  isBing('1.1.1.1').then(outcome => t.notOk(outcome))
})

test('should fail with wrong inputs', (t) => {
  t.plan(2)
  isBing('helloworld').catch(err => t.ok(err))
  isBing('0.0.0.0.0.0').catch(err => t.ok(err))
})

test('should pass on valid search.msn.com crawler ip', (t) => {
  t.plan(1)
  isBing('157.55.33.18').then(outcome => t.ok(outcome))
})
