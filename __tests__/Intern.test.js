const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('should set school via constructor args', () => {
        const obj = new Intern('Jenny', 34, 'jenny@gmail.com', 'CU Boulder');
        const value = 'CU Boulder';
        expect(obj.school).toEqual(value);
    })

    it('should return "Intern" from getRole()', () => {
        const obj = new Intern('Jenny', 34, 'jenny@gmail.com', 'CU Boulder');
        const value = 'Intern';
        expect(obj.getRole()).toEqual(value);
    })

    it('should get school via getSchool()', () => {
        const obj = new Intern('Jenny', 34, 'jenny@gmail.com', 'CU Boulder');
        const value = 'CU Boulder';
        expect(obj.getSchool()).toEqual(value);
        
    })
});
