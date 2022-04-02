//https://www.hackerrank.com/challenges/js10-arrays/problem
function getSecondLargest(nums) {
    //delete duplicate values from array
    nums = nums.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
    var max = Math.max.apply(null, nums); //find the max value array
    nums.splice(nums.indexOf(max), 1); // remove max value from the array
    return Math.max.apply(null, nums); //get second max value of the array
}