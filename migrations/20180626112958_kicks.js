exports.up = (knex, Promise) => {
  return knex.schema.createTable('kicks', table => {
    table.increments('id').primary()
    table.string('brand')
    table.string('model')
    table.integer('size')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('kicks')
}
