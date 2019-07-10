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
app.post('/api/createUser', async (req, res, next) => {
    const { user } = req.body;
    if (!user || !user.username || !user.password){
        return res.status(400).send('createUser must include a "user" object with username and password attributes');
    }

    // create new user
    const {username, password} = user;
    const newDbUser = await usersController.createUser(username, password);

    return res.status(200).send(newDbUser)
});
app.get('/api/getAllUsers', usersController.getAllUsers);
app.post('/api/signIn', usersController.signIn);


app.listen(config.serverPort, console.log("you are now connected on " + config.serverPort));
