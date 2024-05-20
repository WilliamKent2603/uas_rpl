// Library 2 
// Library 2: String Operations

/**
 * Check if a string is a palindrome
 * @param {string} str - Input string
 * @returns {boolean} - True if str is a palindrome, false otherwise
 */
function isPalindrome(str) {
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { isPalindrome };
