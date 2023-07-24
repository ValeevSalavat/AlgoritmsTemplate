// Алгоритм Бинарного поиска
// Сложность O(log 2 n) -где n количество итераций

const array = [1,2,4,67,8,9,3,5,45];
let count = 0; //счетчик итераций

function binarySearch(array, item){
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while(found===false && start <=end){
        count+=1;
        middle = Math.floor((start + end) / 2); //

        if(array[middle]===item){
            found = true;
            position = middle;
            return position;
        }

        if(item<array[middle]){
            end=middle-1
        } else {
            start = middle+1
        }
    }
    return position;
}
console.log('binarySearch', binarySearch(array,8));
console.log('count', count);