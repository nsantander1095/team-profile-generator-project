const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should set office number via constructor args', () => {
        const obj = new Manager('James', 12, 'funguy@gmail.com', 24);
        const value = 24;
        expect(obj.officeNumber).toEqual(value);
    })

    it('should return "Manager" from getRole()', () => {
        const obj = new Manager('James', 12, 'funguy@gmail.com', 24);
        const value = 'Manager';
        expect(obj.getRole()).toEqual(value);
    })

    it('should get office number via getOfficeNumber()', () => {
        const obj = new Manager('James', 12, 'funguy@gmail.com', 24);
        const value = 24;
        expect(obj.getOfficeNumber()).toEqual(value);
    })
});

