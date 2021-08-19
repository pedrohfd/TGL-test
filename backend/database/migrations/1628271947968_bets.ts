import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bets extends BaseSchema {
  protected tableName = 'bets'

  public async up() {
    this.schema.createTable(this.tableName, table => {
      table.increments('id')
      table.string('email').notNullable()
      table.string('color').notNullable()
      table.string('game').notNullable()
      table.string('chosen_numbers').notNullable()
      table.string('date').notNullable()
      table.float('price').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
