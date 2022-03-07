// add.spec.js
const add = require('./add');
 
describe('add', () => {
    test('correctly returns the sum of two numbers', () => {
        expect(add(2, 2)).toBe(4);
    });
    test.skip('correctly returns the sum of two numbers', () => {
        expect(add(5, 10)).toBe(15);
    });
});
