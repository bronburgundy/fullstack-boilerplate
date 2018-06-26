// Needs server, port, server.listen fn

const server = require('.server')

const port = process.env.PORT || 3000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port 3000', port)
})

// no export
