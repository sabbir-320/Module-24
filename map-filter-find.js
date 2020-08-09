// map() filter() find() method

//How to get square number -
const getSquareNum = [2, 5, 6, 1, 9]

// by loop
for (i = 0; i < getSquareNum.length; i++) {
    const element = getSquareNum[i];
    const result = element * element;
    // console.log(result);

}

//by map()
const result = getSquareNum.map(x => x * x)
console.log();

// filter method
const result = getSquareNum.filter(x => x > 5)
console.log();

// How to get specific common property from an array that has many object
const students = [
    { id: "1", name: "Omor"},
    { id: "2", name: "Ali"}
    
]
const name = students.map( x => x.name)
const ids = students.filter( x => x.id < 2)
console.log();