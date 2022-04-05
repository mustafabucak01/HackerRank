//https://www.hackerrank.com/challenges/s10-binomial-distribution-1/problem
function processData(input) {
input=input.split(" ").map(Number)
let boyRatio=input[0]/(input[0]+input[1])
let girlRatio=1-boyRatio

console.log(cumulativeProbability(6,3,boyRatio,girlRatio).toFixed(3));
} 

function cumulativeProbability(x,n,p,q){
    let sum=0;
    
    for(let i=x;i>=(x-n);i--){
        sum+=binomial(x,i,p,q);
    }
    return sum;
}
function binomial(x,n,p,q){
    return combination(x,n)*Math.pow(p,n)*Math.pow(q,x-n)
}
function combination(n,x){
    let r=1;
    for(let i=n;i>(n-x);i--){
       r*=i; 
    }
  return r/factorial(x);  
}
function factorial(n){
    let total=1;
    if(n<=1) return total;
    return n*factorial(n-1); 
}