'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Park extends Model {
    attractions () {
        return this.hasMany('App/Models/Attraction')
      }
}

module.exports = Park
/*
//parks
      table.increments()
      table.string('name', 50).notNullable()
      table.string('country', 50).notNullable()
      table.string('state', 50)
      table.string('city', 50)
      table.string('metro', 50)
      table.string('airport', 50)
      table.string('family', 50)
      table.timestamps()
    })
*/