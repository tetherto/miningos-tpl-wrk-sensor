'use strict'

const test = require('brittle')
const libUtils = require('../../workers/lib/utils')

test('utils module exports libUtils from miningos-tpl-wrk-thing', async (t) => {
  t.ok(libUtils, 'libUtils is exported')
  const parentUtils = require('miningos-tpl-wrk-thing/workers/lib/utils')
  t.is(libUtils, parentUtils, 'utils module re-exports parent utils')
})
