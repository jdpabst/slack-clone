const helpers = require('../util/helpers');
const usersDb = require('../database/users');

async function createUser(req, res, next) {
  const {newUser} = req.body;
  const db = req.app.get('db');

  // hash password
  const hash = helpers.hashPassword(newUser.password);

  // create user object
  const newDbUserObj = await usersDb.createUser(db, newUser.username, hash);

  return res.status(200).send(newDbUserObj);
}

module.exports = {
  createUser  
};
