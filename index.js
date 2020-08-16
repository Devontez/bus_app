var express = require('express');
var app = express();

const authroutes=require('./src/routes/auth');
const webroutes=require('./src/routes/web');
const mongoose =require ('mongoose');
const dotenv = require('dotenv')


const { config, engine } = require('express-edge');
config({ cache: process.env.NODE_ENV === 'production' });
 
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', 'src/views');

var cors = require('cors');
app.use(cors());
//const authenticate=require('./routes/token')


dotenv.config()

app.use(express.static('public'));
 
const InitiateMongoServer = require("./config/database");

// Initiate Mongo Server
InitiateMongoServer();


app.use(express.json())


app.use('/api/users',authroutes)
app.use('/', webroutes);

app.listen(3000, function () {
  console.log('BussApp is now running: http://localhost:3000');
});