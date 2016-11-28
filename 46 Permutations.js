/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var permute = function(nums, subnums, arr) {
    arr = arr || [],
    subnums = subnums || [];
    
    if (nums.length === 0) {
        arr.push(subnums);
    }
    
    for (var i = 0; i < nums.length; i++) {
        permute(nums.slice(0, i).concat(nums.slice(i + 1)), subnums.concat(nums[i]), arr);
    }
    
    return arr;
};