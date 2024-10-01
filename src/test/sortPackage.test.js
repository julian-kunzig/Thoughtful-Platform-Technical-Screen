const sortPackage = require('../src/sortPackage');

describe('Package Sorting Function', () => {

    test('Sorts package to Stack A based on volume >= 1,000,000 cm³', () => {
        expect(sortPackage({ width: 200, height: 200, length: 25, mass: 10 })).toBe('Bulky package to Stack A');
    });

    test('Sorts package to Stack A if any dimension >= 150 cm', () => {
        expect(sortPackage({ width: 150, height: 50, length: 50, mass: 20 })).toBe('Bulky package to Stack A');
    });

    test('Sorts package to Stack B if volume < 1,000,000 cm³ and all dimensions < 150 cm', () => {
        expect(sortPackage({ width: 100, height: 50, length: 50, mass: 5 })).toBe('Regular package to Stack B');
    });

    test('Throws error for invalid inputs', () => {
        expect(() => sortPackage({ width: 0, height: 50, length: 50, mass: 10 })).toThrow();
    });
});