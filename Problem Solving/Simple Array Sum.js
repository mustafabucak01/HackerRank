//https://www.hackerrank.com/challenges/simple-array-sum/problem
/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
     let sum_of_array = 0;
    for(let i = 0 ; i < ar.length ; i++){
        sum_of_array += ar[i];
    }
    return sum_of_array;
}