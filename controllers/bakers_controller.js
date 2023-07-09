const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker')
const bakerSeedData = require('../models/baker_seed')



baker.get('/', function(req, res){
  Baker.find()
  .populate('breads')
  .then(foundBakers => res.send(foundBakers))
})

// this route uses the virtual in our baker model
baker.get('/:id', (req, res) => {
  Baker.findById(req.params.id)
  .populate('breads')
  .then(foundBaker => {
    res.render('bakerShow', {
      baker: foundBaker
    })
  })
})



baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData).then(() => {
      res.redirect('/breads')
    })
  })


module.exports = baker