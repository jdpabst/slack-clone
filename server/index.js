const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());

massive(config.dbConnection)
.then( db => app.set('db', db))

app.use(express.static(__dirname + './../build'))

//
//Endpoints
//



app.listen(config.serverPort, console.log("you are now connected on " + config.serverPort));
