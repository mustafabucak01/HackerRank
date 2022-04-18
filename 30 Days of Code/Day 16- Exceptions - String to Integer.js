//https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem
function main() {
    const S = readLine();
    try{
     console.log(S.match(/[0-9]+/gi).join()) 
    }
    catch{
     console.log("Bad String")  
    }
}