class LiNode{
    val : number;
    next: null | LiNode;
    constructor(val : number){
        this.val = val
        this.next= null
    }
}

class SinglyLinkedList{
    head : null | LiNode ;
    tail : null | LiNode;
    lengh : number = 0
    constructor(){
        this.head = null
        this.tail = null
    }

    push(val : number){
        let newNode = new LiNode(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            if(this.tail){
             this.tail.next = newNode
             this.tail = newNode
            }
        }
    }

    pop(){
        let current = this.head

        while(current?.next?.next){
            current = current.next
        }

        let popped = current?.next
        current!.next = null
        this.tail = current

        return popped
    }

    reverse(){
        let current = this.head
        let prev : LiNode | null  = null
        let next : LiNode | null  ;

        while(current){
            next = current?.next
            current.next = prev
            prev = current
            current = next          
        }

        [this.head , this.tail] = [this.tail , this.head]

        return this

    }
}


