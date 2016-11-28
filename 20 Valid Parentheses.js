/**
 * @param {string} s
 * @return {boolean}
 */
 
var isValid = function(s) {
    var stack = [],
        matching = ['()', '[]', '{}'],
        opening = ['(', '[', '{'];
    
    for (var i = 0, current, popped; i < s.length; i++) {
        current = s.charAt(i);
        if (opening.indexOf(current) > -1) {
            stack.push(current);
        } else {
            popped = stack.pop();
            if (matching.indexOf(popped + current) === -1) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};