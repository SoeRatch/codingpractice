

class Heap{

	constructor(){
		this.HeapList=[];
	}

	swap(i,j){
		let temp=this.HeapList[i];
		this.HeapList[i]=this.HeapList[j];
		this.HeapList[j]=temp;
	}

	//log(n)
	insert(item){
		if(this.HeapList.length==0){
			this.HeapList.push(item);
			return;
		}

		let childindex = this.HeapList.length;
		this.HeapList[childindex]=item;

		

		let parentindex=Math.floor((childindex-1)/2);
		while(childindex>0 && this.HeapList[childindex]<this.HeapList[parentindex]){
			this.swap(childindex,parentindex);
			childindex=parentindex;
			parentindex=Math.floor((childindex-1)/2);

		}

	}

	extractMin(){
		if(this.HeapList.length==0){
			return;
		}
		this.swap(0,this.HeapList.length-1);
		let min = this.HeapList.pop();

		let index_to_move=0;
		while(index_to_move<this.HeapList.length){
			let parentA=2*index_to_move+1;
			let parentB=2*index_to_move+2;
			let toswap=0;
			if(parentA>=this.HeapList.length)
				return min;
			else if(parentB>=this.HeapList.length)
					toswap=parentA;
			else{
				if(this.HeapList[parentA]<=this.HeapList[parentB])
					toswap=parentA;
				else
					toswap=parentB;
			}

			this.swap(index_to_move,toswap);
			index_to_move=toswap;

			
		}


		return min;
	}

	

}


let hp= new Heap();
hp.insert(1);
hp.insert(13);
hp.insert(7);
hp.insert(6);
hp.insert(5);
hp.insert(2);
hp.insert(4);
hp.insert(3);

console.log(hp.HeapList);

let minimum=hp.extractMin();
console.log(hp.HeapList);

 minimum=hp.extractMin();
console.log(hp.HeapList);

 minimum=hp.extractMin();
console.log(hp.HeapList);

minimum=hp.extractMin();
console.log(hp.HeapList);
