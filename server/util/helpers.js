const jwt = require('jsonwebtoken');
const config = require('../config');
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

function generateJwt(userId){
    const token = jwt.sign(userId, config.secret);
    return token;
}

function getUserFromToken(token){
    const userId = jwt.verify(token, config.secret);
    return userId;
}

module.exports = {
    hashPassword,
    comparePasswordToHash,
    generateJwt,
    getUserFromToken
}