const helpers = require('../util/helpers');
const usersDb = require('../database/users');

async function createUser(username, password) {
  // hash password
  const hash = helpers.hashPassword(password);

  // create user object
  const newDbUserObj = await usersDb.createUser(username, hash);

  // return the new object to the front end
  return newDbUserObj;
}

async function getAllUsers(req, res, next){
  
  const allUsers = await usersDb.getAllUsers();

  const publicInfo = allUsers.map(user => {
    return {
      username: user.username
    }
  })
  return res.status(200).send(publicInfo);
}

async function signIn(req, res, next){
  const { user } = req.body;
  if(!user || !user.username || !user.password){
    return res.status(400).send('Sign in request must include a "user" object with username and password')
  }
  const dbUser = await usersDb.getUserByUsernameAndPassword(user.username);
  if(!dbUser){
    return res.status(401).send('Invalid username or password');
  }

  const isCorrectPassword = helpers.comparePasswordToHash(user.password, dbUser.password);
  if(!isCorrectPassword){
    return res.status(401).send('Invalid username or password');
  } 
  return res.status(200).send(dbUser)
}

module.exports = {
  createUser,
  getAllUsers,
  signIn  
}
