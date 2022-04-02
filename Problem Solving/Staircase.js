//https://www.hackerrank.com/challenges/staircase/problem

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
 var lineData="";
 for(var i=0;i<n;i++){
     lineData="";
     for(var j=0;j<n;j++){
        if(i+j>=n-1) lineData+="#";
        else lineData+=" ";
     }
     console.log(lineData);
}
}