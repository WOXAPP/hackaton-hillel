const testArr = ["Apple", "Arrow", "Bon appetit", "Bonjour"];

function countArrItemsLength(arr) {
    let sum = [];
    for(let i = 0; i < arr.length; i++ ){
        sum.push(arr[i].length) ;
    }
    return sum;
}

console.log(countArrItemsLength(testArr)); // [5, 5, 11, 7]