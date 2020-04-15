/**
 * Question is given m * n matrix and write a program print
 * it in sprial form
 *  
 */

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
const m = 4; // rows
const n = 4; // columns

const printSprialForm = (m, n, matrix) => {
    let i, k = 0, l = 0;

    while (k < m && l < n) {

        // Print the first row from the remaining rows
        for (i = l; i < n; ++i) {
            console.log(`${matrix[k][i]}`);
        }
        k++;

        for (i = k; i < m; ++i) {
            console.log(matrix[i][n - 1] + " ");
        }
        n--;

        // Print the last row from the remaining rows */ 
        if (k < m) {
            for (i = n - 1; i >= l; --i) {
                // console.log("M is ", m)
                console.log(matrix[m - 1][i] + " ");
            }
            m--;
        }

        // Print the first column from the remaining columns */ 
        if (l < n) {
            for (i = m - 1; i >= k; --i) {
                console.log(matrix[i][l] + " ");
            }
            l++;
        }
    }
}

printSprialForm(m, n, matrix);