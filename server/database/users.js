
function createUser(db, username, passwordHash){
    return db.users.insert({username, password: passwordHash})
}

module.exports = {
    createUser
}