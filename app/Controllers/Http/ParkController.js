'use strict'
const Park = use('App/Models/Park')
//const Logger = use('Logger')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with parks
 */
class ParkController {
  /**
   * Show a list of all parks.
   * GET parks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const parks = await Park.all()
    console.log(JSON.stringify(parks))
    return view.render('Park.parks', { parks: parks.toJSON() })
  }

  /**
   * Render a form to be used for creating a new park.
   * GET parks/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new park.
   * POST parks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single park.
   * GET parks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const park = await Park.query().with('attractions').where('id', params.id).setHidden(['id','created_at','updated_at','slug']).firstOrFail()
    console.log(park.toJSON())
    return view.render('Park.park', { park: park.toJSON() })
  }

  /**
   * Render a form to update an existing park.
   * GET parks/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update park details.
   * PUT or PATCH parks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a park with id.
   * DELETE parks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ParkController
