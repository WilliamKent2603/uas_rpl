// Tests for Library 2 
const { isPalindrome } = require('../src/index');
const assert = require('chai').assert;

describe('Library 2', () => {
    describe('isPalindrome', () => {
        it('should return true for "madam"', () => {
            assert.isTrue(isPalindrome('madam'));
        });

        it('should return true for "A man, a plan, a canal, Panama"', () => {
            assert.isTrue(isPalindrome('A man, a plan, a canal, Panama'));
        });

        it('should return false for "hello"', () => {
            assert.isFalse(isPalindrome('hello'));
        });

        it('should return true for an empty string', () => {
            assert.isTrue(isPalindrome(''));
        });
    });
});
