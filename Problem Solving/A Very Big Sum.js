//https://www.hackerrank.com/challenges/a-very-big-sum/problem
/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
var result=0;
for(var i=0;i<ar.length;i++){
    result+=ar[i];
}
return result;
}
