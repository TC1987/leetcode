// Naive solution.

// var reverseVowels = function(s) {
//     var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
//         wordArr = s.split(''),
//         stack = [],
//         indexes = [];

//     for (var i = 0; i < wordArr.length; i++) {
//         if (vowels.indexOf(wordArr[i]) > -1) {
//             stack.push(wordArr[i]);
//             indexes.push(i);
//         }
//     }

//     for (var j = 0; j < indexes.length; j++) {
//         wordArr[indexes[j]] = stack.pop();
//     }

//     return wordArr.join('');
// };

// Better solution. Linear time complexity with constant space complexity.

var reverseVowels = function(s) {
    // If an array is used to store the vowels, the function will depend on indexOf() which in the worst case would
    // check against every value in the array. By using an object, the lookup time is constant (O(1)).
    var vowels = {
            a: true,
            e: true,
            i: true,
            o: true,
            u: true,
            A: true,
            E: true,
            I: true,
            O: true,
            U: true
        },
        wordArr = s.split(''),
        left = 0,
        right = s.length - 1;

    while (left < right) {
        // Finds the next vowel starting from the left of the string.
        // Need left < right or else vowels will be reversed again back into their original positions.
        while (!vowels[wordArr[left]] && left < right) {
            left++;
        }

        // Finds the next vowel starting from the right of the string.
        // Need left < right or else vowels will be reversed again back into their original positions.
        while (!vowels[wordArr[right]] && left < right) {
            right--;
        }

        // If two vowels are found, a swap is made.
        if (vowels[wordArr[left]] && vowels[wordArr[right]]) {
            var temp = wordArr[left];
            wordArr[left] = wordArr[right];
            wordArr[right] = temp;
            left++;
            right--;
        }
    }

    return wordArr.join('');
}

console.log(reverseVowels('hello'));