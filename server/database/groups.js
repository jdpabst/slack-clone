const { getDb } = require('./massive');

// get the db ready to use in this file
// this runs once when the server starts up and this file loads
let db;
async function initDb() {
    db = await getDb();
}
initDb();

