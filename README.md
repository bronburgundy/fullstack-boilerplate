# fullstack-boilerplate

## Process

# Server + DB

1. Create Repo in Github W/ gitignore and license
2. Clone repo in terminal
3. yarn init
4. yarn add knex sqlite3 express
5. mkdir server client tests
6. code .
7. In server folder create: routes folder, index.js, server.js, db.js files
8. Add code to index and server files. Make sure all routes are correct!
9. yarn knex init
yarn knex migrate:make 'table-name'
yarn knex seed:make 'data-file-name'
10. yarn add -D nodemon
11. In package.json add scripts for:
   "scripts": {
      "dev": "nodemon server & webpack --watch",
      "start": "node server/index",
      "knex": "knex"
12. In knexfile.js add 'useNullAsDefault: true' in development
13. In routes folder create 'name-of-routes.js' file
14. Write routes in 'name-of-routes.js' file and functions in db.js file at the same time... GET, POST, PUT, DELETE
15. Run server to make sure working. Fix any errors.
16. TEST routes using Postman
17. yarn add jest supertest
18. create tests.js file
19. write tests for functions in db.js
20. TEST functions 


# Client / Browser

1. yarn add react react-dom react-router-dom webpack webpack-cli babel-core babel-loader babel-preset-env babel-preset-react superagent
2. In client add components folder, index.js file, webpack.config.js
3. In components create App.jsx file
3. Add code to index.js
