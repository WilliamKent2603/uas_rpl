// Tests for App 
const { factorial } = require('../../library1/src/index');
const { isPalindrome } = require('../../library2/src/index');
const assert = require('chai').assert;

describe('App', () => {
    it('should correctly calculate the factorial using Library 1', () => {
        assert.strictEqual(factorial(5), 120);
    });

    it('should correctly check palindromes using Library 2', () => {
        assert.isTrue(isPalindrome('madam'));
        assert.isFalse(isPalindrome('hello'));
    });
});
