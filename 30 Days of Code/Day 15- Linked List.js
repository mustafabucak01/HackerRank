https://www.hackerrank.com/challenges/30-linked-list/problem
	this.insert=function(head,data){
          //complete this method
        if(head == null) return new Node(data)
        head.next=this.insert(head.next,data)
        return head
    };