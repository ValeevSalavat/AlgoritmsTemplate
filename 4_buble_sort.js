//  сортировка пузырьком O(n^2)

const arr = [0,93,4,5,2,4,-2,-54,-400,34,23,10,192,93,94,9,-5,-4,-3,-2,-1];

let count = 0;

function bubleSort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j+1] < array[j]){
                let tmp = array[j];
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1;
        }
    }
    return array;
}

console.log(bubleSort(arr));
console.log('count=',count);