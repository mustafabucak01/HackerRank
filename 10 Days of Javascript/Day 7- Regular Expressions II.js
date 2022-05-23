//https://www.hackerrank.com/challenges/js10-regexp-2/problem
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    let re=new RegExp(/([a-z]{2,3}[\.]{1})[a-z]+$/gi)
    return re
}