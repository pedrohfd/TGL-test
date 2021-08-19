import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Game from 'App/Models/Game'

export default class Bet extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Game, {
    foreignKey: 'game_id',
  })
  public type: BelongsTo<typeof Game>

  @column()
  public email: string

  @column()
  public game: string

  @column()
  public color: string

  @column()
  public chosen_numbers: string

  @column()
  public date: string

  @column()
  public page: number

  @column()
  public user_id: number

  @column()
  public price: number

  @column()
  public game_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
