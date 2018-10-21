function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKey = '',
      sourceValue = '';
  for(let key in source) {
    sourceKey = key;
    sourceValue = source[key];
  }
  collection.forEach(item => {
    if(item[sourceKey] === source[sourceKey] && item[sourceValue] === source[sourceValue]) {
      arr.push(item);
    }
  });
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' }
  ],
  { last: 'Capulet' }
));