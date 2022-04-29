//https://www.hackerrank.com/challenges/30-nested-logic/problem
function processData(input) {
input=input.split("\n")
   let sum=0
   let returnedDate=input[0].split(" ").map(t=>{return Number(t)})
   let dueDate=input[1].split(" ").map(t=>{return Number(t)})
    
    if(returnedDate[2]-dueDate[2]>0) sum=10000
    else if(returnedDate[2]-dueDate[2]==0) {
    if(returnedDate[1]-dueDate[1]>0) sum=(returnedDate[1]-dueDate[1])*500
    if(sum==0 && returnedDate[0]-dueDate[0]>0) sum=(returnedDate[0]-dueDate[0])*15  
    }
    console.log(sum)
} 