class Node{
	constructor(element){
		this.element=element;
		this.next=null;
	}
}
class LinkedList {
	constructor(){
		this.head=null;
		this.size=0;
	}
    // add(element)

    	add(element){

    		let node = new Node(element);
    		let current = this.head;

    		if(this.head == null){
    			this.head=node;
    		} else{
    			while(current.next){
    				current=current.next;
    			}
    			current.next=node;
    		}
    		this.size++;

    	} 
    // insertAt(element, location) 

    insertAt(element,index){
    	if(index>0 && index>this.size){
    		return False;
    	}

    	let node = new Node(element);
    	let prev,curr,it=0;

    	curr=this.head;
    	if(index==0){
    		node.next=curr;
    		this.head = node;
    	}
    	else{
    		while(it<index){
    			it++;
    			prev=curr;
    			curr=curr.next;
    		}
    		node.next=curr;
    		prev.next=node;
    	}
    	this.size++;

    }

    // removeFrom(location) 
    removeFrom(index){
    	if(index>0 && index>this.size){
    		return -1;
    	}
    	let prev,curr,it=0;
    	curr=this.head;
    	if(index==0){
    		this.head=curr.next;
    	}
    	else{
    		while(it<index){
    			it++;
    			prev=curr;
    			curr=curr.next;
    		}
    		prev.next=curr.next;
    	}
    	this.size--;
    	return curr.element;
    }

    // removeElement(element) 

    removeElement(element){
    	let curr = this.head;
    	let prev=null;
    	
    	while(curr!=null){
    		if(curr.element==element){
    			if(prev==null){
    				this.head=curr.next;
    			}
    			else{
    				prev.next=curr.next;
    			}
    			this.size--;
    			return curr.element;
    		}
    		prev=curr;
    		curr=curr.next;
    	}
    	return -1;
    }
  
    // Helper Methods 
    // isEmpty 

    	isEmpty(){
    		return this.size==0;
    	}

    // size_Of_List 
    	size_of_list(){
    		console.log(this.size);
    	}

    // PrintList 

    	printList(){
    		let curr=this.head;
    		let str="";
    		while(curr){
    			str=str+curr.element+" ";
    			curr=curr.next;
    		}

    		console.log(str);
    	}



	indexOf(element){
		let count = 0;
		let curr= this.head;

		while(curr!=null){
			if(curr.element=element){
				return count;
			}
			count++;
			curr=curr.next;
		}
		return -1;
	}



	
}

var ll = new LinkedList();

console.log(ll.isEmpty());

ll.add(10); 
  
// prints 10 
ll.printList(); 
  
// returns 1 
ll.size_of_list(); 
  
// adding more elements to the list 
ll.add(20); 
ll.add(30); 
ll.add(40); 
ll.add(50); 
  
// returns 10 20 30 40 50 
ll.printList(); 
  
// prints 50 from the list 
console.log("is element removed ?" + ll.removeElement(50)); 
  
// prints 10 20 30 40 
ll.printList(); 
  
// returns 3 
console.log("Index of 40 " + ll.indexOf(40)); 
  
// insert 60 at second positon 
// ll contains 10 20 60 30 40 
ll.insertAt(60, 2); 
  
ll.printList(); 
  
// returns false 
console.log("is List Empty ? " + ll.isEmpty()); 
  
// remove 3rd element from the list 
console.log(ll.removeFrom(3)); 
  
// prints 10 20 60 40 
ll.printList(); 
































