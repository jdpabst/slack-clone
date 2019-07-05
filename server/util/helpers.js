const {promisify} = require('util')
const bcrypt = require('bcrypt');
const saltRounds = 10;

function hashPassword(password){
    return password;
    // bcrypt.hash(password, saltRounds, (err, hash) => {
    //     console.log('inside cb function');
    //     console.log(hash);
    //     return hash;
    // })
}

function comparePasswordToHash(password, hash){
    return true;
    // bcrypt.compare(password, hash, function(err, res) {
    //     return res;
    // });
}

module.exports = {
    hashPassword,
    comparePasswordToHash
}