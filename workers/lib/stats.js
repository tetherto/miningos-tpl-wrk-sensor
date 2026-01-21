'use strict'

const libStats = require('miningos-tpl-wrk-thing/workers/lib/stats')

libStats.spec.sensor_default = { ops: libStats.spec.default.ops }

module.exports = libStats
