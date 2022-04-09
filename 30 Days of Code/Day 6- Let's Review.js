//https://www.hackerrank.com/challenges/30-review-loop/problem
function processData(input) {
    let str=input.split("\n").slice(1);
    
    str.forEach(function(element){
    let oddstr="",
    evenstr="";
    for(let i=0;i<element.length;i++){
     i % 2 ? oddstr+=element[i] : evenstr+=element[i];
    }
    console.log(`${evenstr} ${oddstr}`);
    });
}