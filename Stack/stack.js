//LIFO last in first out
function flatten(...stack){
    const result=[];
    
    while(stack.length){
        const item = stack.shift();
        
        if(Array.isArray(item)){
            stack.unshift(...item);
            continue;
        }

        result.push(item);

    }
    return result;
}

// console.log(flatten(1,2,[3,[4,5,6],7],[8,[9,10]],[1,[2,[3,[4,[5,3]]]]]));
// console.log(flatten(1,null,-1,'0',['b',2]))


// Польская нотация polish notation
// 
function calculate(expression) {
    const arr = expression.split(' ');
    const stack = [];
    
    while(arr.length){
        const item = arr.pop();
        const numbereItem = Number(item);
        
        if(!isNaN(numbereItem)){
            stack.push(numbereItem)
            continue;
        }

        const firstNum = stack.pop();
        const secondNum = stack.pop();

        switch(item){
            case '+':
                stack.push(firstNum + secondNum);
                break;
            case '-':
                stack.push(firstNum - secondNum);
                break;
            case '*':
                stack.push(firstNum * secondNum);
                break;
            case '/': 
                stack.push(firstNum / secondNum);
                break;
                 
        }
    }
    return stack[0];
}

console.log(calculate('+ 3 5', 8));
console.log(calculate('* + 2 2 3', 12));
console.log(calculate('/ + 3 5 * 2 2', 2));