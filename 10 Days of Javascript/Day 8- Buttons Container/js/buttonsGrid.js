btn5.addEventListener("click",function(){
let shifts=[-3,1,1,-3,0,3,-1,-1,3];
let btn_values=[];
for(let i=0;i<shifts.length;i++){
btn_values.push(Number(document.getElementById("btn"+(i+1)).innerHTML));
}
for(let i=0;i<shifts.length;i++){
document.getElementById("btn"+(i+1)).innerHTML=btn_values[i-shifts[i]];
}  
});