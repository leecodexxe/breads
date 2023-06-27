const express = require('express');
const morgan = require('morgan');


const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(morgan('tiny'));


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))




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

app.listen(PORT, function(){
    console.log(`http://localhost:${PORT}`)
})