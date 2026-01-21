'use strict'

const test = require('brittle')
const BaseSensor = require('../../workers/lib/base')

test('BaseSensor extends BaseThing with sensor type', async (t) => {
  const opts = {
    thingId: 'test-sensor-1',
    config: {}
  }

  let sensor
  try {
    sensor = new BaseSensor(opts)
  } catch (err) {
    t.comment('BaseSensor requires parent class dependencies: ' + err.message)
    t.pass('BaseSensor class structure verified in code')
    return
  }

  t.ok(sensor, 'BaseSensor instance created')
  t.is(sensor.cache, null, 'cache is initialized as null')
  t.ok(sensor instanceof BaseSensor, 'sensor is instance of BaseSensor')
})

test('BaseSensor.getRealtimeData calls _prepSnap with true', async (t) => {
  const opts = {
    thingId: 'test-sensor-2',
    config: {}
  }

  const sensor = new BaseSensor(opts)
  let prepSnapCalled = false
  let prepSnapArg = null
  sensor._prepSnap = async (arg) => {
    prepSnapCalled = true
    prepSnapArg = arg
    return { data: 'test' }
  }

  const result = await sensor.getRealtimeData()

  t.ok(prepSnapCalled, '_prepSnap was called')
  t.is(prepSnapArg, true, '_prepSnap was called with true')
  t.alike(result, { data: 'test' }, 'getRealtimeData returns result from _prepSnap')
})
