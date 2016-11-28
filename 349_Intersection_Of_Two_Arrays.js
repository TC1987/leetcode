/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Linear runtime. Drawback is the need to create two additional data structures making space complexity n^2 in the worst case.
var intersection = function(nums1, nums2) {
    var myObj = {},
        interArr = [];
    
    // Go through first array and insert each value into myObj.
    nums1.forEach(function(value) {
        myObj[value] = true;
    })
    
    // Go through second array and if value exists in myObj, push into interArr and remove from myObj so that no duplicates are put into interArr.
    nums2.forEach(function(value) {
        if (myObj[value]) {
            interArr.push(value);
            delete myObj[value];
        }
    })
    
    return interArr;
};