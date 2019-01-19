let arr = [12, 11, 13, 5, 6, 7];

merge=(low,mid,high)=>{
	let n1 = mid-low+1;
	let n2 = high-mid;
	let arr1=[];
	let arr2=[];
	for(let x=0;x<n1;x++){
		arr1[x]=arr[low+x];
	}
	for(let x=0;x<n2;x++){
		arr2[x]=arr[mid+1+x];
	}

	let i=0;
	let j=0;
	let k=low;

	while(i<n1 && j<n2){
		if(arr1[i]<=arr2[j]){
			arr[k]=arr1[i];
			i++;
		}
		else{
			arr[k]=arr2[j];
			j++;
		}
		k++;
	}

	while(i<n1){
		arr[k]=arr1[i];
		i++;
		k++;
	}
	while(j<n2){
		arr[k]=arr2[j];
		j++;
		k++;
	}
}


mergesort=(low,high)=>{
	if(low<high){
		let mid = Math.floor((low+high)/2);
		mergesort(low,mid);
		mergesort(mid+1,high);
		merge(low,mid,high);
	}
}



mergesort(0,arr.length-1);
console.log(arr);
