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
  static async run () {
    console.log('running park')
    const parks = await Factory.model('App/Models/Park').createMany(3);
    console.log('finished park')
  }
}

module.exports = ParkSeeder
