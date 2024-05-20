// App 
// App: Using Library 1 and Library 2

const { factorial } = require('../../library1/src/index');
const { isPalindrome } = require('../../library2/src/index');

// Example usage
console.log(`Factorial of 5: ${factorial(5)}`); // Expected output: 120
console.log(`Is "madam" a palindrome? ${isPalindrome('madam')}`); // Expected output: true
console.log(`Is "hello" a palindrome? ${isPalindrome('hello')}`); // Expected output: false
