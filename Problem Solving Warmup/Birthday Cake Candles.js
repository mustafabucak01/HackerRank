//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    let maxValue = candles.reduce((a, b) => { return Math.max(a, b) });
    let result = candles.filter(value => value == maxValue);
    return result.length;
}