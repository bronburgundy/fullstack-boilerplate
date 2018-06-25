const knex = require('knex') // Accesses knex a SQL query builder for JS

const config = require('../knexfile').development

const db = knex(config)