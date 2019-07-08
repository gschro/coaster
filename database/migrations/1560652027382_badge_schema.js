'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BadgeSchema extends Schema {
  up () {
    this.create('badges', (table) => {
      table.increments()
      table.string('title', 50).notNullable().unique()
      table.string('description', 2000)
      table.timestamps()
    })
  }

  down () {
    this.drop('badges')
  }
}

module.exports = BadgeSchema
