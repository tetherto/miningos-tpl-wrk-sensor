'use strict'

const WrkRack = require('miningos-tpl-wrk-thing/workers/rack.thing.wrk')

class WrkSensorRack extends WrkRack {
  init () {
    super.init()

    // buildStats to store real-time-data
    this.scheduleAddlStatTfs = [
      ['rtd', '*/10 * * * * *']
    ]
  }

  getThingType () {
    return 'sensor'
  }

  _getThingBaseType () {
    return 'sensor'
  }
}

module.exports = WrkSensorRack
