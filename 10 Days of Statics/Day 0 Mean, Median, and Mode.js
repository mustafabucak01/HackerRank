//https://www.hackerrank.com/challenges/s10-basic-statistics/problem
function processData(input) {
    //Enter your code here
let implodedArray=input.split("\n")
let arrayCount=parseInt(implodedArray[0],10)
let array=implodedArray[1].split(" ").map(function(item) {
    return parseInt(item, 10);
}).sort(function(a, b){return a - b});
let sum=array.reduce((acc,number)=>acc+=number,0)
console.log(sum/arrayCount)

let middleNumber=(array[(arrayCount/2)-1]+array[(arrayCount/2)])/2

console.log(middleNumber)


let mostHigherCount=-1;
let mostHigherNumber=0
let multipleItems=array.reduce((acc,number)=>{
if(!acc[number])
    acc[number]=[]

let numberLength=acc[number].length;
if(mostHigherCount<numberLength) {mostHigherCount=numberLength; mostHigherNumber=number}

acc[number].push(numberLength+1)
return acc
},{})
console.log(mostHigherNumber)
}