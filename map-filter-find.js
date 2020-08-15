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
const result1 = getSquareNum.map(x => x * x)


// filter method = for some select
const result2 = getSquareNum.filter(x => x > 5)


// How to get specific common property from an array that has many object
const students = [
    { id: "1", name: "Omor"},
    { id: "2", name: "Ali"}
]

const result = [];
for(let i = 0; i < students.length; i++){
    const element = students[i]
    result.push(element.name);
    
}
// console.log(result);

const name = students.map( x => x.name)
const ids = students.filter( x => x.id < 2)
