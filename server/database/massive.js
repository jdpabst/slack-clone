/**
 * This file handles setting up the massive connection, any file that needs to access the db can import
 * this file and call 'const db = await getDb()', that way we don't have to pass it around on req.app.db.
 * This means the test files can access the db! woohoo
 */

const massive = require('massive');
const config = require('../config');

let db = null;

// each time this function is called, it checks the db variable to see if we have a connection already
// saved/cached in that variable, if not, it takes care of setting up the connection, then returns the db
// object. If we already have the connection set up, then it just returns the db object!
async function getDb() {
    if (!db) {
        db = await massive(config.dbConnection);
    }

    return db;
}

module.exports = {
    getDb
}