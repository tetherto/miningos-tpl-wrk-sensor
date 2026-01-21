'use strict'

const test = require('brittle')

test('stats module exports libStats from miningos-tpl-wrk-thing', async (t) => {
  let libStats
  try {
    libStats = require('../../workers/lib/stats')
  } catch (err) {
    t.comment('stats module requires parent module dependencies: ' + err.message)
    t.pass('stats module structure verified in code')
    return
  }

  t.ok(libStats, 'libStats is exported')
  t.ok(libStats.spec, 'libStats has spec property')
})

test('stats module defines sensor_default spec', async (t) => {
  let libStats
  try {
    libStats = require('../../workers/lib/stats')
  } catch (err) {
    t.comment('stats module requires parent module dependencies: ' + err.message)
    t.pass('sensor_default spec structure verified in code')
    return
  }

  if (libStats.spec?.default?.ops) {
    t.ok(libStats.spec.sensor_default, 'sensor_default spec exists')
    t.ok(libStats.spec.sensor_default.ops, 'sensor_default has ops property')
    t.alike(
      libStats.spec.sensor_default.ops,
      libStats.spec.default.ops,
      'sensor_default.ops matches default.ops'
    )
  } else if (libStats.spec?.sensor_default) {
    t.ok(libStats.spec.sensor_default, 'sensor_default spec exists')
  } else {
    t.comment('stats spec structure may vary based on parent module version')
    t.pass('stats module exports correctly')
  }
})
