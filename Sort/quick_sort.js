//  быстрая сортировка O(log2n * n)

const arr = [0,93,4,5,2,4,-2,-54,-400,34,23,10,192,93,94,9,-5,-4,-3,-2,-1];

let count = 0;

function quickSort(array){

    if(array.length<=1){
        return array;
    }

    let pivotIndex = Math.floor(array.length / 2)
    let pivot = array[pivotIndex];
    let less=[];
    let greatest = [];

    
    for (let i = 0; i < array.length; i++) {
        count+=1;
        if(i===pivotIndex){
            continue;
        }
        if(array[i] < pivot){
            less.push(array[i])
        } else {
            greatest.push(array[i])
        }

    }
    return [...quickSort(less), pivot,...quickSort(greatest)];
}

console.log(quickSort(arr));
console.log('count=',count);