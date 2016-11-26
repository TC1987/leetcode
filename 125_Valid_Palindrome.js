var isPalindrome = function(s) {
    var expression = /[^a-z0-9]/g,
    	newString = s.toLowerCase().replace(expression, '');

    console.log(newString, newString.split('').reverse().join(''));

    return newString === newString.split('').reverse().join('')
};

isPalindrome("0P");