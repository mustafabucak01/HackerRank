//https://www.hackerrank.com/challenges/30-binary-numbers/problem
function main() {
    const n = parseInt(readLine().trim(), 10);
    
    let number=n.toString(2)
    let count=number.split("0").sort(function(a,b) {return b-a})[0].length
    console.log(count)
}