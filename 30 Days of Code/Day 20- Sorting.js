//https://www.hackerrank.com/challenges/30-sorting/problem
function main() {
    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    // Write your code here
    let countSwaps=0
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a.length-1;j++){
            if(a[j]>a[j+1]){
                 a.splice(j, 1, a.splice(j+1, 1, a[j])[0])
                 countSwaps++
            }
        }
        if(countSwaps == 0) break;
    }
    console.log(`Array is sorted in ${countSwaps} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length-1]}`)
}