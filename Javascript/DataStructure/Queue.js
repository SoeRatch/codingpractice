class Queue{
	constructor(){
		this.items=[];
	}

	// enqueue(item) 

	enqueue(item){
		this.items.push(item);
	}
    
    // dequeue() 
    dequeue(){
    	if(this.isEmpty())
    		return "Underflow";
    	return this.items.shift();
    }

    // front() 
    front(){
    	if(this.isEmpty())
    		return "No element in queue";
    	return this.items[0];
    }

    // isEmpty()
    isEmpty(){
    	return this.items.length==0;
    } 

    // printQueue() 
    printQueue(){
    	let str="";
    	for(let i=0;i<this.items.length;i++){
    		str=str+this.items[i]+" ";
    	}
    	return str;
    }
}

// creating object for queue class 
var queue = new Queue(); 
              
  
// Testing dequeue and pop on an empty queue 
// returns Underflow 
console.log(queue.dequeue()); 
  
// returns true 
console.log(queue.isEmpty()); 
  
// Adding elements to the queue 
// queue contains [10, 20, 30, 40, 50] 
queue.enqueue(10); 
queue.enqueue(20); 
queue.enqueue(30); 
queue.enqueue(40); 
queue.enqueue(50); 
queue.enqueue(60); 
  
// returns 10 
console.log(queue.front()); 
  
// removes 10 from the queue 
// queue contains [20, 30, 40, 50, 60] 
console.log(queue.dequeue()); 
  
// returns 20 
console.log(queue.front()); 
  
// removes 20 
// queue contains [30, 40, 50, 60] 
console.log(queue.dequeue()); 
  
// printing the elements of the queue 
// prints [30, 40, 50, 60] 
console.log(queue.printQueue()); 