let graphAdjacency = {
    'a':['b','c'],
    'b':['a','d','e'],
    'c':['a','d','f'],
    'd': ['b','c']

}


function graphDfs(graphAdjacency){
   let check = new Set()
   let res = []

   function dfsSearch(){

   }
    
    for(let vrtx in graphAdjacency){
        for(let each of graphAdjacency[vrtx]){
            if(check.has(each)) continue;
            res.push(each)
            check.add(each)
        }
    }
    return res
}

console.log(graphDfs(graphAdjacency))