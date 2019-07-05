
function createUser(db, username, passwordHash){
    return db.users.insert({username, passwordHash})
}

module.exports = {
    createUser
}