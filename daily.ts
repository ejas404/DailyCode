//merge two arrays alternatively
function mergeArray(arr1 : number[],arr2 : number[]) : number[] {
    let i=0,j=0,k=0;
    let newArr: number[] = []
    while(i < arr1.length && j < arr2.length){
        newArr[k] = arr1[i]
        k++ ;
        i++ ;

        newArr[k] = arr2[j]
        k++;
        j++
    }

    while(i < arr1.length){
        newArr[k] = arr1[i]
        k++
        j++
    }

    while(j < arr2.length){
        newArr[k] = arr2[j]
        k++
        j++
    }

    return newArr
    
}

let x : number[] = mergeArray([1,2,3],[6,7,8,9,10])
console.log(x)


function sumTwoNumbers() : number | null {
    let result : string | null = prompt('enter two numbers between space')

    if(typeof(result) === 'string'){
       let numArr =  result.split(' ')
        let sum : number = Number(numArr[0]) + Number(numArr[1])
        return sum
    }
    return null
}

function passMark(mark : number) : string{
    if(mark >= 50 && mark <= 100){
        return "passed"
    }else{
        return "failed"
    }
}


passMark(50)



export {}