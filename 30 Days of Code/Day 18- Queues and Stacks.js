//https://www.hackerrank.com/challenges/30-queues-stacks/problem
function Solution(){
this.stack=[]
this.queue=[]
}
Solution.prototype.pushCharacter = function pushCharacter (c) {
  this.stack.push(c);
};

Solution.prototype.enqueueCharacter = function enqueueCharacter (c) {
  this.queue.push(c);
};

Solution.prototype.popCharacter = function popCharacter () {
  return this.stack.pop();
};

Solution.prototype.dequeueCharacter  = function dequeueCharacter () {
  return this.queue.shift();
};