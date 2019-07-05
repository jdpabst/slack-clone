const app = require('./index.js');
const helpers = require('../util/helpers');
const usersDb = require('../database/users');

async function createUser(req, res, next) {
  const {newUser} = req.body;

  // hash password
  const hash = helpers.hashPassword(newUser.password);

  // create user object
  const newUser = await usersDb.createUser(newUser.usernae, hash);

  return newUser;
}

module.exports = {
  createUser  
};
