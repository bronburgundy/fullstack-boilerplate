// Needs knex, knexfile config, db

const knex = require('knex') // Accesses knex (SQL query builder for JS)

const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  getKicks,
  getKick,
  addKick,
  updateKick,
  deleteKick
}

// get all Kicks
function getKicks () {
  return db('kicks')
    .select()
}

// get one Kick
function getKick (id) {
  return db('kicks').where('id', id)
}

// add a new kick
function addKick (newKick) {
  return db('kicks').insert(newKick)
}

// update an existing kick
function updateKick (updatedKick) {
  return db('kicks').where('id', updatedKick.id).update(updatedKick)
}

// delete a kick
function deleteKick (id) {
  return db('kicks').where('id', id).del()
}
