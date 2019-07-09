
function createUser(db, username, passwordHash){
    return db.users.insert({username, password: passwordHash})
}
function getAllUsers(db){
    return db.users.find();
}

function signIn(db, id, username, passwordHash){
    return db.users.findOne(id, {fields: [username, passwordHash]})
}

module.exports = {
    createUser,
    getAllUsers,
    signIn
}