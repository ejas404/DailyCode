// dsa binary search
// for binary search the array providing must be sorted

function binarySearch(arr : number[] , val : number) : string {
    let start = 0
    let end = arr.length-1
    let mid = Math.floor((start + end)/2)

    while(start < end){
        if(arr[mid] === val){
            return `the value is in ${mid}th position`
        }

        if(val < arr[mid]){
            end = arr[mid - 1]
        }else if (val > arr[mid]){
            start = arr[mid + 1]
        }

        mid = Math.floor((start + end)/2)
    }

    return 'there is no such value existing'
}