exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('kicks').del()
    .then(function () {
      // Inserts seed entries
      return knex('kicks').insert([
        {id: 1, brand: 'Nike', model: 'Air Max 97', size: 8},
        {id: 2, brand: 'Vans', model: 'Sk8 Hi', size: 9},
        {id: 3, brand: 'Adidas', model: 'Gazelle OG', size: 10}
      ])
    })
}
