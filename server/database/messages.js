const { getDb } = require('./massive');

// Finds the message with the provided id
// Returns an object from the database
async function getMessageById(id) {
    console.log('get message by id db call');
    const db = await getDb();
    const message = await db.messages.find({ id });
    return message[0];
}

// Finds the message with that id and deletes it
// Returns an object
async function deleteMessageById(id) {
    console.log('delete message by id db call');
    const db = await getDb();
    const deletedMessage = await db.messages.destroy({ id });
    return deletedMessage[0];
}

// Returns an object from the database
// keeps track of which user posted & to which group
async function createMessage(postingUserId, groupId, messageText) {
    console.log('create message db call');
    const db = await getDb();
    const newMessage = await db.messages.insert({
        message: messageText,
        groupid: groupId,
        userid: postingUserId
    })
    return newMessage;
}

module.exports = {
    getMessageById,
    deleteMessageById,
    createMessage
}