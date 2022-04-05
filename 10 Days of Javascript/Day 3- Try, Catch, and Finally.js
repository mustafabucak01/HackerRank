//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
  console.log(Number(s.split("").reverse().join("")));
  }
  catch{
      console.log("s.split is not a function");
      console.log(s);
  }  
}