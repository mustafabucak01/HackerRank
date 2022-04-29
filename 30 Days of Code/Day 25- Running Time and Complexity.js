//https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem
function processData(input) {
    input=input.split("\n").splice(1).map(T=>{return Number(T)})
    
    for(let i=0;i<input.length;i++){
        let isPrime="Prime"
        if(input[i]==1) isPrime="Not prime"
        else{
    for(let j=2;j<=Math.sqrt(input[i]);j++){
        if(j!=input[i] && input[i]%j==0) {
            isPrime="Not prime"
            break
            }
    }
    }
    console.log(isPrime)
    }
} 