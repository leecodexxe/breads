const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const mongoose = require('mongoose')


const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(morgan('tiny'));


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
// MIDDLEWARE
app.use(methodOverride('_method'))





// ROUTES 

app.get('/', function(req, res) {
    res.send('Welcome to an Awesome App about Bread!')
})


// Breads routes

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.get('*', function(req,res){
    res.send('404')
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},   )
  

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})