const messagesDb = require('../messages');

describe('messages db functions tests', () => {
    test.only('should create, get, and delete a message', async () => {
        // testing all 3 db functions in this one test since they go well together
        const userId = 1;
        const groupId = 1;
        const message = 'This is a test post!!!'

        // create
        const dbMessage = await messagesDb.createMessage(userId, groupId, message);
        console.log(dbMessage);
        expect(dbMessage).toBeTruthy();

        // get message 
        const getMessageResult = await messagesDb.getMessageById(dbMessage.id);
        expect(getMessageResult).toEqual(dbMessage);

        // delete message
        const deletedMessage = await messagesDb.deleteMessageById(dbMessage.id);
        expect(deletedMessage).toEqual(dbMessage);

        // getting it should no longer work since it's deleted
        const getDeletedMessage = await messagesDb.getMessageById(dbMessage.id);
        expect(getDeletedMessage).toBeFalsy();
    })
})