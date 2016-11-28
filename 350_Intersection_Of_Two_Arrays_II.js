/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    var myObj = {},
        interArr = [];
    
    nums1.forEach(function(value) {
        if (myObj[value]) {
            myObj[value]++;
        } else {
            myObj[value] = 1;
        }
    })
    
    nums2.forEach(function(value) {
        if (myObj[value]) {
            interArr.push(value);
            myObj[value]--;
        }
    })
    
    return interArr;
};