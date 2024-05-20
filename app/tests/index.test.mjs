// Tests for App 
import { assert } from 'chai';
import { factorial } from '../../library1/src/index.mjs';
import { isPalindrome } from '../../library2/src/index.mjs';

describe('App', () => {
    it('should correctly calculate the factorial using Library 1', () => {
        assert.strictEqual(factorial(5), 120);
    });

    it('should correctly check palindromes using Library 2', () => {
        assert.isTrue(isPalindrome('madam'));
        assert.isFalse(isPalindrome('hello'));
    });
});
