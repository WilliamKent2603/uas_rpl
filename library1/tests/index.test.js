const { factorial } = require('../src/index');
const assert = require('chai').assert;

describe('Library 1', () => {
    describe('factorial', () => {
        it('should return 1 for 0', () => {
            assert.strictEqual(factorial(0), 1);
        });

        it('should return 1 for 1', () => {
            assert.strictEqual(factorial(1), 1);
        });

        it('should return 120 for 5', () => {
            assert.strictEqual(factorial(5), 120);
        });

        it('should throw an error for negative input', () => {
            assert.throws(() => factorial(-1), Error, 'Negative input is not allowed');
        });
    });
});
