/*
1) Input:  txt[] = "BACDGABCDA"  pat[] = "ABCD"
   Output:   Found at Index 0
             Found at Index 5
             Found at Index 6
2) Input: txt[] =  "AAABABAA" pat[] = "AABA"
   Output:   Found at Index 0
             Found at Index 1
             Found at Index 4
*/


let str= "AAABABAA";
let pattern = "AABA";


function compare(objA,objB){

	for(let ch in objA){
		if(objA.hasOwnProperty(ch)!==objB.hasOwnProperty(ch))
			return false;
		if(objA[ch]!=objB[ch])
			return false;
	}

	return true;
}


function search(str,pattern){

	let strjson={};
	let patternjson={};

	for(let i=0;i<pattern.length;i++){

		patternjson[pattern[i]]= (patternjson[pattern[i]]+1)||1;
		strjson[str[i]]=(strjson[str[i]]+1)||1;
	}


	for(let i=0;i<=str.length-pattern.length;i++){
		if(compare(patternjson,strjson)){
			console.log("Found at Index ",i);
		}
		strjson[str[i]]=strjson[str[i]]-1;
		strjson[str[i+pattern.length]]=(strjson[str[i+pattern.length]]+1)||1

	}

}

search(str,pattern);

