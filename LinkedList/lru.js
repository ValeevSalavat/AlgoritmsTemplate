// Least Recently Used (LRU) Cache

// get(key), put(key,value)
// ограниченный размер
// элементы реже используемые удаляются их хеша
// 1. делаем get(key)
// 2. возвращаем значение и переносим элемент в начало
// 3. делаем put, при максимально размере массива, например 10.
// 4. добавляем в начала, последний элемент удаляем

/*
Представим, что у нас есть веб-сервер, который на запросы на лету строит статические HTML-страницы. 
Скажем, нам не хочется билдить сотни тысяч HTML-страниц на каждый релиз, 
и раскладывать на сервере. Но так как страницы статические хорошо было 
бы положить их в кеш, чтобы зря сервер не греть. 
Однако, память не резинова, и НЕ хотелось бы держать в кеше страницы, которые редко запрашиваются. 
Вот отличный юзкейс для LRU кеша. А чтобы реализовать его оптимально — нужны связные списки
*/

class ListNode {
    constructor(key,value){
        this.key=key;
        this.value=value;
        this.prev=null;
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.length = 0;
        this.root = this.tail = null;
    }
    push(node){
        if(!this.root){
            this.root = this.tail = node;
        } 
        this.tail.nex = node;
        node.prev = this.tail;
        this.tail.node;

        this.length++;
    }

    shift(){
        const root = this.root;
        this.splice(this.root)
        return root
    }
    splice(node){
        // одна нода в списке
        if(!node.prev && !node.next){
            this.root =this.tail =null;
          //это хвост  
        } else if (!node.next){
            this.tail=node.prev;
            this.tail.next = null;

        } else if(!node.prev){
            this.root = node.next;
            this.root.prev = null
        } else{

            const next = node.next;
            const prev = node.prev;
            prev.next = next;
            next.prev = prev;
            node.next = node.prev=null;
        }

        this.length--;
    }

}

class LRUcache{
    constructor(capacity){
        this.capacity = capacity;
        this.list = new LinkedList();  
        this.map = {};
    }

    get(key){
        if(!this.map[key]){
            return -1;
        }
        const value = this.map[key].value;
        this.put(key,value);
        return value;
    }
    put(key,value){
        if(this.map[key]) {
            // если использовать linkedList - будет увеличение perfomance
            // this.list.splice(this.list.findIndex(node=>node===this.map[key]),1); 
            this.list.splice(this.map[key]);
            this.map[key] = null;
        }
        const node = new ListNode(key,value);
        this.list.push(node);

        this.map[key] = node;

        if(this.list.length > this.capacity){
            this.map[this.list.shift().key] = null;
        }
    }
}

const cache = new LRUcache(3);
cache.put(1,1);
cache.put(2,1);
cache.get(2)
cache.put(3,1);
cache.put(4,1);
console.log(cache.list)