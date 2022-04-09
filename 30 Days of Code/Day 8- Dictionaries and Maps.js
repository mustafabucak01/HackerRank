//https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem
function processData(input) {
    input=input.split("\n")
    let inputcount=Number(input.slice(0,1));
    input=input.slice(1);
    let phoneBook= input.slice(0,inputcount),
    lookingFor=input.slice(inputcount),
    phoneObject=[]
    phoneBook.map(function(element){
         element=element.split(" ")
        phoneObject[element[0]]=element[1]
    })  
    lookingFor.forEach(function(name){
        if(phoneObject[name]) console.log(`${name}=${phoneObject[name]}`)
        else console.log("Not found")
    })
    
}