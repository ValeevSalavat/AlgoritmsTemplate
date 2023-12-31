// Алгоритм Бинарного поиска
// Сложность O(log 2 n) -где n количество итераций

const array = [1,2,4,67,8,9,3,5,45];
let count = 0; //счетчик итераций
let count2 = 0; //счетчик итераций


function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while(found===false && start <=end) {
        count+=1;
        middle = Math.floor((start + end) / 2); 

        if(array[middle]===item) {
            found = true;
            position = middle;
            return position;
        }

        if(item<array[middle]) {
            end=middle-1
        } else {
            start = middle+1
        }
    }
    return position;
}

console.log('binarySearch', binarySearch(array,45));
console.log('count', count);


function recirsiveBinarySearch(array, item, start=0,end=array.length) {
    count2+=1;
    let middle = Math.floor((start+end)/2);
    if(item===array[middle]){
        return middle
    }
    if(item < array[middle]){
        return recirsiveBinarySearch(array,item,start,middle-1);
    } else {
        return recirsiveBinarySearch(array,item,middle+1,end);
    }
}

console.log('recirsiveBinarySearch', recirsiveBinarySearch(array,45));
console.log('count2', count2);