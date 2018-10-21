var newStr = `eye`;

var subString1 = newStr.substr(0, (newStr.length + 1)/2);
var subString2 = (newStr.substr((newStr.length)/2)).split('').reverse().join(``);

console.log(subString1 == subString2);