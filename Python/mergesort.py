arr = [12, 11, 13, 5, 6, 7]

def merge(low,mid,high):
	n1=mid-low+1
	n2=high-mid
	arr1=arr[low:mid+1]
	arr2=arr[mid+1:high+1]
	i=0
	j=0
	k=low
	while(i<n1 and j<n2):
		if(arr1[i]<=arr2[j]):
			arr[k]=arr1[i]
			i=i+1
		else:
			arr[k]=arr2[j]
			j=j+1
		k=k+1
	while(i<n1):
		arr[k]=arr1[i]
		k=k+1
		i=i+1
	while(j<n2):
		arr[k]=arr2[j]
		k=k+1
		j=j+1


def mergesort(low,high):
	if(low<high):
		mid=(low+high)//2
		mergesort(low,mid)
		mergesort(mid+1,high)
		merge(low,mid,high)




mergesort(0,len(arr)-1)
print(arr)