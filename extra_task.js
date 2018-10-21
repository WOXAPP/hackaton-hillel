
// Write your own map, filter and reduce functions, so that when composed, they iterate only once through initial
// array and create only 1 new array, without creating intermediate arrays

function map() {

}

function filter() {

}

function reduce(){

}

const arr = [1,2,3,4,5];


// This is evil create your own version with function aboves
const result = arr
    .map((value) => value + 1)
    .filter((incrementedValue) => incrementedValue % 1 === 0)
    .reduce((acc, curr) => acc + curr, 0);
