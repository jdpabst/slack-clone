const helpers = require('../util/helpers');
const usersDb = require('../database/users');

async function createUser(req, res) {
  const { newUser } = req.body;

  // hash password
  const hash = helpers.hashPassword(newUser.password);

  // create user object
  const newDbUserObj = await usersDb.createUser(newUser.username, hash);

  // return the new object to the front end
  return res.status(200).send(newDbUserObj);
}

async function getAllUsers(req, res, next){
  const db = req.app.get('db');
  console.log(db);

  // get all users from db
  const allUsers = await usersDb.getAllUsers(db);
  return res.status(200).send(allUsers);
}

async function signIn(req, res, next){
  const { user } = req.body
  const db= req.app.get('db');

  const signedInUser = await usersDb.signIn(db, user.id, user.username, user.hashPassword);
  return res.status(200).send(signedInUser)
}

module.exports = {
  createUser,
  getAllUsers,
  signIn  
}
