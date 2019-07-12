const helpers = require('../util/helpers');
const groupsDb = require('../database/groups');

async function createGroup(name, userId){
    const newGroup = await groupsDb.createGroup(name);
     await groupsDb.addUserIdsToGroupUsersTable(newGroup.id, userId)

    return newGroup;
}

async function getUserGroups(userId){
    const userGroups = await groupsDb.getUserGroups(userId);
    console.log(userGroups);
    return userGroups;
}

module.exports = {
    createGroup,
    getUserGroups
}
