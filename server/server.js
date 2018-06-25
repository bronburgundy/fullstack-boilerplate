const path = require('path') // Accesses path module which provides utilities for working with file and directory paths

const express = require('express') // Accesses express framework

const kicksRoutes = require('.routes/kicks') // Accesses main routes file

const server = express() // Hooks server up to express

// Middleware
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/kicks', kicksRoutes) // Mounts routes on specific endpoint

module.export = server
