// Write a recursive function that computes the sum of all numbers from 1 to n, where n is given as parameter

function sum(n){
    if(n <= 1) return n;
    return n+sum(n-1)
}

// console.log(sum(3))

// Write a recursive function that finds and returns the minimum element in an array, where the array and its size are given as parameters.

const arr1 = [5,6,7,8,1]
const arr1Length =  arr1.length
let smallest = Infinity

function findSmallest(arr, length,smallest){
    if(length === 0) return smallest;
    if(arr[arr1Length - 1] < smallest){
        smallest = arr1[length-1]
    }
    return findSmallest(arr,length-1,smallest)
}

// console.log(findSmallest(arr1, arr1Length, smallest),'smallest element')