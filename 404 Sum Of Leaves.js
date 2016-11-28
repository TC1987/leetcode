/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 
var sumOfLeftLeaves = function(root) {
    var sum = 0;
    
    (function recurse(node, isLeft) {
        if (!node) {
            return;
        }
        
        recurse(node.left, true);
        recurse(node.right, false);
        
        if (isLeft && !node.left && !node.right) {
            sum += node.val;
        }
        
    })(root)
    
    return sum;
};