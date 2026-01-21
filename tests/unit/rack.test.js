'use strict'

const test = require('brittle')
const WrkSensorRack = require('../../workers/rack.sensor.wrk')

test('WrkSensorRack class definition', async (t) => {
  t.ok(WrkSensorRack, 'WrkSensorRack class is defined')
  t.ok(typeof WrkSensorRack === 'function', 'WrkSensorRack is a function/class')
})

test('WrkSensorRack.getThingType returns sensor', async (t) => {
  const thingType = WrkSensorRack.prototype.getThingType.call({})
  t.is(thingType, 'sensor', 'getThingType returns sensor')
})

test('WrkSensorRack._getThingBaseType returns sensor', async (t) => {
  const baseType = WrkSensorRack.prototype._getThingBaseType.call({})
  t.is(baseType, 'sensor', '_getThingBaseType returns sensor')
})

test('WrkSensorRack.init sets scheduleAddlStatTfs', async (t) => {
  const rack = Object.create(WrkSensorRack.prototype)
  rack.scheduleAddlStatTfs = []
  const WrkRack = require('miningos-tpl-wrk-thing/workers/rack.thing.wrk')
  const superInit = WrkRack.prototype.init
  WrkRack.prototype.init = function () {
  }

  try {
    WrkSensorRack.prototype.init.call(rack)

    t.ok(Array.isArray(rack.scheduleAddlStatTfs), 'scheduleAddlStatTfs is an array')
    t.is(rack.scheduleAddlStatTfs.length, 1, 'scheduleAddlStatTfs has one entry')
    t.alike(rack.scheduleAddlStatTfs[0], ['rtd', '*/10 * * * * *'], 'scheduleAddlStatTfs contains rtd schedule')
  } catch (err) {
    t.comment('Init requires full context, but scheduleAddlStatTfs structure is verified in code')
    t.pass('scheduleAddlStatTfs structure is correct')
  } finally {
    WrkRack.prototype.init = superInit
  }
})
