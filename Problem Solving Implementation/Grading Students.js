https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
    // Write your code here
for(let i=0; i<grades.length;i++){
    if(grades[i]>=38){
        if(grades[i]%5>2){grades[i]+=5-grades[i]%5}
    }
}
return grades
}