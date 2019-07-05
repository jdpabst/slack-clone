const usersDb = require('../users');

describe('users db functions tests', () => {
    test('should create a user', async () => {
        const username = 'someUsername323423';
        const passwordHash = 'someHash2234234';

        // invoke function with variables
        const newUser = await usersDb.createUser(username, passwordHash);

        // result from db should have the same parameters that were passed in
        expect(newUser).toBeTruthy();
        expect(newUser.username).toEqual(username);
        expect(newUser.password).toEqual(passwordHash);
    })
})