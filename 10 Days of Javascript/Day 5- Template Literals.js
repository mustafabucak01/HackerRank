//https://www.hackerrank.com/challenges/js10-template-literals/problem
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const [A,P]=expressions
    const root=Math.sqrt(Math.pow(P,2)-16*A)
    const s1=(P+root)/4
    const s2=(P-root)/4
    
    return [s2,s1]
}