// Needs express, db, router

const express = require('express')

const db = require('../../db')

const router = express.Router()

// get all kicks
router.get('/', (req, res) => {
  db.getKicks()
    .then(kicks => {
      res.json(kicks)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

// get one kick
router.get('/:id', (req, res) => {
  const id = Number(req.params.id) // uses id string from url and converts to a number
  db.getKick(id)
    .then(kick => {
      res.json(kick)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

// add one new kick
router.post('/', (req, res) => {
  const newkick = {
    brand: req.body.brand,
    model: req.body.model,
    size: req.body.size
  }
  db.addKick(newKick)
    .then(kick => {
      const kickNum = Number(kick)
      db.getKick(kickNum)
        .then(kick => {
          res.json(kick)
        })
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

// update existing kick
router.put('/:id', (req, res) => {
  const updatedKick = {
    brand: req.body.brand,
    model: req.body.model,
    size: req.body.size
  }
  db.updateKick(updatedKick)
    .then(kick => {
      res.json(kick)
    })

    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

// delete kick
router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteKick(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.export = router
