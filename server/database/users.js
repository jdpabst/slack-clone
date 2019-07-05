const { getDb } = require('./massive');

async function createUser(username, passwordHash) {
    const db = await getDb();
    return db.users.insert({ username, password: passwordHash })
}

module.exports = {
    createUser
}