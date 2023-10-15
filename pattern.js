// //50
// //45 40
// //35 30 25
// //20 15 10 5

// let k = 50
// for(let i = 0 ; i< 4;i++){
//     let res = ""
//     for(let j = 0 ; j<=i ; j++){
//         res+=`${k} `
//         k-=5
//     }
//     console.log(res)
// }

let n = 5

for(let i = 0 ; i<n;i++){
    let res = ""
    for(let j = 1 ; j <=n-i;j++ ){
        res+=`${j} `
    }
    for(let k = n-i-1 ; k > 0 ; k--){
        res+=`${k} `
    }

    console.log(res)
}