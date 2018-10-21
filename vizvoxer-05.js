console.log(whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' }
    ],
    { last: 'Capulet' }
  ));

  function whatIsInAName(collection, source) {
      var singleKey = [];
      for(let key in source) {
        singleKey[singleKey.length] = key;
      }

      singleKey = singleKey[0];
      
      for( let i = 0, l = collection.length; i < l; i++) {
          console.log(collection[i][singleKey]);
          if(collection[i][singleKey] === source[singleKey]) {
            return collection[i]
          }
      }
  }  