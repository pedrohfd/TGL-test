import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Game from 'App/Models/Game'
import GameValidator from 'App/Validators/GameValidator'
import UpdateGameValidator from 'App/Validators/UpdateGameValidator'

export default class GamesController {
  public async index({}: HttpContextContract) {
    const games = await Game.query().select('*')

    return games
  }

  public async create({ request }: HttpContextContract) {
    const game = request.only([
      'game_type',
      'description',
      'range',
      'price',
      'max_number',
      'color',
      'min_cart_value',
    ])

    await request.validate(GameValidator)

    await Game.create(game)

    return game
  }

  public async update({ request }: HttpContextContract) {
    const { gameId } = request.params()
    const updatedGame = request.only([
      'game_type',
      'description',
      'range',
      'price',
      'max_number',
      'color',
      'min_cart_value',
    ])
    await request.validate(UpdateGameValidator)

    const game = await Game.findByOrFail('id', gameId)

    await game.merge(updatedGame)
    await game.save()

    return game
  }

  public async delete({ request }: HttpContextContract) {
    const { gameId } = request.params()

    const game = await Game.findByOrFail('id', gameId)

    await game.delete()

    return 'Game deleted'
  }
}
