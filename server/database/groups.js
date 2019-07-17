const { getDb } = require('./massive');

async function createGroup(name){
    console.log('createGroup db');
    const db = await getDb();
    return db.groups.insert({name})
}

async function addUserIdsToGroupUsersTable(groupId, usersIdArr){
    console.log('addUserIdsToGroupUsersTable db');
    const db = await getDb();
    return Promise.all(usersIdArr.map(userId => {
        return db.groups_users.insert({groupid: groupId, userid: userId}).catch(err => {
            console.log('User ID does not exist:', userId);
        })
    }))
}

async function getUserGroupIds(userId){
    console.log('getUserGroups db');
    const db = await getDb();
    const groupUsers = await db.groups_users.find({userid: userId});
    
    return groupUsers.map(obj => {
        return obj.groupid;
    })
}

async function getGroupById(groupId){
    console.log('getGroupById db')
    const db= await getDb();
    const group = await db.groups.find({id: groupId})
    return group[0];
}

async function getUserIdsForGroup(groupId){
    console.log('getUsersForGroup db');
    const db = await getDb();
    const users = await db.groups_users.find({groupid: groupId});

    return users.map(user => {
        return user.userid
    })
}

async function removeGroupById(groupId){
    console.log('removeGroupById db');
    const db = await getDb();
    const group_users = await db.groups_users.destroy({groupid: groupId});
    console.log(1);
    const group = await db.groups.destroy({id: groupId});
    console.log(2);

    return group;
}

module.exports = {
    createGroup,
    addUserIdsToGroupUsersTable, 
    getUserGroupIds,
    getGroupById,
    getUserIdsForGroup,
    removeGroupById
}


