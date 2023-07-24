//  сортировка выбором O(1/2 * n^2)

const arr = [0,93,4,5,2,4,-2,-54,-400,34,23,10,192,93,94,9,-5,-4,-3,-2,-1];

let count = 0;

function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let indexMin=i;
        for(let j=i+1;j<array.length;j++){
            if(array[j] < array[indexMin]){
                indexMin = j;
            }
            count+=1;
        }
        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }
    return array
}

console.log(selectionSort(arr));
console.log('count=',count);