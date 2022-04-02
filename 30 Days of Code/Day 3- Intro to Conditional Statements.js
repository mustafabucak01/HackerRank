//https://www.hackerrank.com/challenges/30-conditional-statements/problem
function main() {
    const N = parseInt(readLine().trim(), 10);
    if (N%2==1 || (N>=6 && N<=20) ) console.log("Weird")
    else console.log("Not Weird")
}
