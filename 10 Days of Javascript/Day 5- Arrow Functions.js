//https://www.hackerrank.com/challenges/js10-arrows/problem
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
return nums.map(value=>{
    if(value%2==0) return value*2
    else return value*3
})    
}