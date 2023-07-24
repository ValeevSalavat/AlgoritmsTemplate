//Алгоритм Линейного поиска
// Сложность O(n) -где n количество итераций

const array = [1,2,4,67,8,9,3,5,45];
let count = 0; //счетчик итераций

function linearSearch(array, item){
    for(let i=0;i<array.length;i++){
        count+=1;
        if(array[i]===item){
            return i;
        }
    }
    return null;
}

console.log(linearSearch(array,45));
console.log('counter: ', count);