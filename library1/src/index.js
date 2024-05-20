// Library 1: Math Operations

/**
 * Calculate the factorial of a number
 * @param {number} n - Non-negative integer
 * @returns {number} - Factorial of n
 */
function factorial(n) {
    if (n < 0) throw new Error('Negative input is not allowed');
    return n <= 1 ? 1 : n * factorial(n - 1);
}

module.exports = { factorial };
