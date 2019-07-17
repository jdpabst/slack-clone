let messageDb = require('../database/messages');

async function postMessageToGroup(message, groupid, userid){
    const postMessage = await messageDb.createMessage(userid, groupid, message);
    return postMessage;
}

module.exports = {
    postMessageToGroup
}