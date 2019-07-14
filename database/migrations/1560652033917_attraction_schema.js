'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttractionSchema extends Schema {
  up () {
    this.create('attractions', (table) => {
      table.increments()
      table.string('name', 50)
      table.string('type', 50)
      table.string('subtype', 50)
      table.integer('park_id')
      table.foreign('park_id').references('parks.id')
      table.string('make', 50)
      table.integer('inversions')
      table.integer('user_favorites')
      table.integer('height')
      table.integer('length')
      table.boolean('defunct')
      table.date('defunct_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('attractions')
  }
}

module.exports = AttractionSchema
