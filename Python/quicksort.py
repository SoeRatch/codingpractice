arr = [10, 7, 8, 9, 1, 5] 


def swap(a,b):
	temp=arr[a]
	arr[a]=arr[b]
	arr[b]=temp

def partition(arr,low,high):
	pivot=arr[high]
	i=(low-1)
	for j in range(low,high):
		if(arr[j]<=pivot):
			i=i+1
			swap(i,j)
	i=i+1
	swap(i,high)
	return i

def quicksort(arr,low,high):
	if(low<high):
		pi=partition(arr,low,high)
		quicksort(arr,low,pi-1)
		quicksort(arr,pi+1,high)


quicksort(arr,0,len(arr)-1)

print(arr)