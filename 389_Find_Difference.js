/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

var findTheDifference = function(s, t) {
    var myObj = {},
        sChar,
        tChar,
        i;
    
    for (i = 0; i < s.length; i++) {
        sChar = s.charAt(i);
        tChar = t.charAt(i);
        
        if (myObj[sChar]) {
            myObj[sChar]++;
        } else {
            myObj[sChar] = 1;
        }
        
        if (myObj[tChar]) {
            myObj[tChar]--;
        } else {
            myObj[tChar] = -1;
        }
    }
    
    var lastChar = t.charAt(i);
    
    if (myObj[lastChar]) {
        myObj[lastChar]--;
    } else {
        myObj[lastChar] = -1;
    }
    
    for (var key in myObj) {
        if (myObj[key] === -1) {
            return key;
        }
    }
};