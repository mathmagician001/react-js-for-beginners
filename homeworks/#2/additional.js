//1
const logElems = arr => arr.forEach(console.log);


//2
const sumOfTwoNums = (num1, num2) => num1 + num2;

//3
const sumOfNums = arr => arr.reduce((acc, elem) => acc + elem);

//4
const numsPlusN = (arr, n = 0) => arr.map(elem => elem + n);

//5
const areaOfTriangle = (h,b) => (h * b) / 2;

//6
const reverseString = str => {
    let result = '';
    
    for(let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

//7
const maximumNum = arr => {
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
