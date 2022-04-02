//https://www.hackerrank.com/challenges/js10-switch/problem

function getLetter(s) {
    let letter;
    let setA="aeiou"
    let setB="bcdfg"
    let setC="hjklm"
    if(setA.includes(s[0])) letter="A"
    else if(setB.includes(s[0])) letter="B"
    else if(setC.includes(s[0])) letter="C"
    else letter="D"
    return letter;
}