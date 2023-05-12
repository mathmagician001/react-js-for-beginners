//1
const filterElemsLargerThanNum = (arr, num) => {
    const targetArr = arr.filter(elem => elem > num);
    
    if(!targetArr.length) {
        return "Such values do not exist";
    }
    
    return targetArr;
}

//2
const getEvenDigitNumbers = (num1, num2) => {
    let result = "";
    for(let i = num1; i <= num2; i++) {
        if(allDigitsAreEven(i)) {
            result += `${i}, `;
        }
    }
    
    if(result.at(-1) === " ") {
        return result.slice(0, -2);
    }
    
    if (!result.length) {
        return "such numbers do not exist";
    }

    return result;
}

const allDigitsAreEven = num => {
    let result = num;
    while(result) {
        if((result % 10) % 2) {
           return false; 
        }
        result = Math.trunc(result / 10);
    }
    return true;
}


//3
/* assuming leading digits of a number cannot be 0. if it can, then the first if statement in line 47 would be if(!String(num).length) */
const allDigitsAreOdd = num => {
    if(!num) {
        return true;
    }

    if(!(num % 2)) {
        return false;
    }

    return allDigitsAreOdd(Math.trunc(num/10));
}

//4
const getMinPositiveElem = (arr, min) => {
    if(!arr.length && min === undefined) {
        return -1;
    }

    if(!arr.length) {
        return min;
    }
    
    if(arr[0] >= 0 && (arr[0] < min || min === undefined)) {
        min = arr[0];
    }

    return getMinPositiveElem(arr.slice(1), min);
}

//5
const violatingIndex = (arr, index = 0) => {
    if(index === arr.length - 1) {
        return -1;
    }
    
    if(arr[index] > arr[index + 1]) {
        return index + 1;
    }

    return violatingIndex(arr, index + 1);
}
