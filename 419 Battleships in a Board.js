/**
 * @param {character[][]} board
 * @return {number}
 */

// No extra storage and it goes through the board only once. Yay!
// Key point here is if a value is 'X', only need to use findShip to check if the value to the right or below is an X.
// In main function (countBattleships), if i - 1 or j - 1 is greater than 0, check if value at those positions are an X. Skip if so.
var createGrid = function(board) {
	var main = [],
		inner;

	for (var i = 0; i < board.length; i++) {
		inner = [];
		for (var j = 0; j < board[i].length; j++) {
			inner.push(board[i][j]);
		}
		main.push(inner);
	}

	return main;
}

var findShip = function(i, j, board) {
	if (i + 1 < board.length && board[i + 1][j] === 'X') {
		findShip(i + 1, j, board);
	}

	if (j + 1 < board[i].length && board[i][j + 1] === 'X') {
		findShip(i, j + 1, board);
	}
}

var countBattleships = function(board) {
	var count = 0;

	board = createGrid(board);

    for (var i = 0; i < board.length; i++) {
    	for (var j = 0; j < board[i].length; j++) {
    		if (board[i][j] === 'X') {
    			if (i - 1 >= 0 && board[i - 1][j] === 'X' || j - 1 >= 0 && board[i][j - 1] === 'X') {
    				continue;
    			} else {
    				findShip(i, j, board);
    				count++;
    			}
    		}
    	}
    }

    return count;
};


// // Does not modify the board but creates an object to keep track of visited values.
// var createGrid = function(board) {
// 	var main = [],
// 		inner;

// 	for (var i = 0; i < board.length; i++) {
// 		inner = [];
// 		for (var j = 0; j < board[i].length; j++) {
// 			inner.push(board[i][j]);
// 		}
// 		main.push(inner);
// 	}

// 	return main;
// }

// var findShip = function(i, j, board, visited) {
// 	if (visited[i.toString() + j.toString()]) {
// 		return;
// 	}

// 	visited[i.toString() + j.toString()] = true;

// 	if (i + 1 < board.length && board[i + 1][j] === 'X') {
// 		findShip(i + 1, j, board, visited);
// 	}

// 	if (i - 1 >= 0 && board[i - 1][j] === 'X') {
// 		findShip(i - 1, j, board, visited);
// 	}

// 	if (j + 1 < board[i].length && board[i][j + 1] === 'X') {
// 		findShip(i, j + 1, board, visited);
// 	}

// 	if (j - 1 >= 0 && board[i][j - 1] === 'X') {
// 		findShip(i, j - 1, board, visited);
// 	}
// }

// var countBattleships = function(board) {
// 	var count = 0,
// 		visited = {};

// 	board = createGrid(board);

//     for (var i = 0; i < board.length; i++) {
//     	for (var j = 0; j < board[i].length; j++) {
//     		if (board[i][j] === 'X' && !visited[i.toString() + j.toString()]) {
//     			findShip(i, j, board, visited);
//     			count++;
//     		}
//     	}
//     }

//     return count;
// };


// // Modifies the board but counts ships in one pass.
// var createGrid = function(board) {
// 	var main = [],
// 		inner;

// 	for (var i = 0; i < board.length; i++) {
// 		inner = [];
// 		for (var j = 0; j < board[i].length; j++) {
// 			inner.push(board[i][j]);
// 		}
// 		main.push(inner);
// 	}

// 	return main;
// }

// var findShip = function(i, j, board) {
// 	board[i][j] = '.';

// 	if (i + 1 < board.length && board[i + 1][j] === 'X') {
// 		findShip(i + 1, j, board);
// 	}

// 	if (i - 1 >= 0 && board[i - 1][j] === 'X') {
// 		findShip(i - 1, j, board);
// 	}

// 	if (j + 1 < board[i].length && board[i][j + 1] === 'X') {
// 		findShip(i, j + 1, board);
// 	}

// 	if (j - 1 >= 0 && board[i][j - 1] === 'X') {
// 		findShip(i, j - 1, board);
// 	}
// }

// var countBattleships = function(board) {
// 	var count = 0;

// 	board = createGrid(board);

//     for (var i = 0; i < board.length; i++) {
//     	for (var j = 0; j < board[i].length; j++) {
//     		if (board[i][j] === 'X') {
//     			findShip(i, j, board);
//     			count++;
//     		}
//     	}
//     }

//     return count;
// };


var myBoard = [
'X..X',
'...X',
'...X']

console.log(countBattleships(myBoard));
