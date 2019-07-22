'use strict'

/*
|--------------------------------------------------------------------------
| AttractionSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class AttractionSeeder {
  static async run () {
    console.log('running attraction')
    await Factory.model('App/Models/Attraction').createMany(20);
    console.log('attraction finished')
  }
}

module.exports = AttractionSeeder
