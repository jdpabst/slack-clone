
function createUser(username, passwordHash){
    return db.users.insert({username, passwordHash})
}

module.exports = {
    creatUser
}