'use strict'

const test = require('brittle')
const libAlerts = require('../../workers/lib/alerts')

test('alerts module exports libAlerts from miningos-tpl-wrk-thing', async (t) => {
  t.ok(libAlerts, 'libAlerts is exported')
  const parentAlerts = require('miningos-tpl-wrk-thing/workers/lib/alerts')
  t.is(libAlerts, parentAlerts, 'alerts module re-exports parent alerts')
})
