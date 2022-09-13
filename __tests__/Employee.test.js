const Employee = require("../lib/Employee");

describe("Employee", () => {
    it('should be an instance of Employee', () => {
        const obj = new Employee();
        expect(obj instanceof Employee).toEqual(true);
    })

    it('should set name via constructor args', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampName = 'James';
        expect(obj.name).toEqual(sampName);
    })

    it('should set id via constructor args', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampId = 12;
        expect(obj.id).toEqual(sampId);
    })

    it('should set email via constructor args', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampEmail = 'funguy@gmail.com';
        expect(obj.email).toEqual(sampEmail);
    })

    it('should get name via getName()', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampName = 'James';
        expect(obj.getName()).toEqual(sampName);
    })

    it('should get id via getId()', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampId = 12;
        expect(obj.getId()).toEqual(sampId);
    })

    it('should get email via getEmail()', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const sampEmail = 'funguy@gmail.com';
        expect(obj.getEmail()).toEqual(sampEmail);
    })

    it('should return "Employee" from getRole()', () => {
        const obj = new Employee('James', 12, 'funguy@gmail.com');
        const value = 'Employee';
        expect(obj.getRole()).toEqual(value);
    })
});
