//https://www.hackerrank.com/challenges/time-conversion/problem
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const patternPM=/PM/gi;
    let hour=Number(s.substr(0,2));
    let time=s.substr(2,6);//01:34:67PM
    if(s.match(patternPM)){
        if(hour!=12) hour+=12;
         hour = hour%24;
    }
    else{
        hour=hour%12;
    }
     if(hour<10) hour="0"+hour;
    return hour+time;
}