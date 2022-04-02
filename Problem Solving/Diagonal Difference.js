//https://www.hackerrank.com/challenges/diagonal-difference/problem
/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
var firstDiagonal=0;
var secondDiagonal=0;

for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        if(i==j) firstDiagonal+=arr[i][j];
        if(i+j==(arr.length-1)) secondDiagonal+=arr[i][j];
    }
}
return Math.abs(firstDiagonal-secondDiagonal);
}
