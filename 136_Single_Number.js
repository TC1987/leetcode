// Linear but n space.

// var singleNumber = function(nums) {
//     var myObj = {};
    
//     for (var i = 0; i < nums.length; i++) {
//         if (myObj[nums[i]]) {
//             delete myObj[nums[i]];
//         } else {
//             myObj[nums[i]] = true;
//         }
//     }
    
//     return parseInt(Object.keys(myObj)[0]);
// };

// Linear and constant space complexity. Uses bits (XOR).
var singleNumber = function(nums) {
    var current = 0;
    
    for (var i = 0; i < nums.length; i++) {
        current ^= nums[i];
    }
    
    return current;
};