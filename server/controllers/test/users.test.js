const usersController = require('../users');

describe('users controllers tests', () => {
    test('need a test', () => {
        const newUserFromFrontEnd = {
            username: 'someUsername999u234',
            password: 'somepassword99u2823423'
        };
        const userFromDb = await usersController.createUser();

        expect(userFromDb).toBeTruthy();
        expect(userFromDb.username).toEqual(newUserFromFrontEnd.username);
    })
})