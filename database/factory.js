'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    first: faker.first(),
    last: faker.last()
  }
})

Factory.blueprint('App/Models/Park', async (faker) => {
    return {
      name: faker.name(),
      country: faker.country(),
      state: faker.state(),
      city: faker.city(),
      metro: faker.city(),
      airport: faker.city(),
      family: faker.word(),
      slug: faker.word()
    }
})

Factory.blueprint('App/Models/Attraction', async (faker) => {
  return {
    name: faker.name(),
    type: faker.word(),
    park_id: 1,
    make: faker.word(),
    inversions: 1,
    user_favorites: 0,
    height: '200',
    length: '300',
    defunct: false,
    defunct_date: null
  }
})