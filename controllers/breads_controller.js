const express = require('express')
const breads = express.Router()

const Bread = require('../models/bread')


// INDEX /breads/
breads.get('/', (req, res ) => {
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
    })
    // res.send(Bread)
})


// SHOW 

breads.get('/:arrayIndex', function(req, res) {
    const index = req.params.arrayIndex;
    const hasBread = Bread[index];
    
    if(hasBread) {
        res.render('Show', {
            bread: Bread[index]
        })
    } else {
        res.send('404')
    }
})


module.exports = breads