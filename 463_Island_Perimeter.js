var islandPerimeter = function(grid) {
    var totalPerimeter = 0,
        i,
        j,
        gridLength = grid.length,
        rowLength = grid[0].length;

    for (i = 0; i < gridLength; i++) {
        for (j = 0; j < rowLength; j++) {
            if (grid[i][j] === 1) {
                if (i === 0 || grid[i - 1][j] === 0) {
                    totalPerimeter++;
                }
                if (i === gridLength - 1 || grid[i + 1][j] === 0) {
                    totalPerimeter++;
                }
                if (j === 0 || grid[i][j - 1] === 0) {
                    totalPerimeter++;
                }
                if (j === rowLength - 1 || grid[i][j + 1] === 0) {
                    totalPerimeter++;
                }
            }
        }
    }

    return totalPerimeter;
}