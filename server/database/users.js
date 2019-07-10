const { getDb } = require('./massive');

async function createUser(username, passwordHash) {
    const db = await getDb();
    return db.users.insert({ username, password: passwordHash })
}
async function getAllUsers(){
    const db = await getDb();
    return db.users.find();
}

async function getUserByUsernameAndPassword(username){
    const db = await getDb();
    return db.users.findOne({username})
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByUsernameAndPassword
}