'use strict'

/*
|--------------------------------------------------------------------------
| ParkSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ParkSeeder {
  async run () {
    await Factory.model('App/Models/Park').createMany(3);
  }
}

module.exports = ParkSeeder
