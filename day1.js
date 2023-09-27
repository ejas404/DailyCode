//remove duplicate

s = "cbacdcbc"

let removeDuplicateLetters = function(s) {
    let sArray = s.split('')
    for(let i = 0 ; i< sArray.length;i++){
        for(let j = i+1 ; j< sArray.length;j++){
            if(sArray[i] == sArray[j]){
                sArray.splice(i,1)
            }
        }
    }
    return sArray.join('')
};

removeDuplicateLetters(s)