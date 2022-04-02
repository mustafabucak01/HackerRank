//https://www.hackerrank.com/challenges/js10-loops/problem
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  let vowels="aeiou"
  let vowelsout="";
  for(let i=0;i<s.length;i++){
      if(vowels.includes(s[i])){
          console.log(s[i])
        }
        else vowelsout+=s[i]+"\n"
  }
  console.log(vowelsout.trim()) 
}