const { getDb } = require('./massive');

async function createUser(username, passwordHash) {
    console.log('createUser db call: ', username, passwordHash);
    const db = await getDb();
    return db.users.insert({ username, password: passwordHash })
}
async function getAllUsers(){
    console.log('getAllUsers db call')
    const db = await getDb();
    return db.users.find();
}

async function getUserByUsername(username){
    console.log('getUserByUsername: ', username)
    const db = await getDb();
    return db.users.findOne({username})
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByUsername
}