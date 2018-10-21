var resultArray = [];

function cleaningArray(arr, ...arg) {
  for ( var i = 0; i < arr.length; i++ ) {
    for ( var j = 0; j < arg.length; j++ ) {
      if ( arr[i] == arg[j] ) {
        delete arr[i]
      }
    }
  }
  
    arr.forEach(function(item) {
     resultArray.push(item)
 })
             
    return console.log(resultArray)
}

cleaningArray ([1, 2, 3, 1, 2, 3], 1, 2);


  