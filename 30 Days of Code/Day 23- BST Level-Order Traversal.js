//https://www.hackerrank.com/challenges/30-binary-trees/problem
  this.levelOrder = function(root) {
    let que=[root]
    let output=[]

    while(que.length){
    let child = que.shift();
    output.push(child.data)
    if(child.left) que.push(child.left)
    if(child.right) que.push(child.right)
    }
    
    console.log(output.join(" "))
	};