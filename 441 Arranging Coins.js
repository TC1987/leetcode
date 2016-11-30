/**
 * @param {number} n
 * @return {number}
 */

/*
1 = 1
1 + 1 = 2
1 + 1 + 1 = 3
1 + 1 + 1 + 1 = 4
...

Each floor has 1 more step than the previous one.
*/

var arrangeCoins = function(n) {
    var levels = 1,
        counter = 0;

    while (n >= levels) {
        n -= levels++;
        counter++;
    }

    return counter;
};