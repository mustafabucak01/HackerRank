//https://www.hackerrank.com/challenges/compare-the-triplets/problem

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
let alicePoint=0;
let bobPoint=0;
for(let i=0; i<a.length; i++){
if(a[i]>b[i]) alicePoint++;
else if(a[i]<b[i]) bobPoint++;
}
return [alicePoint,bobPoint];
}
