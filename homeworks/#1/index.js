//1
const filterElemsLargerThanNum = (arr, num) => {
    const targetElems = arr.filter(elem => elem > num);
    
    if(!targetElems.length) {
        return "Such values do not exist";
    }
    
    return targetElems;
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
        return result.slice(0, -2)
    } else if (!result.length) {
        return "such numbers does not exist";
    }

    return result;
}

const allDigitsAreEven = (num) => {
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
//if the leading numbers are not zero, this code works
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
    if(!arr.length) {
        if(min === undefined) {
            return -1;
        }
        
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
