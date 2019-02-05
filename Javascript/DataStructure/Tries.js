
class Node{
	constructor(){
		this.alphabets=[];
		this.endofword=false;
	}
}


class Tries{

	constructor(){
		this.root=new Node();
	}

	insert(str){
		let crawlnode=this.root;

		for(let i=0;i<str.length;i++){

			let index = 65 - str.charCodeAt(i);

			if(crawlnode.alphabets[index]==null){
				crawlnode.alphabets[index]=new Node();

			}
			crawlnode=crawlnode.alphabets[index];
		}
		crawlnode.endofword=true;
	}

	search(str){
		let crawlnode=this.root;

		for(let i=0;i<str.length;i++){
			let index = 65 - str.charCodeAt(i);

			if(crawlnode.alphabets[index]==null){
				return false;
			}
			crawlnode=crawlnode.alphabets[index];
		}
		if(!crawlnode.endofword)
			return false;
		return true;
	}


}


let keys=["the", "a", "there", "answer", "any", "by", "bye", "their"];
let output=["Not present in trie", "Present in trie"];

let t= new Tries();
for(let i = 0; i < keys.length ; i++) 
       t.insert(keys[i]); 

if(t.search("the") == true) 
    console.log("the --- " + output[1]); 
else console.log("the --- " + output[0]); 
  
if(t.search("these") == true) 
    console.log("these --- " + output[1]); 
else console.log("these --- " + output[0]); 
  
if(t.search("their") == true) 
    console.log("their --- " + output[1]); 
else console.log("their --- " + output[0]); 
  
if(t.search("thaw") == true) 
    console.log("thaw --- " + output[1]); 
else console.log("thaw --- " + output[0]); 


