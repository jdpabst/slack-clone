const groupController = require('../groups');
const userController = require('../../controllers/users');
const usersDatabase = require('../../database/users');
const groupDatabase = require('../../database/groups');

describe('groups controllers tests', () => {
    test('should create a group in groups table and add group id and user ids to groups_user table', async () => {
        const newGroup = {
            name: 'groupName',
            userId: [1, 2, 3]
        };

        const addGroup = await groupController.createGroup(newGroup.name, newGroup.userId);
        const userIdsForGroup = await groupDatabase.getUserIdsForGroup(addGroup.id);

        expect(addGroup.name).toEqual(newGroup.name);
        expect(userIdsForGroup.length).toEqual(newGroup.userId.length);
    })
    
    test('should get all groups user is a part of', async () => {
        // create test user if it doesn't already exist
        const user = {
            username: 'userToTestGroupsId',
            password: 'catzzzz'
        };
        let newUser = await usersDatabase.getUserByUsername(user.username);
        if(!newUser){
            newUser = await userController.createUser(user.username, user.password);
        }

        // delete any group relationships this user may have in the db
        const getInitialGroups = await groupController.getUserGroups(newUser.id);
        for(i = 0; i < getInitialGroups.length; i++){
            await groupDatabase.removeGroupById(getInitialGroups[i].id);
        }

        // create a new group for this user to be part of
        const group = {
            name: 'Test Group',
            userIds: [newUser.id]
        }
        const createGroup = await groupController.createGroup(group.name, group.userIds);

        // get the groups this user is part of. Should only be the one we created just now
        const getGroups = await groupController.getUserGroups(newUser.id);
        expect(createGroup.id).toEqual(getGroups[0].id);
    })
})