let graphAdjacency = {
    'a':['b','c'],
    'b':['a','d','e'],
    'c':['a','d','f'],
    'd': ['b','c'],
    'f':[],
    'e':[]

}


function dfs(){
  let check = new Set()
  let stack = []  

  function traverse(node){
        if(check.has(node)) return;
        check.add(node)
        for(let vrtx of graphAdjacency[node]){
            traverse(vrtx)
        }
  }

  traverse('e')
  return [...check]
}

console.log(dfs())


// function graphDfs(graphAdjacency){
//    let check = new Set()
//    let res = []

//    function dfsSearch(){

//    }
    
//     for(let vrtx in graphAdjacency){
//         for(let each of graphAdjacency[vrtx]){
//             if(check.has(each)) continue;
//             res.push(each)
//             check.add(each)
//         }
//     }
//     return res
// }

// console.log(graphDfs(graphAdjacency))