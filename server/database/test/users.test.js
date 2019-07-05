const usersDb = require('../users');

describe('users db functions tests', () => {
    test('need a test', () => {
        const username = 'someUsername323423';
        const passwordHash = 'someHash2234234';

        // invoke function with variables
        const newUser = await usersDb.creatUser(username, passwordHash);

        // test results
        expect(newUser).toBeTruthy();
        expect(newUser.username).toEqual(username);
    })
})