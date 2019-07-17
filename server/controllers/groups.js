const helpers = require('../util/helpers');
const groupsDb = require('../database/groups');

async function createGroup(name, userIds){
    const newGroup = await groupsDb.createGroup(name);
    await groupsDb.addUserIdsToGroupUsersTable(newGroup.id, userIds)

    return newGroup;
}

async function getUserGroups(userId){
    // returns an array of group objects //
    const userGroups = await groupsDb.getUserGroupIds(userId);
    return Promise.all(userGroups.map(id => {
        return groupsDb.getGroupById(id);
    }));
}

module.exports = {
    createGroup,
    getUserGroups
}
