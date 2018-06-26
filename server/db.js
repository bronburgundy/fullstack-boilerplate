// Needs knex, knexfile config, db

const knex = require('knex') // Accesses knex a SQL query builder for JS

const config = require('../knexfile').development

const db = knex(config)

module.exports = {
  getKicks,
  getKick,
  addKick,
  updateKick,
  deleteKick

}

// get all
function getKicks () {
  return db('kicks')
    .select()
}

// get one
function getKick () {
  return db('kicks')
    .select()
}

// add one
function addKick () {
  return db('kicks')
    .select()
}

// update one
function updateKick () {
  return db('kicks')
    .select()
}

// delete one
function deleteKick () {
  return db('kicks')
    .select()
}
