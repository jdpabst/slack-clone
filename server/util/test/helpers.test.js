const helpers = require('../helpers');

describe("Helpers tests", () => {
    test("Should hash a password and be able to compare it accurately to the right password", () => {
        const password = 'myPassword';
        const hash = helpers.hashPassword(password);
      
        // should return something other than the password
        expect(hash).not.toEqual(password);

        // should be able to tell if it's the right password
        const correctPasswordShouldReturnTrue = helpers.comparePasswordToHash(password, hash);
        expect(correctPasswordShouldReturnTrue).toEqual(true);

        const wrongPasswordShouldReturnFalse = helpers.comparePasswordToHash('wrongPasswordHere', hash);
        expect(wrongPasswordShouldReturnFalse).toEqual(false);
    })
})

