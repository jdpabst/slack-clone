const helpers = require('../util/helpers');
const usersDb = require('../database/users');

async function createUser(username, password) {

  const doesUserAlreadyExist = await usersDb.getUserByUsername(username);

  if(doesUserAlreadyExist){
    throw Error('Username must be unique');
  }
  // hash password
  const hash = helpers.hashPassword(password);

  // create user object
  const newDbUserObj = await usersDb.createUser(username, hash);

  // return the new object to the front end
  return newDbUserObj;
}

async function getAllUsers(){
  
  const allUsers = await usersDb.getAllUsers();

  const publicInfo = allUsers.map(user => {
    return {
      username: user.username
    }
  })
  return publicInfo;
}

async function signIn(username, password){
  const dbUser = await usersDb.getUserByUsername(username);

  if(!dbUser){
    throw Error('Invalid username or password');
  }

  const isCorrectPassword = helpers.comparePasswordToHash(password, dbUser.password);

  if(!isCorrectPassword){
    throw Error('Invalid username or password');
  } 

  // get JWT
  const token = helpers.generateJwt(dbUser.id);

  // return info 
  return {
    token,
    user: dbUser
  }
}

module.exports = {
  createUser,
  getAllUsers,
  signIn  
}
