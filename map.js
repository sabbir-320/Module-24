// square number
const getSquareNum = [2, 5, 6, 1, 9]

for (i = 0; i < getSquareNum.length; i++) {
    const element = getSquareNum[i];
    const result = element * element;
    // console.log(result);

}

// square number with map method
const result = getSquareNum.map(x => x * x)
// console.log(result);

// filter method
const result = getSquareNum.filter(x => x > 5)
console.log(result);

