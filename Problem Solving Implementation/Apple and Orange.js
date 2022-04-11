//https://www.hackerrank.com/challenges/apple-and-orange/problem
/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleOnHouse=0, orangeOnHouse=0;
for(let i=0;i<apples.length;i++){
    if((apples[i]+a)>=s &&(apples[i]+a)<=t ) appleOnHouse++;
}
console.log(appleOnHouse);
for(let i=0;i<oranges.length;i++){
    if((oranges[i]+b)>=s &&(oranges[i]+b)<=t ) orangeOnHouse++;
}
console.log(orangeOnHouse);
}