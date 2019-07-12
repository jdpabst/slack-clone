const { getDb } = require('./massive');

async function createGroup(name){
    console.log('createGroup db');
    const db = await getDb();
    return db.groups.insert({name})
}

async function addUserIdsToGroupUsersTable(groupId, usersIdArr){
    console.log('addUserIdsToGroupUsersTable db');
    const db = await getDb();
    usersIdArr.map(userId => {
        return db.groups_users.insert({groupid: groupId, userid: userId}).catch(err => {
            console.log('User ID does not exist:', userId);
        })
    })
}

async function getUserGroups(userId){
    console.log('getUserGroups db');
    const db = await getDb();
    const groupUsers = await db.groups_users.find({userid: userId});
    
    const groups = await Promise.all(
        groupUsers.map(async groupObj => {
            const group = await db.groups.find({id: groupObj.groupid})
            return group[0];
    }))
    return groups;
}

module.exports = {
    createGroup,
    addUserIdsToGroupUsersTable, 
    getUserGroups
}


