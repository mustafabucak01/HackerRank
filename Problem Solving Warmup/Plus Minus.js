//https://www.hackerrank.com/challenges/plus-minus/problem
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
var positiveNumbers=0;
var negativeNumbers=0;
var zeroNumbers=0;

var totalNumbers=arr.length;
for(var i=0;i<totalNumbers;i++){
    if(arr[i]>0) positiveNumbers++;
    else if(arr[i]<0) negativeNumbers++;
    else zeroNumbers++
}
console.log(positiveNumbers/totalNumbers);
console.log(negativeNumbers/totalNumbers);
console.log(zeroNumbers/totalNumbers);
}