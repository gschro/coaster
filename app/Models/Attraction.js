'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Attraction extends Model {
    park () {
        return this.hasOne('App/Models/Park')
      }
}

module.exports = Attraction
