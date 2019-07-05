const express = require('express');
const bodyParser = require('body-parser');
const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'))

// import controllers
const usersController = require('./controllers/users');

//
//Endpoints
//
app.post('/api/createUser', usersController.createUser);


app.listen(config.serverPort, console.log("you are now connected on " + config.serverPort));
