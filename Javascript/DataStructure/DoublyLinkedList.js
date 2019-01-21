class Node{
	constructor(element){
		this.element=element;
		this.prev=null;
		this.next=null;
	}
}

class DoublyLinkedList{
	constructor(){
		this.head=null;
		this.size=0;
	}

	add(element){
		let node = new Node(element);
		let curr = this.head;

		if(curr==null){
			this.head=node;
		}
		else{
			while(curr.next){
				curr=curr.next;
			}
			curr.next=node;
			node.prev=curr;

		}
		this.size++;
	}

	insertAt(element,index){
		if(index>0 && index>this.size){
			return False;
		}
		let node=new Node(element);
		let curr=this.head;
		let previous;
		let it =0;
		if(index==0){
			node.next=curr;
			curr.prev=node;
		}
		else{
			while(it<index){
				it++;
				previous=curr;
				curr=curr.next;
			}
			node.next=curr;
			curr.prev=node;

			node.prev=previous;
			previous.next=node;
		}
		this.size++;
	}

	removeFrom(index){
		if(index>0 && index.size>0){
			return -1;
		}
		let curr = this.head;
		let previous;
		let it=0;
		if(index == 0){
			curr.next.prev=null;
			this.head=curr.next;

		}
		else{
			while(it<index){
				it++;
				previous=curr;
				curr=curr.next;
			}
			previous.next=curr.next;
			curr.next.prev=previous;

		}

		this.size--;
		return curr.element;

	}

	removeElement(element){

		let curr = this.head;
		let previous;
		while(curr){

			if(curr.element==element){
				if(previous==null){
					curr.prev=null;
					this.head=curr;
				}
				else{
					previous.next=curr.next;
					if(curr.next!=null){
						curr.next.prev=previous;
					}
				}
				return curr.element;
			}

			previous=curr;
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
			if(curr.element==element){
				return count;
			}
			count++;
			curr=curr.next;
		}
		return -1;
	}


}

let dl = new DoublyLinkedList();

console.log(dl.isEmpty());

dl.add(10); 
dl.printList();

dl.size_of_list(); 

dl.add(20); 
dl.add(30); 
dl.add(40); 
dl.add(50); 
  
// returns 10 20 30 40 50 
dl.printList(); 

// prints 50 from the list 
console.log("is element removed ?" + dl.removeElement(50)); 
  
// prints 10 20 30 40 
dl.printList(); 
  
// returns 3 
console.log("Index of 40 " + dl.indexOf(40)); 
  
// insert 60 at second positon 
// ll contains 10 20 60 30 40 
dl.insertAt(60, 2); 
  
dl.printList(); 
  
// returns false 
console.log("is List Empty ? " + dl.isEmpty()); 
  
// remove 3rd element from the list 
console.log(dl.removeFrom(3)); 
  
// prints 10 20 60 40 
dl.printList(); 




