//https://www.hackerrank.com/challenges/js10-try-catch-and-finally/problem
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
  s=s.split("").reverse().join("");
  }
  catch(err){
      console.log(err.message);
  }
  finally{
      console.log(s);
  }  
}