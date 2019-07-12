const usersController = require('../users');
const usersDb = require('../../database/users');

describe('users controllers tests', () => {
    // SHOULD RESET THE DATA AFTER TESTING - SEE UNIT_TESTING_AFTERNOON PROJECT FOR MORE INFO afterEach(() => {  
    // })
    test('should create new user properly', async () => {
        const random = Math.random();
        const newUserFromFrontEnd = {
            username: 'someUsername' + random,
            password: 'somepassword' + random
        };
        const userFromDb = await usersController.createUser(newUserFromFrontEnd.username, newUserFromFrontEnd.password);

        expect(userFromDb).toBeTruthy();
        expect(userFromDb.username).toEqual(newUserFromFrontEnd.username);
    });

    test('should return all user objects from the users table', () => {
        const users = usersController.getAllUsers();
        
        expect(users).toBeTruthy();
    });

    test('should return the matching user with correct username and password', async () => {
        const userToLogin = {
            username: 'someUsername',
            password: 'somePassword'
        }
        let userFromDb = await usersDb.getUserByUsername(userToLogin.username);
        if(!userFromDb){
            userFromDb = await usersController.createUser(userToLogin.username, userToLogin.password);
        }
        const userFromDbToSignIn = await usersController.signIn(userToLogin.username, userToLogin.password);
        expect(userFromDb).toBeTruthy();
        expect(userFromDbToSignIn.user.username).toEqual(userToLogin.username);
        expect(userFromDb.id).toEqual(userFromDbToSignIn.user.id);
    })
})