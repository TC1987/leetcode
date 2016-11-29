/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s === null || s.length === 0) {
        return 0;
    }
    
    var count = 0;
    
    for (var i = s.length; i > 0; i--) {
        if (s.charAt(i - 1) === ' ') {
            if (count === 0) {
                continue;
            } else {
                return count;
            }
        }
        
        count++;
    }
    
    return count;

    // var wordsArr = s.trim().split(/\s+/g);
    
    // return wordsArr[wordsArr.length - 1].length;
};