var reverseString = function(s) {
    var newString = '',
        i;
    
    // Starting from the end of the string, add each character to newString.
    for (i = s.length; i > 0; i--) {
        newString += s.charAt(i - 1);
    }
    
    return newString;
};

// Can also achieve the same thing using built-in methods.

// var reverseString = function(s) {
// 	return s.split('').reverse().join('');
// };