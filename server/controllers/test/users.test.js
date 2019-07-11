const usersController = require('../users');

describe('users controllers tests', () => {
    // SHOULD RESET THE DATA AFTER TESTING - SEE UNIT_TESTING_AFTERNOON PROJECT FOR MORE INFO afterEach(() => {  
    // })
    test('should create new user properly', async () => {
        const newUserFromFrontEnd = {
            username: 'someUsername999u234',
            password: 'somepassword99u2823423'
        };
        const userFromDb = await usersController.createUser(newUserFromFrontEnd.username, newUserFromFrontEnd.password);

        expect(userFromDb).toBeTruthy();
        expect(userFromDb.username).toEqual(newUserFromFrontEnd.username);
    });

    test('should return all user objects from the users table', () => {
        const users = await usersController.getAllUsers();
        
        expect(users).toBeTruthy();
    });

    test('should return the matching user with correct username and password', async () => {
        const userToLogin = {
            username: 'someUsername',
            password: 'somePassword'
        }

        // not sure how to add the test user to the db....
        const newUser = await usersController.createUser(userToLogin.username, userToLogin.password)
        const userFromDb = await usersController.signIn()

        expect(userFromDb).toBeTruthy();
        expect(userFromDb.username).toEqual(userToLogin.username);
        expect(userFromDb.password).toEqual(userToLogin.password);
        expect(userFromDb.id).toEqual(userToLogin.id);
    })
})