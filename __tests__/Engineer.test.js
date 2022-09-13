const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should set GitHub account via constructor args', () => {
        const obj = new Engineer('Bob', 14, 'bob@builder.com', 'BobBuilder');
        const value = 'BobBuilder';
        expect(obj.gitHub).toEqual(value);
    })

    it('should return "Engineer" from getRole()', () => {
        const obj = new Engineer('Bob', 14, 'bob@builder.com', 'BobBuilder');
        const value = 'Engineer';
        expect(obj.getRole()).toEqual(value);
    })

    it('should get GitHub username via getGitHub()', () => {
        const obj = new Engineer('Bob', 14, 'bob@builder.com', 'BobBuilder');
        const value = 'BobBuilder';
        expect(obj.getGitHub()).toEqual(value);
    })
});
