const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password) {
    const hash = bcrypt.hashSync(password, saltRounds);
    return hash;
}

function comparePasswordToHash(password, hash) {
    const isTheSame = bcrypt.compareSync(password, hash);
    return isTheSame;
}

module.exports = {
    hashPassword,
    comparePasswordToHash
}