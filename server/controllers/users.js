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

module.exports = {
  createUser
};
