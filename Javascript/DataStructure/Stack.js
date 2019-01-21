class Stack{
	constructor(){
		this.items=[];
	}
	// push(item) 
	push(item){
		this.items.push(item);
	}

    // pop()
    pop(){
    	if(this.isEmpty()){
    		return "Underflow";
    	}
    	return this.items.pop();
    } 

    // peek()
    peek(){
    	if(this.isEmpty()){
    		return "No element in stack";
    	}
    	return this.items[this.items.length-1];
    } 

    // isEmpty()
    isEmpty(){
    	return this.items.length==0;
    } 

    // printStack()
    printStack(){
    	let str="";
    	for(let i=0;i<this.items.length;i++){
    		str=str+this.items[i]+" ";
    	}
    	return str;
    } 
}

let stack = new Stack();

console.log(stack.isEmpty());  
  
// returns Underflow 
console.log(stack.pop());  

stack.push(10); 
stack.push(20); 
stack.push(30); 
  
// Printing the stack element 
// prints [10, 20, 30] 
console.log(stack.printStack()); 
  
// returns 30 
console.log(stack.peek()); 
  
// returns 30 and remove it from stack 
console.log(stack.pop()); 
  
// returns [10, 20] 
console.log(stack.printStack()); 
