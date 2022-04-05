//https://www.hackerrank.com/challenges/mini-max-sum/problem

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
 let minSum=Number.POSITIVE_INFINITY;
 let maxSum=Number.NEGATIVE_INFINITY;
 for(let i=0; i<arr.length;i++){
     let sumInArr=0;
     for(let j=0; j<arr.length;j++){
         if(i!=j) {
            sumInArr+=arr[j];
        }
     }
     if(minSum>sumInArr) minSum=sumInArr;
     if(maxSum<sumInArr) maxSum=sumInArr;
 }
 console.log(minSum + " " +maxSum);
}