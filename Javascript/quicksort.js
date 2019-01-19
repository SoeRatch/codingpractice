let arr = [10, 80, 30, 90, 70, 50, 40];

swap=(a,b)=>{
	let temp=arr[a];
	arr[a]=arr[b];
	arr[b]=temp;
}

partition=(low,high)=>{
	let pivot = arr[high];
	let i = low-1;

	for(let j=low;j<high;j++){

		if(arr[j]<pivot){
			i++;
			swap(i,j);
		}

	}
	i++;
	swap(i,high);
	return i;
}


quicksort=(low,high)=>{
	if(low<high){
		let pi=partition(low,high);
		quicksort(low,pi-1);
		quicksort(pi+1,high);
	}
}

quicksort(0,arr.length-1);
console.log("Sorted Array: ",arr);