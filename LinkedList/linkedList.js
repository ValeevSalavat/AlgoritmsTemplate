// каждый отдельно взятый элемент списка занимает отдельное место в памяти
// каждый предыдущий элемент хранит ссылку на след элемент в списке
// использовать тогда, когда редко приходится обращаться к данным 
// и часто дополнять данными



class LinkedList{
    constructor(value){
        this.size =0;
        this.root = null;
    }
    add(value){
        if(this.size===0){
            this.root = new Node(value);
            this.size+=1;
            return true
        }
        let node = this.root;
        while(node.next){
            node = node.next
        }
        let newNode = new Node(value);
        node.next = newNode;
        this.size+=1;
    }

    getSize(){
        return this.size;
    }

    print(){
        let result = [];
        let node = this.root
        while(node){
            result.push(node.value)
            node= node.next
        }
        console.log(result) 
    }
}

class Node {
    constructor(value){
        this.value=value;
        this.next = null;
    }
}


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);

list.print()