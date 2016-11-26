var maxDepth = function(root) {
    var maxDepth = 0;
    
    // IIFE
    (function find(node, depth) {
        if (node) {
            find(node.left, depth + 1);
            if (depth > maxDepth) {
                maxDepth = depth;
            }
            find(node.right, depth + 1)
        }
    })(root, 1);
    
    return maxDepth;
};