import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from 'App/Models/User'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  public type: BelongsTo<typeof User>

  @column()
  public game_type: string

  @column()
  public description: string

  @column()
  public range: number

  @column()
  public price: number

  @column()
  public max_number: number

  @column()
  public color: string

  @column()
  public min_cart_value: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
