const express = require('express');
const bodyParser = require('body-parser');
const app = module.exports = express();
const config = require('./config.js');

app.use(bodyParser.json());
app.use(express.static(__dirname + './../build'))

// import controllers
const helpers = require('./util/helpers')
const usersController = require('./controllers/users');
const groupsController = require('./controllers/groups');
//
//Endpoints
//
app.post('/api/createUser', async (req, res, next) => {
    console.log('createUser endpoint')
    const { user } = req.body;
    if (!user || !user.username || !user.password){
        return res.status(400).send('createUser must include a "user" object with username and password attributes');
    }

    // create new user
    const {username, password} = user;
    const newDbUser = await usersController.createUser(username, password);

    return res.status(200).send(newDbUser)
});

app.get('/api/getAllUsers', async (req, res, next) => {
    console.log('getAllUsers endpoint');
    const users = await usersController.getAllUsers();
    return res.status(200).send(users);
});

app.post('/api/signIn', async (req, res, next) => {
    console.log('signIn endpoint');
    const { user } = req.body;
    if(!user || !user.username || !user.password){
        return res.status(400).send('Sign in request must include a "user" object with username and password')
    }

    let dbUser = null;
    try{
        dbUser = await usersController.signIn(user.username, user.password);
    }catch(e){
        return res.status(401).send(JSON.stringify(e));
    }
    return res.status(200).send(dbUser)
    
});

// used when a user posts a message
app.post('/api/createGroup', async (req, res, next) => {
    console.log('create group endpoint');

    // user must be logged in to use this endpoint
    const { token } = req.body;
    if (!token) return res.status(401).send('You must provide a user token');
    const userId = helpers.getUserFromToken(token);

    const { group } = req.body;
    if (!group || !group.name || !group.userIds) 
        return res.status(400).send('You must provide a "group" object with name and userIds attributes')
    
    const {name, userIds} = group;
    const newDbGroup = await groupsController.createGroup(name, userIds);

    return res.status(200).send(newDbGroup);

})

app.post('/api/getGroupsForUser', async (req, res, next) => {
    console.log('getGroupsForUser endpoint');
    const { token } = req.body;
    if(!token) return res.status(401).send('You must provide a user token');
    const userId = helpers.getUserFromToken(token);

    const groups = await groupsController.getUserGroups(userId);

    return res.status(200).send(groups);
})


app.listen(config.serverPort, console.log("you are now connected on " + config.serverPort));
