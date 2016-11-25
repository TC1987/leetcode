var fizzBuzz = function(n) {
    var myArr = [];
    
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            myArr.push('FizzBuzz');
        } else if (i % 3 === 0) {
            myArr.push('Fizz');
        } else if (i % 5 === 0) {
            myArr.push('Buzz');
        } else {
            myArr.push(i.toString());
        }
    }
    
    return myArr;
};