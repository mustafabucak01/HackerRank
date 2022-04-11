//https://www.hackerrank.com/challenges/30-inheritance/problem
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
 constructor(firstname, lastname, ids, scoress){
        super(firstname,lastname,ids,scoress)
        this.firstName=firstname
        this.lastName=lastname
        this.id=ids
        this.scores=scoress
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    
    calculate(){
        let sumScore=0;
        for(let i=0;i<this.scores.length;i++){
            sumScore+=this.scores[i]
        }
        sumScore = sumScore/this.scores.length
        if(sumScore>=90) return "O"
        else if(sumScore>=80) return "E"
        else if(sumScore>=70) return "A"
        else if(sumScore>=55) return "P"
        else if(sumScore>=40) return "D"
        else return "T"
    }
}