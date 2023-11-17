

// setImmediate(() => {
//     console.log('setImmediate callback');
// });


// console.log('This is the main code');

// process.nextTick(() => {
//     console.log('process.nextTick callback');
// });



// Output order:
// This is the main code
// process.nextTick callback
// setImmediate callback


class TrieNode {
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insertWord(word){
        let root = this.root
        for(let each of word){
            if(!root.children[each]){
                root.children[each] = new TrieNode()
            }
            root = root.children[each]
       }
       root.isEndOfWord = true
    }

    printAllWord(){

        let words = []

       function printWords(root,prefix, words){
            if(root.isEndOfWord){
                words.push(prefix)
            }

            for(let each in root.children){
                printWords(root.children[each],prefix+each,words)
            }
        }

        printWords(this.root,"",words)

        return words
    }
}

let tr = new Trie()

tr.insertWord('apple')
tr.insertWord('app')
tr.insertWord('amplify')
tr.insertWord('break')

console.log(tr)

console.log(tr.printAllWord())
