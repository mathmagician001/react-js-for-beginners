//1
const removeFirstElem = (arr, index = 0, arrClone = [...arr]) => {
    if(arrClone.length <= 1) {
        return [];
    }
    
    if(index === arrClone.length - 1) {
        return arrClone.slice(0,-1);
    }

    arrClone[index] = arrClone[index+1];

    return removeFirstElem(null, index + 1, arrClone);
}


//2
const customFlat = arr => {
    let result = [];

    if(!Array.isArray(arr)) {
        return arr;
    }

    for(let i = 0; i < arr.length; i++) {
        result = result.concat(customFlat(arr[i]));
    }

    return result;
}


//3
const sumOfDigits = num => {
    let sum = 0;

    if(num < 0) {
        num = Math.abs(num);
    }
    
    while(num) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    
    if(sum > 9) {
        return sumOfDigits(sum);    
    }
    
    return sum;
}


//4
const swapKeyValues = obj => {
    const result = {};

    for(let [key, value] of Object.entries(obj)) {
        if(result.hasOwnProperty(value)) {
            result[value] = [...result[value], key]
        } else {
            result[value] = key;            
        }
    }

    return result;
}
