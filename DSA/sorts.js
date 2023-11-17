function swapArrays(arr , a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]]
}

let array = [8,3,4,2,5,1]

function bubbleSort(arr){
    for(let i = 0 ; i< arr.length; i++){
        let check = true
        for(let j = 0; j< arr.length -  i; j++){
            if(arr[j] > arr[j+1]){
                check = false
                swapArrays(arr,j,j+1)
            }
            
        }

        if(check)break;
    }

    console.log(arr)
}

//bubbleSort(array)

function insertionSort(arr){
    
    for(let i = 1 ; i< arr.length ; i++){
        let current = arr[i]
        let j;
        for(j = i-1 ; j>=0 && arr[j] > current ; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = current
    }
    console.log('insertion')
    console.log(arr)
}
//insertionSort(array)

function pivot(arr, start = 0, end = arr.length-1){
    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1 ; i<= end; i++){
        if(arr[i] < pivot){
            swapIdx++
            swapArrays(arr,i,swapIdx)
        }
    }

    swapArrays(arr,start,swapIdx)
    return swapIdx
}


function quickSort(arr,  left = 0 , right = arr.length - 1){
    if(left < right){
        let pivotIdx = pivot(arr, left, right)

        //left of pivot 
        quickSort(arr,left,pivotIdx-1)

        //right of pivot
        quickSort(arr,pivotIdx+1, right)
    }

        return arr
    
}

console.log(quickSort([4,8,7,3,1,2,9]))

