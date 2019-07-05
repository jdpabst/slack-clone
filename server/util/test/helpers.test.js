const helpers = require('../helpers');

describe("Helpers tests", () => {
    test("hashes password correctly", () => {
        const password = 'myPassword';
        const hash = helpers.hashPassword(password);
        console.log('received resultf rom hash fnction')
        console.log(hash);
        expect(hash).toEqual('this should fail')
    })
})

