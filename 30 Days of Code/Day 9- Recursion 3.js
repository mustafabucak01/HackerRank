//https://www.hackerrank.com/challenges/30-recursion/problem
/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial(n) {
    if(n==1) return 1
    return n*factorial(n-1)

}