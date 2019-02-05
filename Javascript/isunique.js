/*Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?*/

let str = "Aaghlkjk";



let swap=(i,j,string)=>{
	let temp=string[i];
	string[i]=string[j];
	string[j]=temp;
}

let partition=(str,low,high)=>{
	let pivot=str[high].charCodeAt(0);
	let i=low-1;
	let j=low;

	while(j<high){
		if(str[j].charCodeAt(0)<pivot){
			i=i+1;
			swap(i,j,str);
		}
		j=j+1;

	}

	i=i+1;
	swap(i,high,str);
	return i;

}



let quicksort=(str,low,high)=>{
	if(low<high){
		let pi=partition(str,low,high);
		quicksort(str,low,pi-1);
		quicksort(str,pi+1,high);
	}
}




let isUnique=(str)=>{
	quicksort(str,0,str.length-1); //nlogn

	//n
	for(let i=0;i<str.length-1;i++){
		if(str[i].charCodeAt(0)==str[i+1].charCodeAt(0))
			return false;
	}
	return true;


}

str=str.split('');
console.log(isUnique(str));


