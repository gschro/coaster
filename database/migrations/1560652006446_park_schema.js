'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParkSchema extends Schema {
  up () {
    this.create('parks', (table) => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('country', 50).notNullable()
      table.string('state', 50)
      table.string('city', 50)
      table.string('metro', 50)
      table.string('airport', 50)
      table.string('family', 50)
      table.string('slug', 50)
      table.timestamps()
    })
  }

  down () {
    this.drop('parks')
  }
}

module.exports = ParkSchema
