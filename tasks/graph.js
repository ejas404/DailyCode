let graphAdjacency = {
    'a':[
      {node : 'b', edge : 4},
      {node :'c', edge : 5}
     ],
    'b':[
      {node : 'a', edge : 4},
      {node : 'd', edge : 3},
      {node : 'e', edge : 1}
    ],
    'c':[
      {node : 'a', edge : 5},
      {node : 'd', edge : 8},
      {node : 'f', edge : 6}
    ],
    'd':[
      {node : 'b', edge : 3},
      {node : 'c', edge : 8}
    ],
    'f':[],
    'e':[]

}

function shortestPath(vrtx){
    let que = [vrtx]
    let check = {}

    while(que.length){
      let current = que.shift()

      for(let each in graphAdjacency[current]){
        if(!check[each.node]){
          check[each.node] = each.edge
        }
      }
    }

}

function bfs(startVertex) {
  const queue = [startVertex];
  const result = [];
  const visited = {};

  visited[startVertex] = true;

  while (queue.length) {
    const currentVertex = queue.shift();
    result.push(currentVertex);

    graphAdjacency[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    });
  }

  return result;
}

//console.log(bfs('b'))

// function bfs(){
//   let queue = ['a']
//   let checked = new Set()

//   while(queue.length > 0){
//     let vrtx = queue.shift()
//     checked.add(vrtx)

//     for(let each of graphAdjacency[vrtx]){
//         if(checked.has(each)) continue;
//         queue.push()

//     }

//   }
  
// }


// function dfs(){
//   let check = new Set()
//   let stack = []  

//   function traverse(node){
//         if(check.has(node)) return;
//         check.add(node)
//         for(let vrtx of graphAdjacency[node]){
//             traverse(vrtx)
//         }
//   }

//   traverse('e')
//   return [...check]
// }

// console.log(dfs())


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