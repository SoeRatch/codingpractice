let pattern = "COOL";
let str = "HOW COOL ARE WE COOL PEOPLE IN THIS COOL WORLD"; 

var prime = 33554393;


function codeAt(str,index){
	return str.charCodeAt(index)-65;
}

function search(pattern,str){

	let m =pattern.length;
	let n =str.length;

	let hash_result=0;
	let hash_str=0;
	let count =0;
	for(let i=0;i<pattern.length;i++){
		hash_result=hash_result+((codeAt(pattern,i)*(Math.pow(26,m-1-i)))%prime); //((code of 'C')*(26^m-1))%prime  + .. + ((code of 'L')*(26^0))%prime
		hash_str=hash_str+((codeAt(str,i)*(Math.pow(26,m-1-i)))%prime);

	}

	for(let i=0;i<n-m;i++){
		if(hash_str===hash_result){
			count=count+1;
		}
		hash_str=((hash_str-(codeAt(str,i)*Math.pow(26,m-1)))*26)+codeAt(str,i+m);
	}

	return count;

}







let occurence = search(pattern,str);
console.log(occurence);