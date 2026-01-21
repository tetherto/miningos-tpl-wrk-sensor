'use strict'

const BaseThing = require('miningos-tpl-wrk-thing/workers/lib/base')

class BaseSensor extends BaseThing {
  constructor (opts) {
    super('sensor', opts)

    this.cache = null
  }

  async getRealtimeData () {
    // snap is read at short intervals, return data from cache
    return await this._prepSnap(true)
  }
}

module.exports = BaseSensor
