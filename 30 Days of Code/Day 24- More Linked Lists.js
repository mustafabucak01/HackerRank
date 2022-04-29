 //https://www.hackerrank.com/challenges/30-linked-list-deletion/problem
 this.removeDuplicates=function(head){
      let start=head
      let output=[]
      while(start){
          if(!output.includes(start.data))
          output.push(start.data)
          start=start.next
      }
      console.log(output.join(" "))
    }