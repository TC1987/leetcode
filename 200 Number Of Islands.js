/**
 * @param {character[][]} grid
 * @return {number}
 */
 
var createGrid = function(grid) {
    var container = [],
        row;
    
    for (var i = 0; i < grid.length; i++) {
        row = [];
        for (var j = 0; j < grid[i].length; j++) {
            row.push(grid[i][j]);
        }
        container.push(row);
    }
    
    return container;
}

//  var createGrid = function(grid) {
// 	return grid.map(function(string) {
// 		return string.split('');
// 	})
// }

var numIslands = function(grid) {
	var islandCounter = 0,
		grid = createGrid(grid);

	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === '1') {
				findIsland(i, j, grid);
				islandCounter++;
			}
		}
	}  

	return islandCounter;
};

function findIsland(i, j, grid) {
	grid[i][j] = '0';

	if (i + 1 < grid.length && grid[i + 1][j] === '1') {
		findIsland(i + 1, j, grid);
	}

	if (i - 1 >= 0 && grid[i - 1][j] === '1') {
		findIsland(i - 1, j, grid);
	}

	if (j + 1 < grid[i].length && grid[i][j + 1] === '1') {
		findIsland(i, j + 1, grid);
	}

	if (j - 1 >= 0 && grid[i][j - 1] === '1') {
		findIsland(i, j - 1, grid);
	}
}
