const testArr = ["Apple", "Arrow", "Bon appetit", "Bonjour"];

function countArrItemsLength(arr) {
    return arr.map(function(str) {
        return (str.length)
    });
};

console.log(countArrItemsLength(testArr));