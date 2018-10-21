
function cleaningArray(arr, ...arg) {
var resultArray = [];
  for ( var i = 0; i < arr.length; i++ ) {
    if(!arg.includes(arr[i])) {
      resultArray.push(arr[i])
    }
  }
             
    return resultArray;
}

console.log(cleaningArray ([1, 2, 3, 1, 2, 3], 1, 2));