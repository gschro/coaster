'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const UserSeeder = use('./UserSeeder.js')
const ParkSeeder = use('./ParkSeeder.js')
const AttractionSeeder = use('./AttractionSeeder.js')

class DatabaseSeeder {
  async run() {
    console.log('starting Database seeder')
    // Put yours seeders in the desired order
    await UserSeeder.run()
    await ParkSeeder.run()
    await AttractionSeeder.run()
    console.log('finished Database seeder')
    process.exit(0);
  }
}

module.exports = DatabaseSeeder
