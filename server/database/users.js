const { getDb } = require('./massive');

// get the db ready to use in this file
// this runs once when the server starts up and this file loads
let db;
async function initDb() {
    db = await getDb();
}
initDb();

async function createUser(username, passwordHash) {
    return db.users.insert({ username, password: passwordHash })
}

module.exports = {
    createUser
}