//https://www.hackerrank.com/challenges/30-arrays/problem
function main() {
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(arr.toString().split(",").reverse().join(" "));
}